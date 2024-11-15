import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowLoading from "./ShowLoading";
import { updateQuantity, deleteItem } from "../../store/slices/CartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [cartItems]);

  const increaseQuantity = (item) => {
    setLoading(true);

    setTimeout(() => {
      dispatch(updateQuantity({ ...cartItems, id: item, increment: true }));
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

  const deleteItemFromCart = (item) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteItem(item));
      setLoading(false);
    }, 500);
  };

  let quantity = cartItems
    .map((e) => e.quantity)
    .reduce((acc, i) => acc + i, 0);

  const totalPrice = useMemo(() => {
    return cartItems
      .reduce(
        (acc, item) =>
          acc +
          (item.card.info.price
            ? item.card.info.price * item.quantity
            : item.card.info.defaultPrice * item.quantity) /
            100,
        0
      )
      .toFixed(2);
  }, [cartItems]);

  return (
    <>
      {loading ? (
        <ShowLoading />
      ) : quantity === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="overflow-x-auto">
            <div className="bg-white w-full rounded-lg shadow-md flex">
              <div className="w-full p-8 border-r">
                <h2 className="text-2xl font-bold mb-6 text-start">Items</h2>
                <table class="table-auto w-full">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                        PRODUCT DETAILS
                      </th>
                      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                        QUANTITY
                      </th>
                      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                        PRICE
                      </th>
                      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                        TOTAL
                      </th>
                      <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index} class="border-b">
                        <td class="px-4 py-2">
                          <div class="flex items-center space-x-4">
                            <img
                              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`}
                              alt={item.card.info.name}
                              class="w-16 h-16 rounded"
                            />
                            <div>
                              <h3 class="text-lg font-semibold truncate">
                                {item.card.info.name}
                              </h3>
                              <p class="text-sm text-gray-500">
                                {item.card.info.category}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-2 text-center">
                          <button
                            class="text-lg text-red-800"
                            onClick={() => decreaseQuantity(item.card.info.id)}
                          >
                            <i class="bi bi-dash-circle-fill"></i>
                          </button>
                          <span className="ml-2 mr-2">{item.quantity}</span>
                          <button
                            class="text-lg text-green-800"
                            onClick={() => increaseQuantity(item.card.info.id)}
                          >
                            <i class="bi bi-plus-circle-fill transition delay-150 duration-300 ease-in-out"></i>
                          </button>
                        </td>
                        <td class="px-4 py-2 text-center">
                          {item.card.info.price
                            ? (item.card.info.price / 100).toFixed(2)
                            : (item.card.info.defaultPrice / 100).toFixed(2)}
                        </td>
                        <td class="px-4 py-2 text-center">
                          {item.card.info.price
                            ? (
                                (item.card.info.price * item.quantity) /
                                100
                              ).toFixed(2)
                            : (
                                (item.card.info.defaultPrice * item.quantity) /
                                100
                              ).toFixed(2)}
                        </td>
                        <td class="px-4 py-2 text-center">
                          <button
                            class="text-sm text-red-500 font-semibold hover:underline"
                            onClick={() => deleteItemFromCart(item)}
                          >
                            <i class="bi bi-trash-fill transition delay-150 duration-300 ease-in-out"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link to="/" className="text-indigo-600 mt-4 block">
                  <i class="bi bi-arrow-left-circle-fill"></i> Continue Shopping
                </Link>
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
                  <span>{totalPrice}</span>
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
