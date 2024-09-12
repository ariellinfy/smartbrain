import type { NextAuthConfig } from "next-auth";
import { getUser } from "./app/lib/queries";
import { User } from "./app/lib/types";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPlayground = nextUrl.pathname.startsWith("/playground");
      if (isOnPlayground) {
        if (isLoggedIn) return true;
        return Response.redirect(new URL("/signin", nextUrl)); // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/playground", nextUrl));
      }
      return true;
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      session.user.id = (user as User).id;
      session.user.entries = (user as User).entries;
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
