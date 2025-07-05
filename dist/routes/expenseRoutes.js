"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const auth_1 = require("../middleware/auth");
const expenseController_1 = require("../controllers/expenseController");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
router.post('/', auth_1.authenticate, upload.single('proof'), expenseController_1.createExpense);
router.get('/', auth_1.authenticate, expenseController_1.getExpenses);
router.get('/:id', auth_1.authenticate, expenseController_1.getExpense);
router.put('/:id', auth_1.authenticate, expenseController_1.updateExpense);
router.delete('/:id', auth_1.authenticate, expenseController_1.deleteExpense);
router.post('/income', auth_1.authenticate, expenseController_1.createIncome);
router.get('/income', auth_1.authenticate, expenseController_1.getIncome);
exports.default = router;
