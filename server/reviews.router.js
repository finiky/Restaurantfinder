const express = require("express");
const router = express.Router();
const db = require("./db/index");

// Get all reviews for a restaurant
router.get("/restaurant/reviews/:id", async (request, response) => {
  const result = db.query(
    "SELECT Avg(rating) FROM reviews WHERE restaurant_id = $1 GROUP BY restaurant_id",
    [id]
  );
});
