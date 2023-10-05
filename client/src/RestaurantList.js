import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "./contextApi/RestaurantsContext";
const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();
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
  const handleDelete = async (e, restaurantId) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${restaurantId}`,
        {
          method: "DELETE",
          headers: {
            "CONTENT-TYPE": "application/json",
          },
        }
      );
      setRestaurants(
        restaurants.filter((restaurant) => restaurant.id !== restaurantId)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async (e, restaurantId) => {
    e.stopPropagation();
    try {
      navigate(`/restaurants/${restaurantId}/update`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleView = async (e, restaurantId) => {
    e.stopPropagation();
    try {
      navigate(`restaurants/${restaurantId}`);
    } catch (error) {}
  };
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
          {restaurants &&
            restaurants.map((restaurant) => (
              <tr
                key={restaurant.id}
                onClick={(e) => {
                  handleView(e, restaurant.id);
                }}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>reviews</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      handleUpdate(e, restaurant.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, restaurant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
