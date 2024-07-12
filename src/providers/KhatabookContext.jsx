import { createContext, useReducer } from "react";
import khatabookReducer from "./KhatabookReducer";

export const KhatabookContext = createContext();

export default function KhatabookProvider({ children }) {
  const initialState = {
    transactions: [
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
    ],
    update: {
      toUpdate: { id: "", text: "", amount: "", type: "" },
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(khatabookReducer, initialState);

  return (
    <KhatabookContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </KhatabookContext.Provider>
  );
}
