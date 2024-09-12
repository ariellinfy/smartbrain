import NextAuth from "next-auth";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { authConfig } from "./auth.config";
import { authSchema } from "./app/lib/zod";
import { getUser } from "./app/lib/queries";
import { verifyPassword } from "./app/lib/utils";

export const { handlers, signIn, signOut, auth } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.POSTGRES_URL });
  return {
    ...authConfig,
    adapter: PostgresAdapter(pool),
    providers: [
      Google,
      GitHub,
      Credentials({
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const parsedCredentials = authSchema
            .omit({ name: true })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (user) {
              const isValid = await verifyPassword(password, user.hash);
              if (isValid) {
                return user;
              }
            }
          }

          return null;
        },
      }),
    ],
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    secret: process.env.NEXTAUTH_SECRET,
  };
});
