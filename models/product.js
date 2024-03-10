const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        "Provisions",
        "Cosmetics & Toiletries",
        "Wines & Drinks",
        "Fragrances",
        "Grocery",
      ],
      default: "Provisions",
      required: [true, "Please Select a Provision"],
    },
    productName: {
      type: String,
      required: [true, "Please fill in a Product Name"],
    },
    image: {
      type: [String],
      required: [true, "Please upload an image"],
    },
    amount: {
      type: String,
      required: [true, "Please type in an amount"],
      min: [0, "Amount must be a positive number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
