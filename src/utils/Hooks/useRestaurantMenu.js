import React, { useState, useEffect } from "react";

export default function useRestaurantMenu(resId) {
  const [menuData, setResMenuData] = useState(null);

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

  return menuData;
}
