"use client";
import { useState } from "react";

import Link from "next/link";

import FinalChapterLogo from "../../components/graphics/finalchapterlogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const Menulists = (
    <div className="ml-14 p-3 flex items-center gap-9.5 text-sm text-fbfdff leading-myInlineheight">
      <p className="hover:cursor-pointer">Comics</p>
      <p className="hover:cursor-pointer">Genres</p>
      <p className="hover:cursor-pointer">Authors</p>
      <p className="hover:cursor-pointer">Community</p>
    </div>
  );
  return (
    <footer>
      <nav className="bg-finalChapterBlack md:px-16 px-4 flex justify-between h-20">
        <div className="flex justify-start items-center">
          <Link href="/" prefetch={false}>
            <FinalChapterLogo />
          </Link>
          <div className="xl:block hidden">{Menulists}</div>
        </div>
        <div className="xl:flex hidden justify-end items-center">
          <div>
            <form className="w-360 max-h-46 mx-auto">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 ps-10 text-sm text-white rounded-lg bg-search focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-00 dark:focus:border-zinc-500"
                  placeholder="Search"
                  required
                />
                <div className="text-white absolute end-2.5 bottom-1 focus:ring-4 focus:outline-none text-NavFontsize rounded-lg text-sm px-4 py-2">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div className="flex ml-12 justify-center">
            <div className="text-xl px-6 py-1 rounded-md border border-gray-100 ">
              Read
            </div>
            <div className="ml-4 text-xl px-6 py-1 rounded-md border border-gray-600 text-fbfdff">
              Publish
            </div>
          </div>
        </div>
        <div className="xl:hidden flex items-center gap-2">
          <span className="bg-search p-3 rounded-md cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </span>
          <span className="bg-search p-3 rounded-md cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.25 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H11.25"
                stroke="#A3A4A5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 12.75L11.25 9L7.5 5.25"
                stroke="#A3A4A5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 9H2.25"
                stroke="#A3A4A5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="ml-4 text-xl px-6 py-1 rounded-md border border-gray-600 text-fbfdff">
            Publish
          </div>
        </div>
      </nav>
      <div className="flex justify-center xl:hidden">{Menulists}</div>
    </footer>
  );
}
