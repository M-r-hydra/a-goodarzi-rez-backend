"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Env Attacher
require("dotenv/config");
// Env Attacher
// Express
const express_1 = __importDefault(require("express"));
// Express
// Mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// Mongoose
// Routes
const homeRoutes_1 = require("./Routes/home/homeRoutes");
// Routes
const app = (0, express_1.default)();
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
app.get("/", homeRoutes_1.homeRoutes);
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
mongoose_1.default
    .connect(`${String(process.env.MONGODB_PROTOCOL)}${String(process.env.DB_USERNAME)}:${String(process.env.DB_PASSWORD)}@${String(process.env.BACKEND_DB_IP)}/${String(process.env.DB_NAME)}`)
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
app.listen(process.env.PORT, () => {
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});
