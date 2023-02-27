import productSchema from "../model/search.js";

export const searchProducts = async (req, res) => {
  try {
    const category = new RegExp(req.query.category, "i");
    const product = new RegExp(req.query.product, "i");
    const brand = new RegExp(req.query.brand, "i");
    const products = await productSchema.find({
      Category: category,
      ProductName: product,
      Brand: brand,
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Here are the Search Results",
        data: products,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "could not find the products",
        data: error,
      });
  }
};

export const addProducts = async (req, res) => {
  const {
    ProductName,
    Brand,
    Price,
    DiscountPrice,
    Category,
    Quantity,
    Absolute_Url,
    Image_Url,
  } = req.body;
  try {
    const newProduct = await productSchema.create({
      ProductName,
      Brand,
      Price,
      DiscountPrice,
      Category,
      Quantity,
      Absolute_Url,
      Image_Url,
    });
    const savedProduct = await newProduct.save();
    res.status(200).json({ message: "Done", data: savedProduct });
  } catch (error) {
    res.status(500).json({ message: "failed", data: error });
  }
};
