import TopStats from "./top-stats";
import NetProfit from "./net-profit";
import Goals from "./goals";
import { ScrollArea } from "@/components/ui/scroll-area";
import Activity from "./activity";

function Dashboard() {
  return (
    <ScrollArea className="w-full h-[calc(100vh-4rem)] p-4 text-white">
      <h1 className="font-sans font-bold text-lg text-white pb-4">Dashboard</h1>

      <div className="md:grid md:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 gap-0 md:gap-6">
        <div className="md:col-span-6 xl:col-span-8 2xl:col-span-7 h-auto md:h-full">
          <TopStats />

          <div className="hidden md:block xl:hidden pt-4">
            <Activity />
          </div>
        </div>
        <div className="md:col-span-4 xl:col-span-4 2xl:col-span-3 h-auto md:h-full max-md:pt-4">
          <NetProfit />

          <div className="hidden md:block xl:hidden pt-4">
            <Goals />
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-10 mt-4 md:mt-6 gap-0 md:gap-6">
        <div className="md:col-span-6 xl:col-span-8 2xl:col-span-7 h-auto md:h-full">
          <div className="block md:hidden xl:block ">
            <Activity />
          </div>
        </div>

        <div className="md:col-span-4 xl:col-span-4 2xl:col-span-3 h-auto md:h-full max-md:pt-4">
          <div className="block md:hidden xl:block">
            <Goals />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default Dashboard;
