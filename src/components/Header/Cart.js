import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowLoading from "./ShowLoading";
import { updateQuantity } from "../../store/slices/CartSlice";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems)

  let quantity = cartItems.map((e) => e.quantity).reduce((acc,i) => acc + i, 0);
  let totalPrice = cartItems.map((e) => Math.round(e.card.info.price || e.card.info.defaultPrice * e.quantity) / 100).reduce((acc, i) => acc + i, 0);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

  }, [cartItems,totalPrice]);

  const increaseQuantity = (item) => {
    setLoading(true);

    setTimeout(() => {
      dispatch(updateQuantity({ id: item, increment: true }));
      setLoading(false);
    }, 500);
  };

  const decreaseQuantity = (item) => {
    setLoading(true);

    setTimeout(() => {
      dispatch(updateQuantity({ id: item, increment: false }));
      setLoading(false);
    }, 500);
  };



  return (
    <>
      {loading ? (
        <ShowLoading />
      ) : (
        <>
          <div className="bg-gray-100 p-6 flex justify-center overflow-hidden">
            <div className="bg-white w-full rounded-lg shadow-md flex">
              <div className="w-3/5 p-8 border-r">
                <h2 className="text-2xl font-bold mb-6 text-start">Items</h2>
                <div className="grid grid-cols-6 text-gray-700 font-semibold mb-4 text-center">
                  <span className="col-span-3">PRODUCT DETAILS</span>
                  <span className="col-span-1">QUANTITY</span>
                  <span className="col-span-1">PRICE</span>
                  <span className="col-span-1">TOTAL</span>
                </div>
                <div className="overflow-y-auto max-h-96">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-6 items-center py-4 border-b "
                    >
                      <div className="col-span-3 flex items-center space-x-4">
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                          alt={item.card.info.name}
                          className="w-16 h-16 rounded"
                        />
                        <div className="max-w-xs">
                          <h3 className="text-lg font-semibold truncate">
                            {item.card.info.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.card.info.category}
                          </p>
                          <a
                            href="#"
                            className="text-sm text-red-500 font-semibold hover:underline"
                          >
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className="col-span-1 flex justify-center items-center space-x-2">
                        <button className="text-lg text-red-800"
                        onClick={() => decreaseQuantity(item.card.info.id)}
                        >
                          <i class="bi bi-dash-circle-fill"></i>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="text-lg text-green-800"
                          onClick={() => increaseQuantity(item.card.info.id)}
                        >
                          <i class="bi bi-plus-circle-fill transition delay-150 duration-300 ease-in-out"></i>
                        </button>
                      </div>
                      {item.card.info.price ? (
                        <p className="col-span-1 text-center text-gray-700 font-semibold">
                          {Math.round(item.card.info.price / 100, 2).toFixed(2)}
                        </p>
                      ) : (
                        <p className="col-span-1 text-center text-gray-700 font-semibold">
                          {Math.round(
                            item.card.info.defaultPrice / 100,
                            2
                          ).toFixed(2)}
                        </p>
                      )}
                      {item.card.info.price ? (
                        <p className="col-span-1 text-center text-gray-700 font-semibold">
                          {Math.round(
                            (item.card.info.price * item.quantity) / 100,
                            2
                          ).toFixed(2)}
                        </p>
                      ) : (
                        <p className="col-span-1 text-center text-gray-700 font-semibold">
                          {Math.round(
                            (item.card.info.defaultPrice * item.quantity) / 100,
                            2
                          ).toFixed(2)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-indigo-600 mt-4 block hover:underline"
                >
                  <i class="bi bi-arrow-left-circle-fill"></i> Continue Shopping
                </a>
              </div>

              <div className="w-2/5 p-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="flex justify-between py-2 text-gray-700">
                  <span>Total Items : {quantity}</span>
                  <span>{totalPrice}</span>
                </div>

                <div className="py-4 border-b">
                  <label className="block text-gray-700 mb-2">SHIPPING</label>
                  <select className="w-full px-4 py-2 border rounded-sm">
                    <option></option>
                  </select>
                </div>

                <div className="py-4 border-b">
                  <label className="block text-gray-700 mb-2">PROMO CODE</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-sm"
                    placeholder="Enter your code"
                  />
                  <button className="mt-2 w-full py-2 bg-red-500 text-white font-semibold rounded-sm hover:bg-red-600">
                    APPLY
                  </button>
                </div>

                <div className="flex justify-between py-4 text-gray-700 font-bold text-lg">
                  <span>TOTAL COST</span>
                  <span>£462.98</span>
                </div>

                <button className="mt-4 w-full py-3 bg-green-100 text-green-800 font-semibold rounded-sm hover:bg-green-200">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
