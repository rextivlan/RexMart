import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";
import { auth, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(auth, admin, deleteProduct);

export default router;
