import React, { useState } from "react";
import axios from "../apis/axios";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const UPDATE_URL = "/user/updateMe";

const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;
  const [name, setName] = useState(user.data.user.name);
  const [phone, setPhone] = useState(user.data.user.phone);
  const [website, setWebsite] = useState(user.data.user.website);
  const [about, setAbout] = useState(user.data.user.about);

  const data = {
    name,
    phone,
    website,
    about,
  };

  const resetData = () => {
    setName("");
    setPhone("");
    setWebsite("");
    setAbout("");
  };

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.patch(UPDATE_URL, data, config);
      toast.success("Update Successful");
      history.push("/profile");
      resetData();
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
          <div className="font-bold text-2xl py-8 text-center">
            Update Profile
          </div>

          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <textarea
              class="pl-2 outline-none border-none"
              type="text"
              row="10"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <button
            type="submit"
            name="submit"
            class="block w-full bg-secondary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
