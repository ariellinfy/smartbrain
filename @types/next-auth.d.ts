import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      entries: number;
    } & DefaultSession["user"];
  }
}
