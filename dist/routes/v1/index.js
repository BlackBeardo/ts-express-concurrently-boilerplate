"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brand_js_1 = require("./brands/brand.js");
const v1Routes = (0, express_1.Router)();
v1Routes.use("/v1/brands", brand_js_1.brandRoutes);
exports.default = v1Routes;
//# sourceMappingURL=index.js.map