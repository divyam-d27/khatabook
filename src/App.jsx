import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Dashboard from "./components/Dashboard";

// importing Context Provider
import KhatabookProvider from "./providers/KhatabookContext";
import Chart from "./components/Chart";

const App = () => {
  return (
    <>
      <KhatabookProvider>
        <Navbar />
        <h1 className="text-center my-4">Manage Your Account</h1>
        <div className="container card p-4 w-100 h-100 shadow-sm">
          <div className="d-flex flex-column flex-sm-row-reverse gap-4 mb-4">
            <div className="right__container d-flex flex-column justify-content-between">
              <Form />
              <Dashboard />
            </div>
            <ListGroup />
          </div>
          <Chart />
        </div>
      </KhatabookProvider>
    </>
  );
};

export default App;

// Sample data
/*
[
  {
    id: 1,
    text: "Salary",
    amount: 100000,
    type: "credit",
  },
  {
    id: 2,
    text: "Rent",
    amount: 5000,
    type: "debit",
  },
  {
    id: 3,
    text: "Groceries",
    amount: 4500,
    type: "debit",
  },
  {
    id: 4,
    text: "Electricity Bill",
    amount: 3000,
    type: "debit",
  },
  {
    id: 5,
    text: "Stock",
    amount: 10000,
    type: "credit",
  },
  {
    id: 6,
    text: "Fuel",
    amount: 8000,
    type: "debit",
  },
  {
    id: 7,
    text: "Commission",
    amount: 8000,
    type: "credit",
  },
]
*/
