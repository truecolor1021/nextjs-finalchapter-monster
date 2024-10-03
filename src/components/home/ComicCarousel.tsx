import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

type Comic = {
  imgSrc: string;
  title: string;
  link: string;
  label: string;
};

type ComicCarouselProps = {
  comics: Comic[];
  title: string;
  list: string[];
};

export default function ComicCarousel({
  comics,
  title,
  list,
}: ComicCarouselProps) {
  return (
    <div className="bg-finalChapterBlack text-white flex flex-col w-full md:px-16">
      <div className="flex items-center md:justify-start justify-around pb-3">
        <div className="z-10 md:w-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 55 55"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.959 16.8433C38.959 16.402 39.3167 16.0443 39.7581 16.0443H49.6183C50.0596 16.0443 50.4173 15.6865 50.4173 15.2452V5.38501C50.4173 4.94369 50.0596 4.58594 49.6183 4.58594H39.29C39.078 4.58594 38.8748 4.67012 38.7249 4.81998L27.5007 16.0443V5.38501C27.5007 4.94369 27.1429 4.58594 26.7016 4.58594H16.3733C16.1614 4.58594 15.9581 4.67012 15.8083 4.81998L4.81803 15.8102C4.66817 15.9601 4.58398 16.1633 4.58398 16.3753V26.7035C4.58398 27.1449 4.94174 27.5026 5.38305 27.5026H16.0423V38.1619C16.0423 38.6032 15.6846 38.9609 15.2432 38.9609H5.38305C4.94174 38.9609 4.58398 39.3187 4.58398 39.76V49.6202C4.58398 50.0615 4.94174 50.4193 5.38305 50.4193H15.7113C15.9233 50.4193 16.1265 50.3351 16.2764 50.1852L27.5007 38.9609V49.6202C27.5007 50.0615 27.8584 50.4193 28.2997 50.4193H38.628C38.8399 50.4193 39.0432 50.3351 39.193 50.1852L50.1833 39.195C50.3331 39.0451 50.4173 38.8419 50.4173 38.63V28.3017C50.4173 27.8604 50.0596 27.5026 49.6183 27.5026H38.959V16.8433ZM27.5007 27.5026V16.0443H16.8414C16.4001 16.0443 16.0423 16.402 16.0423 16.8433V27.5026H27.5007ZM27.5007 27.5026H38.959V38.1619C38.959 38.6032 38.6012 38.9609 38.1599 38.9609H27.5007V27.5026Z"
              fill="white"
            />
          </svg>
        </div>
        <h2 className="z-10 text-fbfbff md:text-6xl text-4xl leading-heavy pl-2">
          {title}
        </h2>
      </div>
      <div className="md:flex-row flex-col flex justify-center items-start xl:items-left xl:justify-start w-full">
        <div className="min-w-200">
          <div className="flex md:flex-col flex-row items-start gap-2">
            {list.map((value: string, index: number) => (
              <div
                key={index}
                className="hover:cursor-pointer flex px-2 py-1 text-sm text-fbfdff justify-center  gap-3 rounded-md bg-111111 w-max"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
        <Carousel>
          <CarouselContent>
            {comics.map((comic, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 sm:basis-1/2 basis-1/2 lg:basis-1/3"
              >
                <a className="p-1" href={comic.link}>
                  <Card className="aspect-square border-0 bg-opacity-80 rounded-lg">
                    <img
                      src={comic.imgSrc}
                      alt={comic.title}
                      className="w-full h-full"
                    />
                    <CardContent className="w-full  text-white flex flex-col justify-between">
                      <span className="lg:text-xl xl:text-2xl font-bold ">
                        {comic.title}
                      </span>
                      <span className="text-fbfdff">{comic.label}</span>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
