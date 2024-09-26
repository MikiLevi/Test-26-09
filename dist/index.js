"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beeper_routing_1 = __importDefault(require("./routing/beeper.routing"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware לפענוח גופי JSON
app.use(express_1.default.json());
// שימוש בנתיבי הביפרים לכל בקשה ל- /beepers
app.use('/api', beeper_routing_1.default);
// הפעלת השרת
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
