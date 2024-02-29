require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

const productRouter = require("./routes/productRouter");
const error = require("./middlewares/error");

//allows request from client side go through
app.use(cors());

app.use(express.json());
app.use("/api/fol", productRouter);
app.use(error);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`Server is listening on PORT:${port}`);
    });
  } catch (error) {
    console.log("Unable to connect");
  }
};

start();
