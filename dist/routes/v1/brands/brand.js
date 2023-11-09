"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandRoutes = void 0;
const express_1 = require("express/");
const brand_1 = require("../../../controllers/brands/brand");
exports.brandRoutes = (0, express_1.Router)();
exports.brandRoutes.get("/view", brand_1.getBrandDetails);
//# sourceMappingURL=brand.js.map