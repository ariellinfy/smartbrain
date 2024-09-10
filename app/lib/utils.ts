import bcrypt from "bcryptjs";

export async function saltAndHashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of salt rounds

  try {
    // Generate a salt and hash the password with it
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  } catch (error) {
    throw new Error(
      "Error while hashing password: " + (error as Error).message
    );
  }
}

export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    // Compare the plain password with the hashed password
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error(
      "Error while verifying password: " + (error as Error).message
    );
  }
}
