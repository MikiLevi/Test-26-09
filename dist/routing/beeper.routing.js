"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beeper_controller_1 = require("../controller/beeper.controller");
const router = (0, express_1.Router)();
// נתיב לקבלת כל הביפרים
router.get('/beepers', beeper_controller_1.getAllBeepers);
// נתיב ליצירת ביפר חדש
router.post('/beepers', beeper_controller_1.createBeeper);
// נתיב לקבלת פרטי ביפר לפי מזהה
router.get('/beepers/:id', beeper_controller_1.getBeeperById);
exports.default = router;
