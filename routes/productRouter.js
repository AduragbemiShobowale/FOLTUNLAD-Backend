const express = require("express");
const methodNotAllowed = require("../utils/methodNotAllowed");
const {
  allData,
  allProvision,
  allFragrance,
  allWinesAndDrinks,
  allCosmeticsAndToiletries,
  createProduct,
  editProduct,
  deleteProduct,
  allLatestProducts,
  searchProductByName,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(allData).all(methodNotAllowed);

router.route("/provisions").get(allProvision).all(methodNotAllowed);

router.route("/fragrance").get(allFragrance).all(methodNotAllowed);

router.route("/winesAndDrinks").get(allWinesAndDrinks).all(methodNotAllowed);

router.route("/latest").get(allLatestProducts).all(methodNotAllowed);

router
  .route("/cosmeticsAndToiletries")
  .get(allCosmeticsAndToiletries)
  .all(methodNotAllowed);

router.route("/create").post(createProduct).all(methodNotAllowed);

router.route("/:id").patch(editProduct).all(methodNotAllowed);

router.route("/:id").delete(deleteProduct).all(methodNotAllowed);

router.route("/search/:name").get(searchProductByName).all(methodNotAllowed);

module.exports = router;
