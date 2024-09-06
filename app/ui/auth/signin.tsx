"use client";

import Link from "next/link";
import { useState } from "react";

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // fetch(process.env.REACT_APP_SERVER_URL + "/signin", {
    //     method: "post",
    //     headers: { "Content-Type": "Application/json" },
    //     body: JSON.stringify({
    //       email: signInEmail,
    //       password: signInPassward,
    //     }),
    //   })
    //     .then((response) => response.json())
    //     .then((user) => {
    //       if (user.id) {
    //         loadUser(user);
    //         onRouteChange("home");
    //       }
    //     })
    //     .catch(console.log);
  };

  return (
    <form
      className="flex flex-col min-w-[300px] w-full max-w-[600px] px-0 py-10 mx-auto md:-mt-32 rounded-lg border-2 bg-slate-50/50 justify-center items-center gap-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-5xl">Sign In</h1>
      <fieldset className="flex flex-col gap-5 w-1/2">
        <div className="flex flex-col justify-between items-left w-full gap-3">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 rounded"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col justify-between items-left w-full gap-3">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <input
            value={formData.password}
            onChange={handleInputChange}
            className="p-2 rounded"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
      </fieldset>
      <div className="flex flex-col gap-3 mt-3">
        <button
          className="p-3 rounded bg-slate-50 hover:opacity-80 font-bold text-lg"
          type="submit"
        >
          Sign in
        </button>
        <Link
          className="p-3 rounded font-bold text-lg hover:text-slate-700"
          href={"/auth/signup"}
        >
          Register
        </Link>
      </div>
    </form>
  );
};
