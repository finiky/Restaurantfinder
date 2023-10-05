import { useState, createContext } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const addRestaurant = (restaurant) => {
    setRestaurants(...restaurants, restaurant);
  };
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        restaurant,
        setRestaurant,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
