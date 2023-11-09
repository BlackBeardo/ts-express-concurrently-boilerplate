import { Router } from "express";
import { brandRoutes } from "./brands/brand.js";

const v1Routes = Router();

v1Routes.use("/v1/brands", brandRoutes);

export default v1Routes;
