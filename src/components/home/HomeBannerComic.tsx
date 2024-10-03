type HomeBannerComicProps = {
  description: string;
  imgSrc: string;
  imgSrc2: string;
  title: string;
};

// TODO: Test on larger screens.
export default function HomeBannerComic({
  description,
  imgSrc,
  imgSrc2,
  title,
}: HomeBannerComicProps) {
  return (
    <div className="z-10 relative w-full max-h-[850px] sm:px-16 px-1 overflow-hidden">
      <img
        src={imgSrc}
        alt="Revenant"
        className="inset-0 hidden md:block object-cover sm:rounded-3xl rounded-2xl"
      />
      <img
        src={imgSrc2}
        alt="Revenant"
        className="inset-0 md:hidden object-cover sm:rounded-3xl rounded-2xl"
      />
      {/* <div className="back_image"></div> */}
      <div className="absolute inset-0 bg-black bg-opacity-10 flex items-end p-4">
        <div className="text-white sm:px-28 py-12 px-8">
          <h1 className="text-FBFDFF text-6xl font-medium">{title}</h1>
          <p className="mt-2 text-d1d1d1 text-sm font-normal max-w-545">
            {description}
          </p>
          <div className="flex mt-12 gap-5">
            <button className="hover:cursor-pointer py-3 px-6 text-111 font-semibold rounded-lg bg-fbfdff">
              Read Now
            </button>
            <div className="flex h-11 py-3 px-5 items-center border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.85112 6.18362H14V7.81638H7.85112V14H6.11414V7.81638H0V6.18362H6.11414V0H7.85112V6.18362Z"
                  fill="#FBFDFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 items-start py-8 sm:px-32 px-12 md:hidden lg:block">
        <div className="flex flex-wrap w-80 items-center content-center gap-2">
          <div className="flex bg-222 text-fbfdff p-3 w-max rounded-md">
            Fantasy
          </div>
          <div className="flex bg-222 text-fbfdff p-3 w-max rounded-md">
            By John Doe
          </div>
          <div className="flex bg-222 text-fbfdff p-3 w-max rounded-md">
            Update every Monday
          </div>
        </div>
      </div>
    </div>
  );
}
