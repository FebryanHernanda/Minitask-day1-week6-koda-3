import { ArrowBigLeft } from "lucide-react";
import FormTodo from "./formTodo";
import ShowTodoList from "./ShowTodoList";
import { Link } from "react-router";

const TodoApp = () => {
  return (
    <>
      <div className="w-full text-center flex flex-col gap-10 font-bold mt-10">
        <h1 className="text-7xl">To-Do List App</h1>
        <div className="flex justify-between w-full gap-10 mt-10">
          <FormTodo />
          <ShowTodoList />
        </div>
        <Link className="mx-auto flex flex-col gap-5 mt-10 items-center" to="/">
          <ArrowBigLeft size={100} />
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default TodoApp;
