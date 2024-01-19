import express from "express";

export const homeRoutes = express.Router();

homeRoutes.get("/", (req, res) => {
  res.status(200).json({ x: "s" });
});
