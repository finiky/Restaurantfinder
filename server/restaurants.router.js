const express = require("express");
const router = express.Router();
const db = require("./db/index");
router.get("/restaurants", async (request, response, next) => {
  try {
    const result = await db.query("SELECT * FROM restaurants")
    response.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
});
router.get("/restaurants/:id");
router.post("/restaurants");
router.put("/restaurants/:id");
router.delete("/restaurants/:id");

module.exports = router;