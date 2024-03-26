import express from "express";
import { HomeData } from "../../Models/home/HomeModel";

export const homeRoutes = express.Router();

homeRoutes.get("/", async (req, res) => {
  try {
    const data = await HomeData.find({ gg: "gx" });

    res.status(200).json({ data });
    console.log("req");
  } catch (err) {
    res.status(504).json({
      error: true,
      message: "error in fetch data from db",
    });
  }
});
