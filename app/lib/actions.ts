"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { authSchema } from "./zod";
import { createUser } from "./queries";
import { saltAndHashPassword } from "./utils";
import { State } from "./types";

export async function register(prevState: State, formData: FormData) {
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
  prevState: string | State | undefined,
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
