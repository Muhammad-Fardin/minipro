import {searchProducts, addProducts} from "../controllers/search.js";
import express from "express"
const router = express.Router();

router.get("/", searchProducts)
router.post("/", addProducts)
export default router;