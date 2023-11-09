import { Router } from "express/";
import { getBrandDetails } from "../../../controllers/brands/brand";

export const brandRoutes = Router();

brandRoutes.get("/view", getBrandDetails);
