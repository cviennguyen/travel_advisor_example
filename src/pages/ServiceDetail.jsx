import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../apis/axios";
import { Navbar, Footer } from "../components";
import ReactStarsRating from "react-awesome-stars-rating";
import img from "../img/map.png";
import { AiFillPhone, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import user from "../img/user.png";
import { toast } from "react-toastify";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [toggle, setToggle] = useState({
    isFavorite: false,
  });
  const favoriteIds = [];

  favorites.forEach((favorite) => {
    favoriteIds.push(favorite.service._id);
  });

  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleAddFavorite = async () => {
    try {
      await axios.post(`/service/${id}/favorite`, {}, config);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
    setToggle({ isFavorite: !toggle.isFavorite });
    toast.success("Add to favorite successfully");
  };
  const handleDeleteFavorite = async () => {
    try {
      await axios.delete(`/service/${id}/deleteFavorite`, config);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
    setToggle({ isFavorite: !toggle.isFavorite });
    toast.success("Delete from favorite successfully");
  };

  const getService = async () => {
    try {
      const { data } = await axios.get(`/service/${id}`, config);
      setService(data?.data?.service);
      console.log(data?.data?.service.reviews[0].id);
    } catch (err) {
      console.log(err);
    }
  };
  const getFavorites = async () => {
    try {
      const { data } = await axios.get(`/favorite`, config);
      setFavorites(data?.data?.favorites);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getService();
    getFavorites();
  }, []);
  useEffect(() => {
    favoriteIds.includes(id)
      ? setToggle({ isFavorite: true })
      : setToggle({ isFavorite: false });
  }, [favorites]);
  return (
    <>
      <Navbar sticky />
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
            {service?.ratingsQuantity} Reviews
          </span>
          {!toggle.isFavorite ? (
            <button
              onClick={handleAddFavorite}
              className="flex justify-center items-center rounded-full text-xl hover:underline"
            >
              <AiOutlineHeart className="w-14 h-14 mr-3" /> Add
            </button>
          ) : (
            <button
              onClick={handleDeleteFavorite}
              className="flex justify-center items-center rounded-full text-xl hover:underline"
            >
              <AiFillHeart className="w-14 h-14 mr-3" /> Delete
            </button>
          )}
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
          Reviews ({service?.ratingsQuantity})
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
          <div className="flex flex-col border-b-2 py-10">
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
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetail;
