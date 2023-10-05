import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../contextApi/RestaurantsContext";
import StarRating from "../StarRating";
const RestaurantDetail = () => {
  const { id } = useParams();
  const { restaurant, setRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/restaurants/${id}`
        );
        const data = await response.json();
        setRestaurant(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return <div>{restaurant && <StarRating rating={2.5} />}</div>;
};

export default RestaurantDetail;
