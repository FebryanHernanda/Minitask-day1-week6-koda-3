import { useReducer } from "react";
import { TodoListContext } from "./TodoListContext";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000) + 1,
          title: action.title,
          status: action.status,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              status: item.status ? false : true,
            }
          : item
      );

    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

const TodoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoListContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
