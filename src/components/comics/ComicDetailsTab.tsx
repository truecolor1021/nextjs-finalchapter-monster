"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import ComicChapterCard from "./ComicChapterCard";
import ComicOverlay from "./ComicOverlay";

type ComicDetailsTabProps = {
  imgSrc: string;
  title: string;
  views: number;
};

// TODO: Implement bottom tab highlighting with inline active div.
// Maybe see https://www.radix-ui.com/primitives/docs/components/tabs#api-reference
export default function ComicDetailsTab({
  imgSrc,
  title,
  views,
}: ComicDetailsTabProps) {
  const [isViewComicOpen, setIsViewComicOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [episodeTitle, setEpisodeTitle] = useState<string | null>(null);

  const handleEpisodeClick = (pdfUrl: string, title: string) => {
    setSelectedPdf(pdfUrl);
    setEpisodeTitle(title);
    setIsViewComicOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsViewComicOpen(false);
    setSelectedPdf(null);
    setEpisodeTitle(null);
  };

  return (
    <div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex md:justify-start pb-0 px-16 rounded-none bg-finalChapterBlack text-finalChapterGray">
          <TabsTrigger
            className="md:mr-20 text-lg relative rounded-none border-b-4 border-b-transparent pb-4 font-semibold shadow-none data-[state=active]:text-finalChapterGray data-[state=active]:border-b-white data-[state=active]:bg-transparent"
            value="overview"
          >
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger
            className="md:mr-20 text-lg relative rounded-none border-b-4 border-b-transparent pb-4 font-semibold shadow-none data-[state=active]:text-finalChapterGray data-[state=active]:border-b-white data-[state=active]:bg-transparent"
            value="episodes"
          >
            EPISODES
          </TabsTrigger>
          <TabsTrigger
            className="md:mr-20 text-lg relative rounded-none border-b-4 border-b-transparent pb-4 font-semibold shadow-none data-[state=active]:text-finalChapterGray data-[state=active]:border-b-white data-[state=active]:bg-transparent"
            value="storyprofile"
          >
            STORY PROFILE
          </TabsTrigger>
        </TabsList>
        <div className="border-b mt-2"></div>
        <TabsContent value="overview">
          <div className="bg-finalChapterBlack text-white space-y-4">
            <div className="px-16 py-6 bg-finalChapterDarkGray">
              <h2 className="text-lg font-bold">ABOUT</h2>
              <p className="mt-2">
                When the cocky, social-media star Braydin, and the nerdy, gamer
                Alex first meet at the gym, their relationship starts off on the
                wrong foot. But, as they&apos;re forced to work together they
                find out they might have more in common than they initially
                thought. Also they get buff AF.
              </p>
            </div>
            <div className="py-6">
              <h2 className="text-lg px-16 pb-2 font-bold">THE CREATORS</h2>
              <Accordion
                type="multiple"
                className="mt-4 rounded-lg px-16 space-y-6"
              >
                <AccordionItem
                  className="bg-finalChapterDarkGray border-b-0 rounded-lg"
                  value="creator-1"
                >
                  <AccordionTrigger className="bg-finalChapterDarkGray hover:no-underline p-4 rounded-lg">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="font-semibold">Mary Kim</h3>
                        <p className="text-sm text-finalChapterLightGray font-light">
                          Colorist
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=" bg-finalChapterDarkGray rounded-lg">
                    <p className="pb-2 pl-4 pr-4">
                      Hi, I&apos;m Lummy, the creator of Swolemates. I prefer
                      smart, interesting stories with deep lore and cool plot
                      twists. But for some reason I mostly write about two
                      idiots doing bicep curls. Hi, I&apos;m Lummy, the creator
                      of Swolemates. I prefer smart, interesting stories with
                      deep lore and cool plot twists. But for some reason I
                      mostly write about two idiots doing bicep curls.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="bg-finalChapterDarkGray border-b-0 rounded-lg"
                  value="creator-2"
                >
                  <AccordionTrigger className="bg-finalChapterDarkGray hover:no-underline p-4 rounded-lg">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="font-semibold">Mary Kim</h3>
                        <p className="text-sm text-finalChapterLightGray font-light">
                          Colorist
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-finalChapterDarkGray rounded-lg">
                    <p className="pb-2 pl-4 pr-4">
                      Hi, I&apos;m Lummy, the creator of Swolemates. I prefer
                      smart, interesting stories with deep lore and cool plot
                      twists. But for some reason I mostly write about two
                      idiots doing bicep curls. Hi, I&apos;m Lummy, the creator
                      of Swolemates. I prefer smart, interesting stories with
                      deep lore and cool plot twists. But for some reason I
                      mostly write about two idiots doing bicep curls.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="episodes">
          {[
            {
              date: "July 6th, 2024", // TODO: replace with API calls
              number: 123,
              src: "/test_comics/test_comic.pdf",
              title: "Pilot Chapter",
            },
            {
              date: "July 7th, 2024",
              number: 124,
              src: "episode2.pdf",
              title: "Chapter 2",
            },
            {
              date: "July 8th, 2024",
              number: 125,
              src: "episode3.pdf",
              title: "Chapter 3",
            },
          ].map((episode, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                handleEpisodeClick(`${episode.src}`, `${episode.title}`)
              }
            >
              <ComicChapterCard
                date={episode.date}
                number={episode.number}
                title={episode.title}
              />
            </div>
          ))}
        </TabsContent>
        <TabsContent value="storyprofile">
          <div className="py-36"></div>
        </TabsContent>
      </Tabs>
      <ComicOverlay
        isOpen={isViewComicOpen}
        pdfUrl={selectedPdf}
        title={episodeTitle}
        onClose={handleCloseOverlay}
      />
    </div>
  );
}
