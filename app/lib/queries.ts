import { sql } from "@vercel/postgres";
import { User } from "./types";

export async function getUserEntries(id: string): Promise<number> {
  try {
    const user = await sql<User>`SELECT entries FROM users WHERE id=${id}`;
    return user.rows[0].entries;
  } catch (error) {
    console.error("Failed to fetch user entries:", error);
    throw new Error("Failed to fetch user entries.");
  }
}

export async function updateUserEntries(id: string): Promise<User> {
  try {
    const updatedUser = await sql<User>`UPDATE users SET entries = entries + 1 WHERE id=${id} RETURNING *`;
    return updatedUser.rows[0];
  } catch (error) {
    console.error("Failed to update user entries:", error);
    throw new Error("Failed to update user entries.");
  }
}

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function createUser(
  name: string,
  email: string,
  hash: string
): Promise<User> {
  try {
    const newUser = await sql<User>`
      INSERT INTO users (name, email, hash)
      VALUES (${name}, ${email}, ${hash})
      RETURNING *`;
    return newUser.rows[0];
  } catch (error) {
    console.error("Failed to create user:", error);
    throw new Error("Failed to create user.");
  }
}
