"use client";

import { ImageFormProps } from "@/app/lib/types";

export const ImageForm = ({ formAction, isPending }: ImageFormProps) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <div className="text-slate-200 text-2xl text-center">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </div>
      <form
        className="flex gap-5 w-full md:w-2/3 justify-center items-center"
        action={formAction}
      >
        <input
          className="p-3 text-lg rounded-lg w-4/6 disabled:cursor-not-allowed"
          type="text"
          name="url"
          disabled={isPending}
        />
        <button
          className="p-3 text-lg rounded-lg bg-black text-white w-2/6 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-90"
          type="submit"
          disabled={isPending}
        >
          Detect
        </button>
      </form>
    </div>
  );
};
