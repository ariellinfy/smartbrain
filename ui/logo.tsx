"use client";

import Image from "next/image";

export const Logo = () => {
  return (
    <div
      className="flex justify-center items-center bg-gradient-30 from-cyan-400 to-yellow-500 border-none outline-none"
      style={{ height: 150, width: 150 }}
    >
      <Image
        src="/brain.png"
        alt="logo"
        width={100}
        height={100}
        className="pt-[10px]"
      />
    </div>
  );
};
