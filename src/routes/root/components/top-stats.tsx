import TopStatsCard from "./top-stats-card";

function TopStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <TopStatsCard
        name="Total Orders"
        isProfitablePercentage={true}
        value={"75"}
        percentage={3}
        iconImageUrl="/dashboard/top-stats/total-orders-icon.jpg"
      />

      <TopStatsCard
        name="Total Delivered"
        isProfitablePercentage={false}
        value={"70"}
        percentage={3}
        iconImageUrl="/dashboard/top-stats/delivered-orders-icon.jpg"
      />
      <TopStatsCard
        name="Total Cancelled"
        isProfitablePercentage={true}
        value={"05"}
        percentage={3}
        iconImageUrl="/dashboard/top-stats/cancelled-orders-icon.jpg"
      />
      <TopStatsCard
        name="Total Revenue"
        isProfitablePercentage={false}
        value={"$12k"}
        percentage={3}
        iconImageUrl="/dashboard/top-stats/total-revenue-icon.jpg"
      />
    </div>
  );
}

export default TopStats;
