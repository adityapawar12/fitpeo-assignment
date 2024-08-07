import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function RecentOrders() {
  const orders = [
    {
      customer: "Wade Warren",
      customerImage: "/dashboard/recent-orders/wade.jpg",
      orderNo: "125612",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      customerImage: "/dashboard/recent-orders/jane.jpg",
      orderNo: "163452",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      customerImage: "/dashboard/recent-orders/guy.jpg",
      orderNo: "533121",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      customerImage: "/dashboard/recent-orders/kristin.jpg",
      orderNo: "345663",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      customerImage: "/dashboard/recent-orders/cody.jpg",
      orderNo: "422346",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      customerImage: "/dashboard/recent-orders/savannah.jpg",
      orderNo: "623342",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <Card className="bg-[#1f2029] w-[calc(100vw-2rem)] md:w-full text-white p-4 rounded-md border-0 flex flex-col justify-start items-stretch gap-4">
      <CardHeader className="p-0 m-0">
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="font-sans font-semibold text-white text-lg">
            Recent Orders
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <Table className="">
          <TableHeader>
            <TableRow className="border-gray-500">
              <TableHead className="font-sans font-semibold text-white text-base min-w-60">
                Customer
              </TableHead>
              <TableHead className="font-sans font-semibold text-white text-base min-w-40">
                Order No.
              </TableHead>
              <TableHead className="font-sans font-semibold text-white text-base min-w-40">
                Amount
              </TableHead>
              <TableHead className="font-sans font-semibold text-white text-base min-w-40">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                className="border-gray-500 hover:bg-[#1f2029]"
                key={order.orderNo}
              >
                <TableCell className="font-sans font-medium text-white text-base flex flex-row justify-normal items-center gap-2">
                  <img
                    src={order.customerImage}
                    alt={order.customer}
                    className="pb-2 h-14 w-min"
                  />
                  {order.customer}
                </TableCell>
                <TableCell className="font-sans font-medium text-white text-base">
                  {order.orderNo}
                </TableCell>
                <TableCell className="font-sans font-medium text-white text-base">
                  {order.amount}
                </TableCell>
                <TableCell className="font-sans font-medium text-white text-base">
                  {order.status === "Delivered" ? (
                    <Badge className="text-green-400 bg-green-700">
                      {order.status}
                    </Badge>
                  ) : (
                    <Badge className="text-red-400 bg-red-700">
                      {order.status}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentOrders;
