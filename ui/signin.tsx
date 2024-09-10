"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  signInWithCredentials,
  signInWithGithub,
  signInWithGoogle,
} from "@/app/lib/actions";

export const SignInForm = () => {
  const [emailMessage, emailSignIn, emailPending] = useActionState(
    signInWithCredentials,
    undefined
  );
  const [googleError, googleSignIn, googlePending] = useActionState(
    signInWithGoogle,
    undefined
  );
  const [githubMessage, githubSignIn, githubPending] = useActionState(
    signInWithGithub,
    undefined
  );

  return (
    <div className="flex flex-col min-w-[300px] w-full max-w-[600px] px-0 py-16 mx-auto md:-mt-32 rounded-lg border-2 bg-slate-50/50 justify-center items-center gap-10">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-5xl">Sign In</h1>
          <div className="flex justify-center items-center">
            <div>Don't have an account yet? </div>
            <Link
              className="p-3 rounded font-bold text-lg hover:text-slate-700"
              href={"/signup"}
            >
              Register
            </Link>
          </div>
        </div>
        <div aria-live="polite" aria-atomic="true">
          {emailMessage && (
            <p className="text-sm text-rose-700 text-center font-bold">
              {emailMessage}
            </p>
          )}
        </div>
      </div>

      <form
        className="flex flex-col w-full justify-center items-center gap-10"
        action={emailSignIn}
      >
        <fieldset className="flex flex-col gap-5 w-1/2">
          <div className="flex flex-col justify-between items-left w-full gap-3">
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="px-3 py-2 rounded"
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col justify-between items-left w-full gap-3">
            <label className="text-lg" htmlFor="password">
              Password
            </label>
            <input
              className="px-3 py-2 rounded"
              type="password"
              name="password"
              id="password"
              required
              minLength={8}
              placeholder="Enter password"
            />
          </div>
        </fieldset>
        <button
          className="p-3 rounded bg-slate-50 hover:opacity-80 font-bold text-lg w-1/2"
          aria-disabled={emailPending}
        >
          Sign In
        </button>
      </form>
      <form action={googleSignIn} className="w-1/2">
        <button
          className="p-3 rounded hover:opacity-80 font-bold text-lg w-full bg-black text-white"
          aria-disabled={googlePending}
          type="submit"
        >
          Continue with Google
        </button>
      </form>
      <form action={githubSignIn} className="w-1/2">
        <button
          className="p-3 rounded hover:opacity-80 font-bold text-lg w-full bg-black text-white"
          aria-disabled={githubPending}
          type="submit"
        >
          Continue with GitHub
        </button>
      </form>
    </div>
  );
};
