import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { logo, profile } from "../../assets/images";
import Search from "./Search";
import { Link } from "react-router-dom";
import useLoginStatus from "../../utils/Hooks/useLoginStatus";
import { useSelector } from "react-redux";

export default function Navbar() {
  const onlineStatus = useLoginStatus();
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="sticky top-0 z-50 shadow-2xl">
      <nav className="bg-white">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <img className="h-16 w-auto" src={logo} alt="Your Company" />
                </Link>
              </div>
              <div className="sm:hidden">
                <label
                  htmlFor="mobile-menu-toggle"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  <i className="bi bi-list text-2xl"></i>
                </label>
                <input
                  type="checkbox"
                  id="mobile-menu-toggle"
                  className="hidden peer"
                />
              </div>
              <div className="hidden sm:block sm:w-full">
                <div className="relative flex space-x-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="block w-50 rounded-full border-0 py-2 pl-10 pr-4 font-proxima text-md bg-gray-200 border-b-2 placeholder-gray-500"
                      placeholder="Enter your location"
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 bg-gray-70 text-gray-400">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4 pr-6">
              <Search />
              <a
                href="#"
                className="rounded-md list-none px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
              >
                <i className="bi bi-percent"></i> Offers
              </a>
              <Link
                to="/help"
                className="rounded-md list-none px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
              >
                <i className="bi bi-patch-question-fill"></i> Help
              </Link>
              <Link
                to="/cart"
                className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
              >
                <i className="bi bi-cart3"></i> Cart
                <span className="relative inline-block ml-1 px-2 py-1 text-white bg-violet-800 rounded-full text-xs font-semibold">
                  {total}
                </span>
              </Link>
              <div className="relative ml-3">
                <button
                  type="button"
                  className={`relative flex rounded-full bg-gray-800 text-sm ${
                    onlineStatus
                      ? "hover:ring-2 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-gray-500"
                      : "hover:ring-2 hover:ring-red-500 hover:ring-offset-2 hover:ring-offset-gray-500"
                  }`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={profile}
                    alt="profile"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="sm:hidden peer-checked:block hidden absolute inset-x-0 top-16 bg-gray-800 p-4 space-y-4">
        <a href="#" className="block text-gray-300 text-sm hover:text-white">
          <i className="bi bi-search"></i> Search
        </a>
        <a href="#" className="block text-gray-300 text-sm hover:text-white">
          <i className="bi bi-percent"></i> Offers
        </a>
        <a href="#" className="block text-gray-300 text-sm hover:text-white">
          <i className="bi bi-patch-question-fill"></i> Help
        </a>
        <a href="#" className="block text-gray-300 text-sm hover:text-white">
          <i className="bi bi-cart3"></i> Cart
        </a>
        <div className="relative ml-3">
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="absolute -inset-1.5"></span>
            <img className="h-8 w-8 rounded-full" src={profile} alt="profile" />
          </button>
        </div>
      </div>
    </div>
  );
}
