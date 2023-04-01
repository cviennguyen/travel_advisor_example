import { useState, useEffect } from "react";
import axios from "../../apis/axios";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const { data } = await axios.get(`/user/${id}`, config);
      setUser(data?.data?.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div class="p-11">
        <div class="p-11  bg-white shadow mt-24">
          {" "}
          <div class="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div class="grid grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p class="font-bold text-gray-700 text-xl">0</p>{" "}
                <p class="text-gray-400">Review</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p class="font-bold text-gray-700 text-xl">0</p>{" "}
                <p class="text-gray-400">Answers</p>{" "}
              </div>{" "}
            </div>{" "}
            <div class="relative">
              {" "}
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
              </div>{" "}
            </div>{" "}
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <Link
                to={"update-profile"}
                class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                {" "}
                Edit Profile{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <div class="mt-20 text-center border-b pb-12">
            {" "}
            <h1 class="text-4xl font-medium text-gray-700">
              {user?.name}
            </h1>{" "}
            <p class="text-gray-400">Role: {user?.role}</p>{" "}
            <p class="font-light text-gray-600 mt-3">{user?.email}</p>{" "}
            <p class="mt-2 text-gray-500">Website: {user?.website}</p>{" "}
            <p class="mt-2 text-gray-500">Phone: {user?.phone}</p>{" "}
          </div>{" "}
          <div class="mt-12 flex flex-col justify-center">
            {" "}
            <h1 class="text-2xl font-medium text-gray-700 text-center">
              About
            </h1>{" "}
            <p class="text-gray-600 text-center lg:px-16">{user?.about}</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
