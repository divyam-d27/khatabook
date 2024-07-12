import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { KhatabookContext } from "../providers/KhatabookContext";

const Chart = () => {
  const { transactions } = useContext(KhatabookContext);

  let balance = 0;
  const balanceData = [];
  transactions.forEach((transaction) => {
    if (transaction.type === "credit") {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
    balanceData.push({
      balance: balance,
      text: transaction.text,
    });
  });
  return (
    <div className="d-none d-sm-block">
      <LineChart width={1000} height={300} data={balanceData}>
        <Line type="monotone" dataKey="balance" stroke="#8884d8" />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="text" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Chart;
