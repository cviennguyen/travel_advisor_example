import React, { useState } from "react";

const AddService = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    type,
    name,
    description,
    location,
    price,
    phone,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto px-4 ">
        <p className="text-2xl font-semibold mb-10">Add Service</p>
        <form onSubmit={handleSubmit} className="w-1/2">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Type of service
          </label>
          <div className="mt-2">
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="type"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="hotel">Hotel</option>
              <option value="restaurant">Restaurant</option>
              <option value="attraction">Attraction</option>
            </select>
          </div>
          <label
            for="name"
            className="block text-sm font-medium leading-6 my-5 text-gray-900"
          >
            Name:{" "}
          </label>
          <div class="mt-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            for="location"
            className="block text-sm font-medium leading-6 my-5 text-gray-900"
          >
            Location
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            for="name"
            className="block text-sm font-medium leading-6 my-5 text-gray-900"
          >
            Phone
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <label
            for="price"
            className="block text-sm font-medium leading-6 my-5 text-gray-900"
          >
            Price
          </label>
          <div class="mt-2">
            <div className="flex flex-row items-center gap-5">
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                className="block w-[100px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p>$</p>
            </div>
          </div>
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your description
          </label>
          <textarea
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="block p-2.5 mb-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your description here..."
          ></textarea>
          <button className="bg-blue-500 w-[100px] mb-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddService;
