"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const periodController_1 = require("../controllers/periodController");
const router = (0, express_1.Router)();
router.post('/close', periodController_1.closePeriod);
router.get('/', periodController_1.getPeriods);
exports.default = router;
