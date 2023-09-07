require("dotenv").config();
const express = require("express");
const restaurantsRouter = require("./restaurants.router");
const app = express();

//to convert and attach body from the client to the request object
app.use(express.json());

//restaurants route handler
app.use("/api", restaurantsRouter);

//start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
