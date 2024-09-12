"use client";

import Link from "next/link";
import { useActionState } from "react";
import { StateAuth } from "@/app/lib/types";
import { register } from "@/app/lib/actions";

export const SignUpForm = () => {
  const initialState: StateAuth = { message: null, errors: {} };
  const [state, formAction] = useActionState(register, initialState);

  return (
    <div className="flex flex-col min-w-[300px] w-full max-w-[600px] px-0 py-16 mx-auto md:-mt-32 rounded-lg border-2 bg-slate-50/50 justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl">Register</h1>
        <div className="flex justify-center items-center">
          <div>Already has an account? </div>
          <Link
            className="p-3 rounded font-bold text-lg hover:text-slate-700"
            href={"/signin"}
          >
            Sign In
          </Link>
        </div>
      </div>

      <form
        className="flex flex-col w-full justify-center items-center gap-10"
        action={formAction}
      >
        <fieldset className="flex flex-col gap-5 w-1/2">
          <div className="flex flex-col justify-between items-left w-full gap-3">
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="px-3 py-2 rounded"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="text-sm text-rose-700 font-bold" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
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
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="text-sm text-rose-700 font-bold" key={error}>
                    {error}
                  </p>
                ))}
            </div>
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
              placeholder="Enter password"
            />
            <div aria-live="polite" aria-atomic="true">
              {state.errors?.password &&
                state.errors.password.map((error: string) => (
                  <p className="text-sm text-rose-700 font-bold" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </fieldset>
        <button
          className="p-3 rounded bg-black hover:opacity-80 font-bold text-lg w-1/2 text-white"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
