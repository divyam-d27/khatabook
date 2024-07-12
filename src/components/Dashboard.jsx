import { useContext } from "react";
import { KhatabookContext } from "../providers/KhatabookContext";

const Dashboard = () => {
  const { transactions } = useContext(KhatabookContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "credit")
    .reduce((p, c) => p + c.amount, 0);
  const totalExpense = transactions
    .filter((transaction) => transaction.type === "debit")
    .reduce((p, c) => p + c.amount, 0);
  const balance = totalIncome - totalExpense;
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between h4 border-bottom border-success border-2 text-success mt-4 mb-0 pb-2 pb-sm-4">
        <span>Total Income:</span>
        <span className="h2 mb-0">{totalIncome}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between h4 border-bottom border-danger border-2 text-danger mt-4 mb-0 pb-2 pb-sm-4">
        <span>Total Expense:</span>
        <span className="h2 mb-0">{totalExpense}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between h4 border-bottom border-warning border-2 text-warning mt-4 mb-0 pb-2 pb-sm-4">
        <span>Balance:</span>
        <span className="h2 mb-0">{balance}</span>
      </div>
    </div>
  );
};

export default Dashboard;
