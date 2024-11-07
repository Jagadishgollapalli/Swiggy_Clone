import React, { useEffect, useState } from "react";
import TopRestaurantsCard from "./TopRestaurantsCard";
import { TOTAL_RESTAURANTS_URL } from "../../utils/constants/urls.js";
import ShimmerCard from "./shimmer/ShimmerCards.js";

export default function Card() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(TOTAL_RESTAURANTS_URL);
    const res = await data.json();
    const fetchedRestaurants =
      res?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setAllRestaurants(fetchedRestaurants); // Store original list
    setRestaurants(fetchedRestaurants);
  };

  const handleRatingsFilter = () => {
    if (open) {
      setRestaurants(allRestaurants);
      setOpen(false);
    } else {
      setRestaurants(
        allRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.0)
      );
      setOpen(true);
    }
  };

  return (
    <>
      <TopRestaurantsCard />
      {allRestaurants.length == 0 ? (
        <ShimmerCard />
      ) : (
        <>
          <div className="flex justify-between items-center mt-12 max-w-[920px] mx-auto">
            <h1 className="text-2xl font-bold">
              Restaurants with online food delivery in Hyderabad
            </h1>
          </div>
          <div className="flex justify items-center mt-2 max-w-[920px] mx-auto">
            <button
              className="border-2 border-gray-400 text-black text-sm py-1 font-bold px-4 mr-2 rounded-full"
              onClick={handleRatingsFilter}
            >
              Ratings 4.0+{" "}
              {open && <i className="bi bi-x-lg ml-1 font-bold"></i>}
            </button>
          </div>

          <div className="flex justify-center mt-8">
            <div className="grid gap-6 max-w-[920px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {restaurants.map((item, index) => (
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
                    <p className="text-gray-700 font-semibold text-wrap text-sm mt-2">
                      {item.info.cuisines.map((e, i) => (
                        <span key={i}>
                          {e + (i < item.info.cuisines.length - 1 ? ", " : "")}
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
