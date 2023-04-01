import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../apis/axios";
import ReactStarsRating from "react-awesome-stars-rating";
import { AiFillPhone, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img from "../../img/map.png";
import user from "../../img/user.png";
import { toast } from "react-toastify";
const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getService = async () => {
    try {
      const { data } = await axios.get(`/service/${id}`, config);
      setService(data?.data?.service);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteReview = async (id) => {
    try {
      if (confirm("Are you sure to delete?") == true) {
        await axios.delete(`review/${id}`, config);
        toast.success("Delete review successfully");
        getService();
      } else {
        toast.error("You cancel delete review");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getService();
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <h1>{service?.name}</h1>
        <p className="my-2 text-sm flex flex-wrap justify-between leading-relaxed">
          {/* Place Rating with 'place.rating' value passed to generate a React Stars Rating element */}
          <span className="flex items-center mr-2">
            <ReactStarsRating
              value={Number(service?.ratingsAverage)}
              className="flex mr-2"
              size={20}
              isEdit={false}
              primaryColor="#00afef"
              secondaryColor="#e5e7eb"
            />
            {service?.reviews.length} Reviews
          </span>
        </p>
        <p className="text-sm">Address: {service?.location}</p>
        <span className="text-sm flex items-center">
          <AiFillPhone className="mr-2" /> {service?.phone}
        </span>
        <p className="text-sm">Website:{service?.website}</p>
        <img src={img} alt={img} className="w-200 h-90 mx-auto" />
        <p className="text-3xl font-bold my-8 text-center">Highlight</p>
        <p className="text-md p-4 mb-10 ">{service?.description}</p>
        <p className="text-3xl font-bold my-8">
          Reviews ({service?.reviews.length})
        </p>
        <ReactStarsRating
          value={Number(service?.ratingsAverage)}
          className="flex mr-2 mb-10"
          size={40}
          isEdit={false}
          primaryColor="#00afef"
          secondaryColor="#e5e7eb"
        />

        {service?.reviews?.map((review) => (
          <div className="flex flex-row justify-between items-center border-b-2 py-10">
            <div>
              <div className="flex items-center w-[15rem]	">
                <img
                  src={user}
                  alt="user"
                  className="w-10 h-10 rounded-full mr-3"
                />
                {review?.user?.name}
              </div>
              <div className="flex-auto">
                <ReactStarsRating
                  value={Number(review?.rating)}
                  className="flex mr-2 mb-2"
                  size={20}
                  isEdit={false}
                  primaryColor="#00afef"
                  secondaryColor="#e5e7eb"
                />
                <p className="text-sm mb-5">{review.createdAt}</p>
                {review.review}
              </div>
            </div>
            <Link
              onClick={() => deleteReview(review.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceDetail;
