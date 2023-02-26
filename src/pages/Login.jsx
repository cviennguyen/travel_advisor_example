import { useState } from "react";
import axios from "../apis/axios";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const LOGIN_URL = "/user/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(LOGIN_URL, { email, password });
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Login Successful");
        history.push("/");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-secondary i justify-around items-center hidden">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">
            Travel Advisor
          </h1>
          <p class="text-white mt-1">Explore the world with our website</p>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form class="bg-white" onSubmit={handleSubmit}>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <input
              class="pl-2 outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onSubmit={handleSubmit}
            name="submit"
            class="block w-full bg-secondary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Login
          </button>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Register for an account?
          </span>
          <Link className="text-blue-500" to="/signup">
            {" "}
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
