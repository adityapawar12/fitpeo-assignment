import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface Props {
  name: string;
  iconImageUrl: string;
}

function GoalCard({ name, iconImageUrl }: Props) {
  return (
    <Card className="bg-transparent px-4 rounded-md col-span-1 border-0 flex justify-between items-center">
      <CardContent className="p-0 m-0 w-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-normal items-center">
          <img
            src={iconImageUrl}
            alt={"Net Profit"}
            className="px-0 max-md:pr-4 max-lg:pr-2 lg:px-4 h-16 md:h-10 lg:h-20 w-auto"
          />
          <h2 className="font-sans font-normal text-white text-sm xs:text-base sm:text-xl md:text-base lg:text-xl">
            {name}
          </h2>
        </div>
        <div className="flex flex-row justify-normal items-center px-4">
          <ChevronRight className="p-2 md:p-1 lg:p-2 h-8 md:h-6 lg:h-9 bg-[#454749] rounded-full w-auto text-white" />
        </div>
      </CardContent>
    </Card>
  );
}

export default GoalCard;
