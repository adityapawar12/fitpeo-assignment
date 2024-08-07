import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Props {
  name: string;
  profileImageUrl: string;
  noOfStars: number;
  feedback: string;
}

function FeedbackCard({ name, profileImageUrl, noOfStars, feedback }: Props) {
  return (
    <Card className="bg-transparent border-0 p-0 m-0 text-white pb-4 border-b border-b-gray-600 rounded-none pt-4">
      <CardHeader className="p-0 m-0">
        <CardTitle className="font-sans font-medium text-base flex flex-row justify-start items-center gap-2 pb-2">
          <img src={profileImageUrl} alt={name} className="h-14 w-min" />
          {name}
        </CardTitle>
        <div className="flex flex-row justify-start items-center gap-1 pb-2">
          {Array.from({ length: noOfStars }, (_, index) => (
            <Star className="text-yellow-400" key={index} />
          ))}

          {Array.from({ length: 5 - noOfStars }, (_, index) => (
            <Star key={index} />
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <p className="font-sans font-normal text-base text-gray-400">
          {feedback}
        </p>
      </CardContent>
    </Card>
  );
}

export default FeedbackCard;
