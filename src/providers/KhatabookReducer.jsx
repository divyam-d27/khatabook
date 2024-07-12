export default function khatabookReducer(state, action) {
  switch (action.type) {
    case "delete_trans": {
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    }
    case "create_trans": {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }
    case "edit_trans": {
      return {
        ...state,
        update: {
          toUpdate: action.payload,
          isEdit: true,
        },
      };
    }
    case "update_trans": {
      return {
        ...state,
        transactions: state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        ),

        update: {
          toUpdate: { id: "", text: "", amount: "", type: "" },
          isEdit: false,
        },
      };
    }
  }
}
