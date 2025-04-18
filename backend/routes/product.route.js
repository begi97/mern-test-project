import express from "express";
import mongoose from "mongoose";
import Product from "../moduls/product.model.js";
import { createProduct, updateProduct, getProducts, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;