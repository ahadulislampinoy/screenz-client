import {
  FilmIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="sticky bg-[#040714] top-0 z-50 flex items-center px-10 md:px-12 h-[72px]">
      <h1 className="text-white text-3xl font-bold cursor-pointer">
        Screenz<span className="text-purple-500 font-extrabold">.</span>
      </h1>
      <ul className="hidden ml-10 md:flex items-center space-x-6">
        <li className="header-link-list group">
          <HomeIcon className="h-4" />
          <Link href="/" className="header-link">
            Home
          </Link>
        </li>
        <li className="header-link-list group">
          <FilmIcon className="h-4" />
          <Link href="/" className="header-link">
            Movies
          </Link>
        </li>
        <li className="header-link-list group">
          <img src="/images/series-icon.svg" alt="" className="h-5" />
          <Link href="/" className="header-link">
            Series
          </Link>
        </li>
        {status === "authenticated" && (
          <li className="header-link-list group">
            <PlusIcon className="h-4" />
            <Link href="/" className="header-link">
              Watchlist
            </Link>
          </li>
        )}
        <li className="header-link-list group">
          <MagnifyingGlassIcon className="h-4" />
          <Link href="/" className="header-link">
            Search
          </Link>
        </li>
      </ul>
      {status === "authenticated" ? (
        <>
          <img
            alt="Profile Picture"
            src={session?.user?.image}
            className="ml-auto border hidden sm:block h-10 w-10 rounded object-cover"
          />
          <button
            onClick={() => signOut()}
            className="ml-auto sm:ml-3 uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-300"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
