import { useContext } from "react";
import { TodoListContext } from "../../context/TodoList/TodoListContext";
import { SkipBackIcon } from "lucide-react";

const ShowTodoList = () => {
  const { state, dispatch } = useContext(TodoListContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  const handleStatus = (id) => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };

  return (
    <section className="p-5 bg-white rounded-xl w-full flex flex-col gap-5 text-black ">
      <h1 className="text-5xl font-bold">All To-do List</h1>
      {state.map((data) => (
        <div
          key={data.id}
          className="flex p-5 flex-col border-1 text-left rounded-md "
        >
          <h1>{`Todo : ${data.title}`}</h1>
          <h1>{`Status : ${data.status ? "Completed" : "Uncompleted"}`}</h1>
          <div className="flex justify-between gap-10">
            <button
              className="mt-5 bg-red-600 p-0.5 w-full text-white rounded-md flex gap-5 justify-center items-center cursor-pointer"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>

            <button
              className="mt-5 bg-blue-600 p-0.5 w-full text-white rounded-md flex gap-5 justify-center items-center cursor-pointer"
              onClick={() => handleStatus(data.id)}
            >
              {data.status ? "Uncompleted" : "Completed"}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ShowTodoList;
