import { sql } from "@vercel/postgres";
import { User } from "./types";

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
