import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://0.0.0.0/test")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Server is running 5000...");
});
