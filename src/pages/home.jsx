import { Link } from "react-router";

const Home = () => {
  return (
    <nav className="flex flex-col gap-10 text-center   min-h-screen justify-center">
      <h1 className="text-7xl text-white">Minitask Day 1 - Week 6</h1>
      <div className="flex justify-between gap-5 mt-10">
        <Link
          className="p-10 w-full bg-slate-700 text-white rounded-md text-4xl font-bold hover:bg-slate-600"
          to="/shopping-app"
        >
          Shopping App
        </Link>
        <Link
          className="p-10 w-full bg-slate-700 text-white rounded-md text-4xl font-bold hover:bg-slate-600"
          to="/auth/login"
        >
          Auth Login
        </Link>
        <Link
          className="p-10 w-full bg-slate-700 text-white rounded-md text-4xl font-bold hover:bg-slate-600"
          to="/todo-app"
        >
          To-Do List
        </Link>
      </div>
    </nav>
  );
};

export default Home;
