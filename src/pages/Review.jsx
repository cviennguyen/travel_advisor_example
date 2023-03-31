import { Footer, Navbar } from "../components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "../apis/axios";

const Review = () => {
  const [review, setReview] = useState([]);
  const [rating, setRating] = useState(1);
  const [service, setService] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setService(location.state.service);
  }, [location.state.service]);
  const data = {
    rating,
    review,
  };
  const resetData = () => {
    setRating(1);
    setReviews("");
  };
  let history = useHistory();
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios.post(`/service/${id}/review`, data, config);
      toast.success("Review successfully");
      history.push(`/list/${id}`);
      resetData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <p className="text-2xl font-semibold text-center m-10">Review</p>
      <div className="container mx-auto">
        <p className="text-2xl pb-8">{service?.name}</p>

        <form className="bg-white" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <div className="flex items-center mb-4">
              <input
                id="1"
                type="radio"
                value="1"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setRating(e.target.value)}
              />
              <label for="1" className="ml-2 text-sm font-medium ">
                1
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="2"
                type="radio"
                value="2"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setRating(e.target.value)}
              />
              <label for="2" className="ml-2 text-sm font-medium ">
                2
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="3"
                type="radio"
                value="3"
                name="default-radio"
                onChange={(e) => setRating(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="3" className="ml-2 text-sm font-medium ">
                3
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="4"
                type="radio"
                value="4"
                name="default-radio"
                onChange={(e) => setRating(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="4" className="ml-2 text-sm font-medium ">
                4
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="5"
                type="radio"
                value="5"
                onChange={(e) => setRating(e.target.value)}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="5" className="ml-2 text-sm font-medium ">
                5
              </label>
            </div>
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <textarea
              class="pl-2 outline-none border-none h-10"
              type="text"
              name=""
              autoFocus
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
            />
          </div>
          <button
            type="submit"
            name="submit"
            class="block w-full bg-secondary mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Review;
