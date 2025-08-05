import { useContext } from "react";
import { AuthLoginContext } from "../../context/AuthLogin/AuthLoginContext";
import { Link } from "react-router";
import { ArrowBigLeft } from "lucide-react";

const AuthLogin = () => {
  const { userData, setIsLogin } = useContext(AuthLoginContext);

  const { username, isLoggedIn } = userData;

  const handleButton = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <section className="flex flex-col mt-10 items-center gap-10">
      <h1 className="text-7xl font-bold">Auth Login Task</h1>
      <div className="flex flex-col gap-5 items-center mt-10">
        {isLoggedIn ? (
          <>
            <img
              src="https://static.republika.co.id/uploads/images/inpicture_slide/youtuber-fathia-izzati-_190508140556-986.jpg"
              alt="Avatar Profile"
              className="rounded-full w-50 h-50 object-cover object-[30%_10%]"
            />
            <div>
              <h1 className="text-3xl font-bold">Hello, {username}</h1>
            </div>
          </>
        ) : (
          <>
            <img
              src="https://media.istockphoto.com/id/588348500/vector/male-avatar-profile-picture-vector.jpg?s=612x612&w=0&k=20&c=tPPah8S9tmcyOXCft1Ct0tCAdpfSaUNhGzJK7kQiQCg="
              alt="Avatar Profile"
              className="rounded-full w-50 h-50 object-cover object-[30%_10%]"
            />
            <div>
              <h1 className="text-3xl font-bold">
                No user is logged in, Please log in to continue
              </h1>
            </div>
          </>
        )}
      </div>

      <button
        className={`text-2xl p-2  w-50 rounded-lg font-semibold cursor-pointer  ${
          !isLoggedIn
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-red-500 hover:bg-red-700"
        }`}
        onClick={handleButton}
      >
        {!isLoggedIn ? "Login" : "Log Out"}
      </button>

      <Link className="mx-auto flex flex-col gap-5 mt-10 items-center" to="/">
        <ArrowBigLeft size={100} />
        Back to Home
      </Link>
    </section>
  );
};
export default AuthLogin;
