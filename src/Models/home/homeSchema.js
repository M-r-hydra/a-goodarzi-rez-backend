"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const HomeSchema = new mongoose_1.default.Schema({
    fa: Object,
    en: Object,
});
const User = mongoose_1.default.model("homeSchema", HomeSchema);
