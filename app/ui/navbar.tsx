import Link from "next/link";
import { siteConfig } from "../lib/sites";
import { Logo } from "./logo";

export const Navbar = () => {
  const linkStyles =
    "font-medium text-default-500 transition-opacity hover:opacity-80 hover:font-bold cursor-pointer dark:hover:text-zinc-300 dark:hover:opacity-90 drop-shadow-md hover:drop-shadow-lg";

  return (
    <nav className="justify-between pr-6 pl-2">
      <Link className="flex justify-start items-center gap-1" href="/">
        <Logo />
      </Link>
      <ul className="flex gap-4 justify-start ml-2">
        {siteConfig.visitorNavItems.map((item) => (
          <Link key={item.href} className={linkStyles} href={item.href}>
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
