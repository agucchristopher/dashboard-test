import { Card, Title, AreaChart } from "@tremor/react";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const chartdata = [
  { date: "Jan 22", Profit: 2090, Loss: 2338 },
  { date: "Feb 22", Profit: 2256, Loss: 2103 },
  {
    date: ` ${months[new Date().getMonth()]} ${Math.floor(
      new Date().getDate() - 4
    )}`,
    Profit: ` ${Math.floor(Math.random() * 10000)}`,
    Loss: 2194,
  },
  {
    date: ` ${months[new Date().getMonth()]} ${Math.floor(
      new Date().getDate() - 3
    )}`,
    Profit: ` ${Math.floor(Math.random() * 10000)}`,
    Loss: 2108,
  },
  {
    date: ` ${months[new Date().getMonth()]} ${Math.floor(
      new Date().getDate() - 2
    )}`,
    Profit: ` ${Math.floor(Math.random() * 10000)}`,
    Loss: 1812,
  },
  {
    date: ` ${months[new Date().getMonth()]} ${Math.floor(
      new Date().getDate() - 1
    )}`,
    Profit: ` ${Math.floor(Math.random() * 10000)}`,
    Loss: 1726,
  },
  {
    date: ` ${months[new Date().getMonth()]} ${new Date().getDate()}`,
    Profit: ` ${Math.floor(Math.random() * 10000)}`,
    Loss: 1700,
  },
];
const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const Area = () => (
  <Card>
    {" "}
    <Title>Newsletter revenue over time (USD)</Title>{" "}
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Profit", "Loss"]}
      colors={["emerald", "red"]}
      valueFormatter={dataFormatter}
      tw="bg-[#fff]"
    />{" "}
  </Card>
);
export default Area;
