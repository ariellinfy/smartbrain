"use server";

import { signIn, auth, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { authSchema } from "./zod";
import { createUser } from "./queries";
import { saltAndHashPassword } from "./utils";
import { StateAuth, StatePrediction } from "./types";
import { getUserEntries, updateUserEntries } from "./queries";

export async function faceDetection(
  prevState: StatePrediction,
  formData: FormData
): Promise<StatePrediction> {
  const session = await auth();
  if (!session?.user) {
    return {
      error: "Failed to detect faces. User not authenticated.",
    };
  }
  const options = {
    method: "POST",
    body: formData,
  };

  try {
    const res = await fetch(process.env.NEXTAUTH_URL + "api/playground", {
      cache: "no-store",
      ...options,
    });
    const data = await res.json();

    if (data) {
      await updateUserEntries(session.user.id);
      const userEntries = await getUserEntries(session.user.id);
      return { response: { ...data, userEntries } };
    }

    return {
      error: "No data returned from face detection.",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to detect faces.",
    };
  }
}

export async function handleSignOut(formData: FormData) {
  await signOut({ redirectTo: "/signin" });
}

export async function register(prevState: StateAuth, formData: FormData) {
  const validatedFields = authSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register User.",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await saltAndHashPassword(password);

  try {
    await createUser(name, email, hashedPassword);
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  await signInWithCredentials(prevState, formData);
  redirect("/playground");
}

export async function authenticate(formData: FormData, type: string) {
  await signIn(type, formData, { redirectTo: "/playground" });
}

export async function signInWithCredentials(
  prevState: string | StateAuth | undefined,
  formData: FormData
) {
  try {
    await authenticate(formData, "credentials");
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("credentials error", error);
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  } finally {
    revalidatePath("/playground");
    redirect("/playground");
  }
}

export async function signInWithGoogle(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await authenticate(formData, "google");
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("google error", error);
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signInWithGithub(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await authenticate(formData, "github");
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("github error", error);
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
