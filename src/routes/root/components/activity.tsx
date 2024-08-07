import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

function Activity() {
  const chartData = [
    { month: "5", desktop: 4, desktopOne: 9, desktopTwo: 12 },
    { month: "11", desktop: 4, desktopOne: 3, desktopTwo: 16 },
    { month: "13", desktop: 6, desktopOne: 6, desktopTwo: 4 },
    { month: "15", desktop: 5, desktopOne: 6, desktopTwo: 13 },
    { month: "17", desktop: 4, desktopOne: 2, desktopTwo: 12 },
    { month: "19", desktop: 7, desktopOne: 8, desktopTwo: 6 },
    { month: "21", desktop: 6, desktopOne: 11, desktopTwo: 7 },
    { month: "23", desktop: 9, desktopOne: 12, desktopTwo: 9 },
    { month: "25", desktop: 16, desktopOne: 11, desktopTwo: 5 },
    { month: "27", desktop: 8, desktopOne: 4, desktopTwo: 6 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#7295ff",
    },
    desktopOne: {
      label: "desktopOne",
      color: "#7295ff",
    },
    desktopTwo: {
      label: "desktopTwo",
      color: "#7295ff",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-[#1f2029] p-4 rounded-md border-0 flex flex-col justify-start items-stretch gap-4">
      <CardHeader className="p-0 m-0">
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="font-sans font-semibold text-white text-lg">
            Activity
          </CardTitle>

          <Select>
            <SelectTrigger className="w-[140px] px-4 bg-[#4d4f51] text-white border-0 rounded-full">
              <SelectValue placeholder="Weekly" />
            </SelectTrigger>
            <SelectContent className=" bg-[#4d4f51] text-white border-0">
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ChartContainer
          config={chartConfig}
          className="h-56 mb-2 w-[calc(100vw-4rem)] md:w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <CartesianGrid vertical={false} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={80} />
            <Bar
              dataKey="desktopOne"
              fill="var(--color-desktopOne)"
              radius={80}
            />
            <Bar
              dataKey="desktopTwo"
              fill="var(--color-desktopTwo)"
              radius={80}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Activity;
