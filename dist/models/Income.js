"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const IncomeSchema = new mongoose_1.default.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    currency: { type: String },
    managementDepartment: { type: String },
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
});
exports.default = mongoose_1.default.model('Income', IncomeSchema, 'income');
