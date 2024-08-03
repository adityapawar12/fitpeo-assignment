import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Props {
  name: string;
  value: string;
  percentage: number;
  isProfitablePercentage: boolean;
  iconImageUrl: string;
}

function TopStatsCard({
  name,
  value,
  percentage,
  isProfitablePercentage,
  iconImageUrl,
}: Props) {
  return (
    <Card className="bg-neutral-800 p-4 rounded-md col-span-1 border-0">
      <CardHeader className="p-0 m-0">
        <img src={iconImageUrl} alt={name} className="pb-2 h-14 w-min" />
      </CardHeader>
      <CardContent className="p-0 m-0">
        <h3 className="font-sans font-semibold text-lg text-white">{name}</h3>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-end p-0 m-0 mt-5">
        <h2 className="font-sans font-bold text-3xl text-white">{value}</h2>

        {!isProfitablePercentage ? (
          <div className="font-sans font-normal text-sm flex flex-row justify-between items-center text-red-600">
            <ChevronDown /> {percentage}%
          </div>
        ) : (
          <div className="font-sans font-normal text-sm flex flex-row justify-between items-center text-green-600">
            <ChevronUp />
            {percentage}%
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default TopStatsCard;
