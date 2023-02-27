import mongoose from "mongoose";

const Product = new mongoose.Schema({
     ProductName: {
          type: String,
          required: true,
     },
     Brand: {
          type: String,
          required: true,
     },
     Price: {
          type: String,
          required: true
     },
     DiscountPrice: {
          type: String,
     },
     Category: {
          type: String,
          required: true
     }, 
     Quantity: {
          type: String,
     },
     Absolute_Url: {
          type: String,
     },
     Image_Url: {
          type: String,
     }
}, {timestamps: true})


const productSchema = mongoose.model("Product", Product)
export default productSchema