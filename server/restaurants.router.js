const express = require("express");
const router = express.Router();
const db = require("./db/index");

// Implementing only happy paths

// GET all restaurants
router.get("/restaurants", async (request, response, next) => {
  try {
    const result = await db.query("SELECT * FROM restaurants");
    response
      .status(200)
      .json({ entries: result.rows.length, data: result.rows });
  } catch (error) {
    next(error);
  }
});

// GET a single restaurant
router.get("/restaurants/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      id,
    ]);
    response.status(200).json({ data: result.rows });
  } catch (error) {
    next(error);
  }
});

// CREATE a new restaurant
router.post("/restaurants", async (request, response, next) => {
  try {
    const { name, location, price_range } = request.body;
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );
    response.status(201).json({ data: result.rows });
  } catch (error) {
    next(error);
  }
});

// Update a restaurant
router.put("/restaurants/:id", async (request, response, next) => {
  try {
    const { name, location, price_range } = request.body;
    const { id } = request.params;
    const result = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [name, location, price_range, id]
    );
    response.status(200).json({ data: result.rows });
  } catch (error) {
    next(error);
  }
});

// DELETE a restaurant
router.delete("/restaurants/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
    const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      response.status(204);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
