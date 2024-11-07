import React, { useState } from "react";

export default function ShimmerTopResCard() {
  const [dummyArr, setDummyArr] = useState(["", "", "", ""]);

  return (
    <>
      <div className="flex justify-between items-center mt-12 max-w-[920px] mx-auto animate-pulse">
        <h1 className="text-2xl font-bold"></h1>
        <span className="flex space-x-4 lg:flex">
          <button>
            <i className="bg-gray-200 rounded-3xl px-5 py-2 "></i>
          </button>
          <button>
            <i className=" bg-gray-200 rounded-3xl px-5 py-2"></i>
          </button>
        </span>
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid gap-6 max-w-[920px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pb-4 border-b-2">
          {dummyArr.map((e) => {
            return (
              <>
                <div className="w-52 rounded overflow-hidden animate-pulse bg-gray-200">
                  <div className="w-full h-32 bg-gray-300 rounded-xl mb-4"></div>
                  <div className="px-4 py-3">
                    <div className="h-5 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="flex space-x-2">
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                    <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
