const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");
const compass_string = "mongodb://localhost:27017/kachi_81";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is active");
});

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server is up and running: ${port}`);
});
