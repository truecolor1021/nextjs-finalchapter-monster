import Link from "next/link";

import FinalChapterLogo from "../components/graphics/finalchapterlogo";

export default function Navbar() {
  return (
    <nav className="bg-finalChapterBlack p-2">
      <div className="px-16 mx-auto flex justify-between items-center">
        <div className="">
          <Link href="/" prefetch={false}>
            <FinalChapterLogo />
          </Link>
        </div>
        <div className="items-center">
          <svg
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 1" cx="19.5" cy="20" r="19.5" fill="#E2E8F0" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
