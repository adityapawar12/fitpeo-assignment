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
      customerImage: "",
      orderNo: "125612",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      customerImage: "",
      orderNo: "163452",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      customerImage: "",
      orderNo: "533121",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      customerImage: "",
      orderNo: "345663",
      amount: "$65.00",
      status: "Pending",
    },
  ];

  return (
    <Card className="bg-[#1f2029] text-white p-4 rounded-md border-0 flex flex-col justify-start items-stretch gap-4">
      <CardHeader className="p-0 m-0">
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="font-sans font-semibold text-white text-lg">
            Recent Orders
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-500">
              <TableHead className="text-white">Customer</TableHead>
              <TableHead className="text-white">Order No.</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow className="border-gray-500" key={order.orderNo}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default RecentOrders;
