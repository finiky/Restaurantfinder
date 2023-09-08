import { useContext, useEffect } from "react";
import { RestaurantContext } from "./contextApi/RestaurantsContext";
const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    try {
      const fetchData = async () => {
        let data = await fetch("http://localhost:5000/api/restaurants");
        data = await data.json();
        setRestaurants(data.data);
      };
      fetchData();
    } catch (error) {}
  }, []);
  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{"$".repeat(restaurant.price_range)}</td>
              <td>reviews</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
