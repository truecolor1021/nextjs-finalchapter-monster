import Link from "next/link";

export default function BottomBar() {
  return (
    <div
      className="bg-finalChapterBlack text-white py-8"
      style={{ borderTop: "1px solid white" }}
    >
      <div className="flex justify-center space-x-6 mb-4 sm:space-x-8">
        <TwitterIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        <YoutubeIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          Discord
        </Link>
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          Help
        </Link>
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          Privacy
        </Link>
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          Advertise
        </Link>
        <Link
          href="#"
          className="text-finalChapterGray text-sm sm:text-base"
          prefetch={false}
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <LogInIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </div>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LogInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
