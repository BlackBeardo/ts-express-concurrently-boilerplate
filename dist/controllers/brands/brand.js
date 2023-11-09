"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrandDetails = void 0;
async function getBrandDetails(_req, res, _next) {
    try {
        res.status(200).send([
            { id: 1, name: "brand 1" },
            { id: 2, name: "brand 2" },
        ]);
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Catched 500:sorry we can not progress your request");
    }
}
exports.getBrandDetails = getBrandDetails;
//# sourceMappingURL=brand.js.map