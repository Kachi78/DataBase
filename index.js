const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");

const compass_string = "mongodb://localhost:27017/kachi_81";
const atlas_string =
  "mongodb+srv://chukwuemekaonyekachi06_db_user:AZS6sVgl4xoYJoO6@cluster0.xhpkgpt.mongodb.net/kachi_81?appName=Cluster0";

mongoose
  .connect(atlas_string, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
const port = 8888;

app.use(express.json);

app.get("/", (req, res) => {
  res.send("server is active");
});

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server is up and running: ${port}`);
});
