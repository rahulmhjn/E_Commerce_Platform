import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRouter.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("E-commerce api running...");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(
    `Server Started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  );
});
