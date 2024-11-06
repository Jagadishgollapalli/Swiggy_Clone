import React from "react";

export default function Card() {
  return (
    <>
      <div className="flex justify-between items-center mt-12 max-w-[920px] mx-auto">
        <h1 className="text-2xl font-bold">Restaurants with online food delivery in Bangalore</h1>
        <span className="flex space-x-4">
          <button><i className="bi bi-arrow-left bg-gray-200 rounded-3xl px-3 py-2"></i></button>
          <button><i className="bi bi-arrow-right bg-gray-200 rounded-3xl px-3 py-2"></i></button>
        </span>
      </div>

      <div className="flex justify-center mt-8">
        <div className="grid gap-5 max-w-[920px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="w-56 rounded overflow-hidden transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-50 duration-300">
            <img
              className="w-full h-32 rounded-xl object-cover shadow-inner"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n15vckntsiboiod3gpco"
              alt="Samosa"
            />
            <div className="px-4 py-3">
              <div className="font-bold text-lg">Samosa</div>
              <div className="flex items-center space-x-2">
                <span className="inline-block px-0 py-0.5 text-sm font-bold text-gray-700">
                <i class="bi bi-star-fill"></i> 4.5
                </span>
                <span className="inline-block px-2 py-0.5 text-sm font-bold text-gray-700">
                  20-25 mins
                </span>
              </div>
              <p className="text-gray-700 font-semibold	text-wrap text-sm mt-2">
                Chinese, Desserts, Beverages, North Indian HSR Layout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
