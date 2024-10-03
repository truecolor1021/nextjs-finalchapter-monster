import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

type ComicChapterCardProps = {
  date: string;
  number: number;
  title: string;
};

export default function ComicChapterCard({
  date,
  number,
  title,
}: ComicChapterCardProps) {
  return (
    <div className="block p-4 bg-finalChapterDarkGray text-white">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-gray-200" />
        <div className="ml-4">
          <div className="text-sm">#{number}</div>
          <div className="text-xl font-bold">{title}</div>
          <div className="text-sm">{date}</div>
        </div>
      </div>
    </div>
  );
}
