"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_js_1 = __importDefault(require("./routes/v1/index.js"));
(0, dotenv_1.configDotenv)({ path: process.env.NODE_ENV === "production" ? "./.env.production" : "./.env.development" });
const app = (0, express_1.default)();
const port = process.env.NODE_PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api", index_js_1.default);
app.get("/", (_req, res) => {
    res.status(200).send(`Mode: ${process.env.NODE_ENV} | EasyBuy Up & Running Updated!`);
});
app.listen(port, async () => {
    console.log(`\n\n\nMODE: ${process.env.NODE_ENV}\nhttp://localhost:${port}`);
});
//# sourceMappingURL=index.js.map