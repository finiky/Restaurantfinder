require("dotenv").config();
const express = require("express");
const app = express();

app.get("/restaurants", async(request, response) => {
  try {
    console.log("Retrive the restaurants");
  } catch(error) {
    next(error);
  }
});




//start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
