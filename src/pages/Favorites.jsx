import { Navbar, Footer } from "../components";
import { useState, useEffect } from "react";
import axios from "../apis/axios";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const FAVORITE_URL = "/favorite";

const Favorites = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      const { data } = await axios.get(FAVORITE_URL, config);
      setFavorites(data?.data?.favorites);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <>
      <Navbar sticky />
      <div className="container mx-auto p-4 block space-x-2">
        {favorites?.map((favorite) => (
          <Link to={`/list/${favorite?.service._id}`}>
            <ServiceCard key={favorite?._id} place={favorite.service} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
