import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronUp } from "lucide-react";

function NetProfit() {
  return (
    <Card className="bg-[#1f2029] p-4 rounded-md col-span-1 border-0 flex justify-between items-center">
      <Card className="bg-[#1f2029] border-0 w-2/4">
        <CardHeader className="p-0 m-0">
          <CardTitle className="font-sans font-semibold text-white text-base">
            Net Profit
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 m-0">
          <h2 className="font-sans font-extrabold text-white text-2xl lg:text-3xl xl:text-4xl py-4">
            $ 6759.25
          </h2>
        </CardContent>
        <CardFooter className="p-0 pt-3 2xl:pt-5 m-0">
          <div className="font-sans font-normal text-sm flex flex-row justify-between items-center text-green-600">
            <ChevronUp />
            {3}%
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-[#1f2029] border-0 w-2/4">
        <CardContent className="p-0 m-0 flex flex-col justify-center items-center">
          <img
            src={"/net-profit-chart.jpg"}
            alt={"Net Profit"}
            className="pb-2 h-24 md:h-20 lg:h-28 w-auto"
          />
          <small className="text-[10px] font-sans font-light text-white text-center px-4">
            *The values here have been rounded off.
          </small>
        </CardContent>
      </Card>
    </Card>
  );
}

export default NetProfit;
