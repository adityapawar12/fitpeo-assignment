import TopStatsCard from "./top-stats-card";

function Dashboard() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] p-4 text-white">
      <h1 className="font-sans font-bold text-lg text-white pb-4">Dashboard</h1>

      <div className="grid grid-cols-10 h-[calc(100%-2.75rem)] gap-6">
        <div className="col-span-10 lg:col-span-7 h-full">
          <div className="grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-4 gap-4">
            <TopStatsCard
              name="Total Orders"
              isProfitablePercentage={true}
              value={"75"}
              percentage={3}
              iconImageUrl="/total-orders-icon.jpg"
            />

            <TopStatsCard
              name="Total Delivered"
              isProfitablePercentage={false}
              value={"70"}
              percentage={3}
              iconImageUrl="/delivered-orders-icon.jpg"
            />
            <TopStatsCard
              name="Total Cancelled"
              isProfitablePercentage={true}
              value={"05"}
              percentage={3}
              iconImageUrl="/cancelled-orders-icon.jpg"
            />
            <TopStatsCard
              name="Total Revenue"
              isProfitablePercentage={false}
              value={"$12k"}
              percentage={3}
              iconImageUrl="total-revenue-icon.jpg"
            />
          </div>
        </div>
        <div className="col-span-10 lg:col-span-3 h-full">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
