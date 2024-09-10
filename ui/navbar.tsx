import Link from "next/link";
import { siteConfig } from "@/app/lib/sites";
import { Logo } from "./logo";
import { auth, signOut } from "@/auth";

export const Navbar = async () => {
  const session = await auth();

  const linkStyles =
    "text-default-300 transition-opacity hover:text-white hover:font-bold cursor-pointer drop-shadow-md hover:drop-shadow-lg";

  return (
    <nav className="flex justify-between items-center p-3 pr-10">
      <Link className="flex justify-center items-center gap-1" href="/">
        <Logo />
      </Link>
      <ul className="flex gap-5 sm:gap-10 justify-end ml-5 text-white text-xl sm:text-2xl">
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/signin" });
            }}
          >
            <button type="submit" className={linkStyles}>
              Sign Out
            </button>
          </form>
        ) : (
          siteConfig.visitorNavItems.map((item) => (
            <Link key={item.href} className={linkStyles} href={item.href}>
              {item.label}
            </Link>
          ))
        )}
      </ul>
    </nav>
  );
};
