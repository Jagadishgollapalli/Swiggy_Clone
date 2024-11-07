import React, { useState, useEffect } from "react";
import { TOP_RESTAURANT_URL } from "../../utils/constants/urls.js";
import ShimmerTopResCard from "./shimmer/ShimmerTopResCard.js";

export default function TopRestaurantsCard() {
  const [restaurants, setRestaurants] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPageLimit = 4;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setPostsPerPage(
      restaurants.slice(
        currentPage * postsPerPageLimit,
        (currentPage + 1) * postsPerPageLimit
      )
    );
  }, [currentPage, restaurants]);

  const fetchData = async () => {
    const data = await fetch(TOP_RESTAURANT_URL);
    const res = await data.json();
    const restaurants =
      res?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurants(restaurants);
    setPostsPerPage(
      restaurants.slice(
        currentPage * postsPerPageLimit,
        (currentPage + 1) * postsPerPageLimit
      )
    );
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  return (
    <>
      {restaurants.length == 0 ? (
        <ShimmerTopResCard />
      ) : (
        <>
          <div className="flex justify-between items-center mt-12 max-w-[920px] mx-auto">
            <h1 className="text-2xl font-bold">
              Top restaurant chains in Hyderabad
            </h1>
            <span className="flex space-x-4 lg:flex">
              <button
                onClick={handlePrevious}
                disabled={true ? currentPage == 0 : false}
              >
                <i
                  className={`bi bi-arrow-left bg-gray-200 rounded-3xl px-3 py-2 ${
                    currentPage === 0
                      ? "bg-gray-400 cursor-default"
                      : "bg-gray-200"
                  }`}
                ></i>
              </button>
              <button
                onClick={handleNext}
                disabled={
                  true
                    ? restaurants.length ==
                      (currentPage + 1) * postsPerPageLimit
                    : false
                }
              >
                <i
                  className={`bi bi-arrow-right bg-gray-200 rounded-3xl px-3 py-2 ${
                    restaurants.length == (currentPage + 1) * postsPerPageLimit
                      ? "bg-gray-400"
                      : "bg-gray-200"
                  }`}
                ></i>
              </button>
            </span>
          </div>
          <div className="flex justify-center mt-8">
            <div className="grid gap-6 max-w-[920px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-4 border-b-2">
              {postsPerPage.map((item, index) => (
                <div
                  key={index}
                  className="w-52 rounded overflow-hidden transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-300"
                >
                  <img
                    className="w-full h-32 rounded-xl object-cover shadow-inner"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                    alt={item.info.name}
                  />
                  <div className="px-4 py-3">
                    <div className="font-bold text-lg truncate">
                      {item.info.name}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block px-0 py-0.5 text-sm font-bold text-gray-700">
                        <i className="bi bi-star-fill"></i>{" "}
                        {item.info.avgRating}
                      </span>
                      <span className="inline-block px-2 py-0.5 text-sm font-bold text-gray-700">
                        {item.info.sla.slaString}
                      </span>
                    </div>
                    <p className="text-gray-700 font-semibold text-wrap text-sm mt-2 truncate">
                      {item.info.cuisines.map((e, i) => (
                        <span
                          className="text-gray-500 font-semibold truncate"
                          key={i}
                        >
                          {e + ","}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
