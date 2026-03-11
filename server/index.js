import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import process from "process";
import cors from "cors";
import adminRouter from "./routes/adminRoute.js";

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// console.log("MONGO_URL:", MONGO_URL);
//connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    //   useNewUrlParser: true,
    //     useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    //start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api", adminRouter);
