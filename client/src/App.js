import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdateRestaurant from "./routes/UpdateRestaurant";
import RestaurantDetail from "./routes/RestaurantDetail";
import { RestaurantContextProvider } from "./contextApi/RestaurantsContext";
const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdateRestaurant />}
          />
          <Route exact path="/restaurants/:id" element={<RestaurantDetail />} />
        </Routes>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
