import {
  FilmIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky bg-[#040714] top-0 z-50 flex items-center px-10 md:px-12 h-[72px]">
      <h1 className="text-white text-3xl font-bold cursor-pointer">Screenz.</h1>
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
        <li className="header-link-list group">
          <PlusIcon className="h-4" />
          <Link href="/" className="header-link">
            Watchlist
          </Link>
        </li>
        <li className="header-link-list group">
          <MagnifyingGlassIcon className="h-4" />
          <Link href="/" className="header-link">
            Search
          </Link>
        </li>
      </ul>
      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-300">
        Login
      </button>
    </header>
  );
};

export default Header;
