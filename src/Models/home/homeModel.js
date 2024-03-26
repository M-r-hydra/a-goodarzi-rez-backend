"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const HomeSchema_1 = require("../../Schema/home/HomeSchema");
exports.HomeData = mongoose_1.default.model("homeData", HomeSchema_1.homeDataSchema);
