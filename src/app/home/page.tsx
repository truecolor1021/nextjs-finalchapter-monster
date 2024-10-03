"use client";
import React from "react";
import HomeBannerComic from "../../components/home/HomeBannerComic";
import ComicCarousel from "../../components/home/ComicCarousel";
import Header from "@/components/bars/Header";
import Footer from "@/components/bars/Footer";

export default function HomePage() {
  const comics = [
    {
      imgSrc: "/revenant.png",
      title: "The Revenant",
      label: "By John Doe",
      link: "/comics/1",
    },
    {
      imgSrc: "/my_boyfriend_is_a_psycho.png",
      title: "My Boyfriend is a Psycho",
      label: "By John Doe",
      link: "/comics/2",
    },
    {
      imgSrc: "/lord_of_the_goblins.png",
      title: "Lord of the Goblins",
      label: "By John Doe",
      link: "/comics/3",
    },
    {
      imgSrc: "https://avatarfiles.alphacoders.com/314/314519.jpg",
      title: "Another Comic",
      label: "By John Doe",
      link: "/comics/4",
    },
    // Add more comics as needed
  ];

  const comicsUpNext = [
    {
      imgSrc: "/a_black_market_rpg.png",
      title: "A Black Market RPG",
      label: "By John Doe",
      link: "/comics/4",
    },
    {
      imgSrc: "/forged_in_nightmare.png",
      title: "Forged in Nightmare",
      label: "By John Doe",
      link: "/comics/5",
    },
    {
      imgSrc: "/revenant.png",
      title: "The Revenant",
      label: "By John Doe",
      link: "/comics/6",
    },
    {
      imgSrc: "https://avatarfiles.alphacoders.com/314/314519.jpg",
      title: "Another Comic",
      label: "By John Doe",
      link: "/comics/7",
    },
    // Add more comics as needed
  ];

  // Replace when backend populated
  const mainComicDescription =
    "Becoming a superhero is a responsibility for the I.D.O.L. Despite that, they remain human, susceptible to emotions and biases. Are they ready to face threats to their existence?";
  const buttonlist = [
    "All",
    "Action",
    "Fantasy",
    "Romance",
    "Horror",
    "Comedy",
    "Sci-Fi",
  ];
  return (
    <div>
      <Header />
      <div style={{ fontFamily: "Neue Regrade" }}>
        <main className="flex bg-finalChapterBlack flex-col min-h-screen">
          <div>
            <HomeBannerComic
              description={mainComicDescription}
              imgSrc={"/Frame-init(1).png"}
              imgSrc2={"/Frame-init.png"}
              title={"Revenant"}
            />

            <div className="py-8 relative">
              <div
                className="absolute right-8"
                style={{ top: "-125px", opacity: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="328"
                  height="328"
                  viewBox="0 0 656 656"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M511.092 19.0919C500.548 8.54773 483.452 8.54771 472.908 19.0919L328 164V27C328 12.0883 315.912 0 301 0H175.184C168.023 0 161.155 2.84463 156.092 7.90812L19.0919 144.908C8.54771 155.452 8.54773 172.548 19.0919 183.092L164 328H27C12.0883 328 0 340.088 0 355V480.816C0 487.977 2.84463 494.845 7.90812 499.908L144.908 636.908C155.452 647.452 172.548 647.452 183.092 636.908L328 492V629C328 643.912 340.088 656 355 656H480.816C487.977 656 494.845 653.155 499.908 648.092L636.908 511.092C647.452 500.548 647.452 483.452 636.908 472.908L492 328H629C643.912 328 656 315.912 656 301V175.184C656 168.023 653.155 161.155 648.092 156.092L511.092 19.0919ZM492 328L328 492L164 328L328 164L492 328Z"
                    fill="#1C1D20"
                  />
                </svg>
              </div>
              <ComicCarousel
                list={buttonlist}
                title="New Releases"
                comics={comics}
              />
            </div>
            <div className="mt-8 relative">
              <div className="absolute" style={{ top: "-100px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="500"
                  height="500"
                  viewBox="0 0 747 1029"
                  fill="none"
                >
                  <g opacity="0.3">
                    <path
                      d="M44.2719 188.343L367.028 2.00005C369.325 0.673967 372.055 0.314609 374.616 1.00104L618.335 66.3053C623.67 67.7347 626.836 73.2181 625.406 78.5527L559.03 326.272L44.2719 188.343Z"
                      fill="#1C1D20"
                    />
                    <path
                      d="M-93.6571 703.101L44.2719 188.343L-203.448 121.967C-208.782 120.538 -214.266 123.704 -215.695 129.038L-280.999 372.757C-281.686 375.319 -281.327 378.048 -280 380.345L-93.6571 703.101Z"
                      fill="#1C1D20"
                    />
                    <path
                      d="M421.101 841.03L559.03 326.272L745.373 649.029C746.699 651.325 747.059 654.055 746.372 656.617L681.068 900.336C679.639 905.67 674.155 908.836 668.821 907.407L421.101 841.03Z"
                      fill="#1C1D20"
                    />
                    <path
                      d="M421.101 841.03L-93.6571 703.101L-160.033 950.821C-161.463 956.156 -158.297 961.639 -152.962 963.069L90.7564 1028.37C93.3182 1029.06 96.0478 1028.7 98.3446 1027.37L421.101 841.03Z"
                      fill="#1C1D20"
                    />
                  </g>
                </svg>
              </div>
              <ComicCarousel
                list={[]}
                title="Coming Soon"
                comics={comicsUpNext}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
