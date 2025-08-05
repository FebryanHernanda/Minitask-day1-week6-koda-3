import { useContext } from "react";
import { TodoListContext } from "../../context/TodoList/TodoListContext";

const FormTodo = () => {
  const { state, dispatch } = useContext(TodoListContext);

  const addTodo = (e) => {
    e.preventDefault();
    const title = e.target.titleName.value;

    if (!title) {
      return console.log("Input tidak boleh kosong");
    }

    dispatch({ type: "ADD_TODO", title: title, status: false });
  };

  console.log(state);

  return (
    <section className="p-5 bg-white rounded-xl w-full flex flex-col gap-5 text-black ">
      <h1 className="text-5xl font-bold">To-Do List Form</h1>
      <form className="flex flex-col gap-5" onSubmit={addTodo}>
        <div className="flex items-center gap-5">
          <label htmlFor="titleName" className="text-sm w-30 ">
            Todo :
          </label>
          <input
            type="text"
            name="titleName"
            className="border-1 border-gray-500 font-regular w-full px-1 rounded-md font-regular"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-blue-700 text-white cursor-pointer"
        >
          Add Todo List
        </button>
      </form>
    </section>
  );
};

export default FormTodo;
