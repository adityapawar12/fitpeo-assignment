import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <CardContent className="p-0 m-0"></CardContent>
    </Card>
  );
}

export default CustomerFeedbacks;
