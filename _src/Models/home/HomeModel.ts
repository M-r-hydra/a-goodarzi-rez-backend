import mongoose from "mongoose";
import { homeDataSchema } from "../../Schema/home/HomeSchema";

export const HomeData = mongoose.model("homeData", homeDataSchema);
