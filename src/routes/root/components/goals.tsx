import { Card } from "@/components/ui/card";
import GoalCard from "./goal-card";

function Goals() {
  return (
    <Card className="bg-[#1f2029] py-4 lg:py-6 rounded-md col-span-1 border-0 flex flex-col justify-start items-stretch gap-4">
      <GoalCard name="Goal" iconImageUrl="/goals.jpg" />

      <GoalCard name="Popular Dishes" iconImageUrl="/popular-dishes.jpg" />

      <GoalCard name="Menus" iconImageUrl="/menus.jpg" />
    </Card>
  );
}

export default Goals;
