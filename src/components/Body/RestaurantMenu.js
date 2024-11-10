import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { useParams, Link } from "react-router-dom";
import ShimmerMenuCard from "./shimmer/ShimmerMenuCard";

function RestaurantMenu() {
  const [menuData, setResMenuData] = useState(null);
  const {context, resId} = useParams();
  console.log(context);

  const itemCard = menuData?.cards[2]?.card?.card?.info;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4889338&lng=78.3922053&restaurantId=${resId}`
    );
    const json = await data.json();
    setResMenuData(json.data);
  };

  if (!menuData) {
    return <ShimmerMenuCard/>;
  }

  return (
    <>
      <div className="mt-12 max-w-[800px] mx-auto">
        <span>Home route / city route </span>
        <div className="flex justify-between items-center mt-12 max-w-[800px] mx-auto">
          <h1 className="text-2xl font-bold">{itemCard?.name}</h1>
        </div>
        <div className="flex justify-center mt-8">
          <div className="max-w-[800px] h-[190px] w-full mx-auto bg-slate-100 shadow-sm rounded-b-3xl">
            <div className="max-w-[760px] w-full mx-auto border-2">
              <div className="w-full h-[170px] rounded-2xl overflow-hidden bg-white">
                <div className="px-4 py-3 flex items-center space-x-2">
                  <i className="bi bi-star-fill"></i>
                  <span className="font-semibold">
                    {itemCard?.avgRating} ({itemCard?.totalRatingsString})
                  </span>
                  <span className="ml-2 font-semibold">
                    • {itemCard?.costForTwoMessage}
                  </span>
                </div>
                <Link
                  to=""
                  className="px-4 flex items-center space-x-1 font-bold text-red-500 underline"
                >
                  {itemCard?.cuisines.map((e) => (
                    <span>{e}</span>
                  ))}
                </Link>
                <span className="px-4 py-3 text-sm font-bold flex items-center space-x-2">
                  • Outlet{" "}
                  <i className="px-2 font-semibold text-gray-500">
                    {" "}
                    {itemCard?.areaName}{" "}
                  </i>
                </span>
                <span className="px-4 flex font-bold items-center space-x-2">
                  • {itemCard?.sla?.slaString}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[760px] mx-auto mt-4">
          {menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.slice(1)
            .map((innerCard, outerIndex) => (
              <div key={outerIndex} className="mt-4">
                {innerCard?.card?.card && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4 .last:border-b-0">
                      <h2 className="font-bold text-xl">
                        {innerCard?.card?.card?.title}
                      </h2>
                      {innerCard?.card?.card?.title ? (
                        <span className="cursor-pointer">
                          <i class="bi bi-chevron-up"></i>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    {innerCard?.card?.card?.title ? (
                      <div className="w-full pb-4 border-b-8">
                        <div className="p-4 rounded-lg flex justify-between items-center">
                          <ul className="space-y-2 w-full">
                            {innerCard?.card?.card?.itemCards?.map(
                              (item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="flex mb-4 pb-4 border-b-2"
                                >
                                  <div className="flex-1">
                                    <li className="text-gray-700 font-bold">
                                      {item?.card?.info?.name}
                                    </li>
                                    <li className="font-bold mt-1">
                                      ₹ {item?.card?.info?.price / 100}
                                    </li>
                                    <li className="font-bold text-green-700">
                                      <i className="bi bi-star-fill"></i>
                                      {
                                        item?.card?.info?.ratings
                                          ?.aggregatedRating?.rating
                                      }{" "}
                                      (
                                      {
                                        item?.card?.info?.ratings
                                          ?.aggregatedRating?.ratingCountV2
                                      }
                                      )
                                    </li>
                                    <li className="text-gray-600 mt-2">
                                      {item?.card?.info?.description}
                                    </li>
                                  </div>

                                  <div className="ml-4">
                                    <img
                                      className="w-32 h-32 object-cover rounded-lg shadow-md"
                                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                                      alt={item?.card?.info?.name}
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RestaurantMenu;
