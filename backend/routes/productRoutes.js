import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//@DESC fetch all products
//@route Get /api/products
//@access public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@DESC fetch single products
//@route Get /api/products/id
//@access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  })
);

export default router;
