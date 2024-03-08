const Product = require("../models/product");

const allData = async (req, res) => {
  //get all movies and send it as the json response
  const datas = await Product.find({});

  res.status(200).json({
    data: datas,
  });
};

const searchProductByName = async (req, res) => {
  const productName = req.params.name;
  try {
    const products = await Product.find({
      productName: { $regex: productName, $options: "i" },
    });
    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allProvision = async (req, res) => {
  try {
    const products = await Product.find({ category: "Provisions" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allCosmeticsAndToiletries = async (req, res) => {
  try {
    const products = await Product.find({ category: "Cosmetics & Toiletries" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allWinesAndDrinks = async (req, res) => {
  try {
    const products = await Product.find({ category: "Wines & Drinks" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const allFragrance = async (req, res) => {
  try {
    const products = await Product.find({ category: "Fragrances" });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { category, productName, image, amount } = req.body;
  try {
    const newProduct = new Product({ category, productName, image, amount });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  const productId = req.params.id;
  const { category, productName, image, amount } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { category, productName, image, amount },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const allLatestProducts = async (req, res) => {
  try {
    const latestProducts = await Product.find()
      .sort({ createdAt: -1 })
      .limit(4);
    res.status(200).json({
      latestProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  allData,
  allProvision,
  allFragrance,
  allCosmeticsAndToiletries,
  allWinesAndDrinks,
  createProduct,
  editProduct,
  deleteProduct,
  allLatestProducts,
  searchProductByName,
};
