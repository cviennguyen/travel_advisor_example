import React from "react";
import { Navbar, Footer, ServiceCard } from "../components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../apis/axios";

const SERVICES_URL = "/service";

const List = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(SERVICES_URL, config);
      setPlaces(data?.data.services);
      console.log(data?.data.services);
    } catch (err) {
      console.log(err);
    }
  };
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar sticky />
      <form className="container mx-auto p-4 flex space-x-2">
        <div className="relative w-full">
          {/* Search Input Field */}
          <input
            type="text"
            className="w-full border rounded-sm pl-10 pr-4 py-2 focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none"
            // Search Term value
            // onChange Event to update search Term value
          />
          {/* --- */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-3 left-3 text-secondary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* Submit Button */}
        <button className="bg-secondary py-2 px-3 md:px-6 rounded-sm hidden sm:inline cursor-pointer hover:bg-cyan-400 transition ease-in duration-200">
          <p className="font-semibold">Search</p>
        </button>
        {/* --- */}
      </form>
      <div className="container mx-auto p-4 block space-x-2">
        {places.map((place) => (
          <Link to={`/list/${place._id}`}>
            <ServiceCard key={place._id} place={place} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default List;
