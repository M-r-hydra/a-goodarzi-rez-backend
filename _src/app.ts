// Env Attacher
import "dotenv/config";
// Env Attacher

// Express
import express from "express";
// Express

// Mongoose
import mongoose from "mongoose";
// Mongoose

// Routes
import { homeRoutes } from "./Routes/home/homeRoutes";
// Routes

const app = express();

let isConnectedToDB = false;

/**
 *
 *
 *
 *
 *
 *
 *
 */
app.get("/", homeRoutes);
/**
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 *
 *
 *
 *
 *
 *
 */
// DB Connector
mongoose
  .connect(
    `${String(process.env.MONGODB_PROTOCOL)}${String(
      process.env.DB_USERNAME
    )}:${String(process.env.DB_PASSWORD)}@${String(
      process.env.BACKEND_DB_IP
    )}/${String(process.env.DB_NAME)}`
  )
  .then(() => {
    console.clear();
    console.log("connected To DB successfully");
    isConnectedToDB = true;
  })
  .catch((err) => {
    console.log(err);
    isConnectedToDB = false;
  });
// DB Connector
/**
 *
 *
 *
 *
 *
 *
 *
 */
