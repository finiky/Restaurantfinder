import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const UpdateRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPriceRange] = useState("");
  useEffect(() => {
    const getRestaurant = async () => {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${id}`
      );
      const data = await response.json();
      setName(data.data.name);
      setLocation(data.data.location);
      setPriceRange(data.data.price_range);
    };
    getRestaurant();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/api/restaurants/${id}`,
      {
        method: "PUT",
        headers: {
          "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify({ name, location, price_range }),
      }
    );
  };
  return (
    <div>
      <h1 className="text-center">Update Restaurant</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceRange">Price Range</label>
            <input
              id="price_range"
              className="form-control"
              value={price_range}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
