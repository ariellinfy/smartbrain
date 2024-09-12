"use client";

import { RankProps } from "@/app/lib/types";

export const Rank = ({ name, entries }: RankProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <div className="text-slate-200 text-2xl text-center">
        {`${name}, your current entry count is...`}
      </div>
      <div className="text-white text-5xl">{entries}</div>
    </div>
  );
};
