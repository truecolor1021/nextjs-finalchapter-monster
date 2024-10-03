import BottomBar from "@/components/BottomBar";
import ComicDetailsTab from "@/components/comics/ComicDetailsTab";
import ComicProfileBanner from "@/components/comics/ComicProfileBanner";
import Navbar from "@/components/Navbar";

export default function ComicPage() {
  return (
    <div>
      <Navbar />
      <ComicProfileBanner
        views={123}
        imgSrc={"/Frame.png"}
        title={"Revenant"}
      />
      <div className="py-4">
        <ComicDetailsTab
          views={123}
          imgSrc={"https://wallpapercave.com/wp/wp5501287.png"}
          title={"Revenant"}
        />
      </div>
      <BottomBar />
    </div>
  );
}
