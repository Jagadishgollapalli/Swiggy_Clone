import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      <div class="mt-12 max-w-[800px] mx-auto">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 class="text-2xl font-semibold text-gray-700 mb-4">
            Your Cart is Empty
          </h1>
          <p class="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            class="px-6 py-2 text-red-500 rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}
