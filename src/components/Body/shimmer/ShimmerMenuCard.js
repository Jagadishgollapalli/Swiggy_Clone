import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShimmerMenuCard() {
    const [dummyArr, setDummyArr] = useState(["","","",""])
  return (
    <>
      <div className="mt-12 max-w-[800px] mx-auto">
        <div className="max-w-[50px] h-[10px] w-full mx-auto bg-gray-200 shadow-sm rounded-b-3xl"></div>
        <div className="flex justify-center mt-8">
          <div className="max-w-[800px] h-[190px] w-full mx-auto bg-gray-200 shadow-sm rounded-b-3xl">
            <div className="max-w-[760px] w-full mx-auto">
              <div className="w-full h-[170px] rounded-2xl overflow-hidden bg-gray-100">
                <div className="px-4 py-3 flex items-center space-x-2">
                  <span className="font-semibold bg-gray-200 w-20 animate-pulse"></span>
                  <span className="ml-2 font-semibold bg-gray-200 w-20 animate-pulse"></span>
                </div>
                <Link
                  to=""
                  className="px-4 flex items-center space-x-1 font-bold text-red-500 underline"
                >
                  <span className="bg-gray-200 w-24 h-4 animate-pulse"></span>
                </Link>
                <span className="px-4 py-3 text-sm font-bold flex items-center space-x-2">
                </span>
                <span className="px-4 flex font-bold items-center space-x-2">
                  <span className="bg-gray-200 w-16 h-4 animate-pulse"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[760px] mx-auto mt-4">
          <div className="mt-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl bg-gray-200 w-1/2 animate-pulse"></h2>
                <span className="cursor-pointer">
                </span>
              </div>
              <div className="w-full pb-4">
                <div className="p-4 rounded-lg flex justify-between items-center">
                  <ul className="space-y-2 w-full">
                    <div className="flex mb-4 pb-4 border-b-2 bg-gray-100">
                    {dummyArr.map((e,i) => (
                        <>
                        <div key={i} className="w-52 rounded overflow-hidden animate-pulse bg-gray-200">
                          <div className=" bg-gray-300 rounded-xl mb-4"></div>
                          <div className="px-4 py-3">
                            <div className="bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                          </div>
                          <div className="px-4 py-3">
                            <div className="bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                          </div>
                        </div>
                      </>  
                    ))}
                      <div className="ml-4">
                        <div className="w-32 h-32 bg-gray-300 animate-pulse rounded-lg"></div>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className="p-4 rounded-lg flex justify-between items-center">
                  <ul className="space-y-2 w-full">
                    <div className="flex mb-4 pb-4 border-b-2 bg-gray-100">
                    {dummyArr.map((e,i) => (
                        <>
                        <div key={i} className="w-52 rounded overflow-hidden animate-pulse bg-gray-200">
                          <div className=" bg-gray-300 rounded-xl mb-4"></div>
                          <div className="px-4 py-3">
                            <div className="bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                          </div>
                          <div className="px-4 py-3">
                            <div className="bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="mt-2 h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                          </div>
                        </div>
                      </>  
                    ))}
                      <div className="ml-4">
                        <div className="w-32 h-32 bg-gray-300 animate-pulse rounded-lg"></div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShimmerMenuCard;
