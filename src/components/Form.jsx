import { useState, useEffect, useContext } from "react";
import { KhatabookContext } from "../providers/KhatabookContext";

const Form = () => {
  const { update, dispatch } = useContext(KhatabookContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setText(update.toUpdate.text);
    setAmount(update.toUpdate.amount);
    if (update.toUpdate.type === "credit") setType("credit");
    if (update.toUpdate.type === "debit") setType("debit");
  }, [update]);

  // CREATE
  const createTransaction = (text, amount, type) => {
    dispatch({
      type: "create_trans",
      payload: {
        id: crypto.randomUUID(),
        text,
        amount,
        type,
      },
    });
  };

  // UPDATE
  const updateTransaction = (transObj) => {
    dispatch({
      type: "update_trans",
      payload: transObj,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    update.isEdit
      ? updateTransaction({
          id: update.toUpdate.id,
          text,
          amount,
          type,
        })
      : createTransaction(text, amount, type);
    setText("");
    setAmount("");
    setType("");
  };

  return (
    <div className="card p-2 shadow-sm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Transaction"
          className="form-control my-2"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2"
          required
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="form-check">
          <label className="form-check-label" htmlFor="credit">
            <input
              type="radio"
              className="form-check-input"
              id="credit"
              value="credit"
              name="radioGroup"
              required
              checked={type === "credit"}
              onChange={(e) => setType(e.target.value)}
            />
            Credit
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="debit">
            <input
              type="radio"
              className="form-check-input"
              id="debit"
              value="debit"
              name="radioGroup"
              required
              checked={type === "debit"}
              onChange={(e) => setType(e.target.value)}
            />
            Debit
          </label>
        </div>
        <button className={"btn btn-success w-100 my-2"}>
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
