import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("API is working");
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

app.listen(port, () => {
  console.log("Serving is running");
});
