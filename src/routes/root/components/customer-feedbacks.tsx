import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeedbackCard from "./feedback-card";
import { ScrollArea } from "@/components/ui/scroll-area";

function CustomerFeedbacks() {
  return (
    <Card className="bg-[#1f2029] text-white p-4 rounded-md border-0 flex flex-col justify-start items-stretch gap-4">
      <CardHeader className="p-0 m-0">
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="font-sans font-semibold text-white text-lg">
            Customer's Feedback
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ScrollArea className="h-auto md:h-[36.5rem]">
          <FeedbackCard
            name="Jenny Wilson"
            feedback="The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
            noOfStars={4}
            profileImageUrl="/dashboard/customer-feedback/jenny.jpg"
          />
          <FeedbackCard
            name="Dianne Russell"
            feedback="We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
            noOfStars={5}
            profileImageUrl="/dashboard/customer-feedback/dianne.jpg"
          />
          <FeedbackCard
            name="Devon Lane"
            feedback="Normally wings are wings. but theirs are lean meaty and tender, and"
            noOfStars={4}
            profileImageUrl="/dashboard/customer-feedback/devon.jpg"
          />

          <FeedbackCard
            name="Jenny Wilson"
            feedback="The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
            noOfStars={4}
            profileImageUrl="/dashboard/customer-feedback/jenny.jpg"
          />
          <FeedbackCard
            name="Dianne Russell"
            feedback="We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
            noOfStars={5}
            profileImageUrl="/dashboard/customer-feedback/dianne.jpg"
          />
          <FeedbackCard
            name="Devon Lane"
            feedback="Normally wings are wings. but theirs are lean meaty and tender, and"
            noOfStars={4}
            profileImageUrl="/dashboard/customer-feedback/devon.jpg"
          />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default CustomerFeedbacks;
