import { useContext } from "react";
import { KhatabookContext } from "../providers/KhatabookContext";

const ListItem = ({ transaction }) => {
  const { dispatch } = useContext(KhatabookContext);

  // DELETE
  const deleteTransaction = (transactionID) => {
    dispatch({
      type: "delete_trans",
      payload: transactionID,
    });
  };

  // EDIT
  const editTransaction = (transToBeUpdated) => {
    dispatch({
      type: "edit_trans",
      payload: transToBeUpdated,
    });
  };

  return (
    <li
      className={`list-group-item d-flex flex-row justify-content-between align-items-center border-${
        transaction.type === "credit" ? "success" : "danger"
      } p-2 border-1 my-2 rounded-2 shadow-sm`}
    >
      <p
        className={`mb-0 d-flex align-items-center justify-content-center gap-3 text-${
          transaction.type === "credit" ? "success" : "danger"
        }`}
      >
        <span className="h6 mb-0">{transaction.text}:</span>
        <span className="h6 mb-0">{transaction.amount}</span>
      </p>
      <div className="">
        <button
          className="btn btn-outline-warning mx-2"
          // editTransaction ==>> sets the transaction that will be updated
          onClick={() => editTransaction(transaction)}
        >
          <span className="">Edit</span>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
