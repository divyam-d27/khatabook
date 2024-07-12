import { useContext } from "react";
import { KhatabookContext } from "../providers/KhatabookContext";
import ListItem from "./ListItem";

const ListGroup = () => {
  const { transactions } = useContext(KhatabookContext);
  if (transactions.length !== 0) {
    const data = [...transactions].reverse();
    return (
      <div className="all__transactions card border-0">
        <h3 className="my-2">All Transactions:</h3>
        <ul className="list-group border-top-0 pe-2 overflow-auto">
          {data.map((transaction) => (
            <ListItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <h2 className="all__transactions text-center">No Transactions Yet!</h2>
    );
  }
};

export default ListGroup;
