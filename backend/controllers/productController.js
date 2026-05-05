import sharp from "sharp";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } =
      req.body;

    if (!req.files) {
        return res.json({ success: false, message: "No images provided" });
    }

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    if (images.length === 0) {
        return res.json({ success: false, message: "Please upload at least one image" });
    }

    // Ensure uploads directory exists
    const uploadsDir = path.resolve('uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
        const localPath = path.join(uploadsDir, filename);
        
        await sharp(item.path)
            .webp({ quality: 80 })
            .resize({ width: 1200, withoutEnlargement: true })
            .toFile(localPath);

        let secureUrl = "";
        try {
          let result = await cloudinary.uploader.upload(localPath, {
            resource_type: "image",
            timeout: 10000 // Short timeout so it falls back quickly
          });
          secureUrl = result.secure_url;
          // Optionally delete local file if Cloudinary succeeds
          try { fs.unlinkSync(localPath); } catch(e){}
        } catch (cloudinaryError) {
          console.log("Cloudinary upload failed, falling back to local URL", cloudinaryError.message);
          // Fallback to local URL if Cloudinary fails
          // Use the backend URL or a relative path
          secureUrl = `${process.env.BACKEND_URL || 'http://localhost:4000'}/uploads/${filename}`;
        }

        // Cleanup the original multer file
        try { fs.unlinkSync(item.path); } catch(e){}

        return secureUrl;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log("Error in addProduct:", error);
    const errorMessage = error.message || (error.error && error.error.message) || "An error occurred during upload";
    res.json({ success: false, message: errorMessage });
  }
};

// function for list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {


    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// function for update product
const updateProduct = async (req, res) => {
  try {
    const { productId, name, description, price, category } = req.body;

    const product = await productModel.findById(productId);
    if (!product) {
        return res.json({ success: false, message: "Product not found" });
    }

    const image1 = req.files && req.files.image1 && req.files.image1[0];
    const image2 = req.files && req.files.image2 && req.files.image2[0];
    const image3 = req.files && req.files.image3 && req.files.image3[0];
    const image4 = req.files && req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageUrl = product.image; // default to existing images

    if (images.length > 0) {
      // Ensure uploads directory exists
      const uploadsDir = path.resolve('uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      imageUrl = await Promise.all(
        images.map(async (item) => {
          const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
          const localPath = path.join(uploadsDir, filename);
          
          await sharp(item.path)
              .webp({ quality: 80 })
              .resize({ width: 1200, withoutEnlargement: true })
              .toFile(localPath);

          let secureUrl = "";
          try {
            let result = await cloudinary.uploader.upload(localPath, {
              resource_type: "image",
              timeout: 10000 
            });
            secureUrl = result.secure_url;
            try { fs.unlinkSync(localPath); } catch(e){}
          } catch (cloudinaryError) {
            console.log("Cloudinary upload failed, falling back to local URL", cloudinaryError.message);
            secureUrl = `${process.env.BACKEND_URL || 'http://localhost:4000'}/uploads/${filename}`;
          }

          try { fs.unlinkSync(item.path); } catch(e){}
          return secureUrl;
        })
      );
    }

    product.name = name || product.name;
    product.description = description || product.description;
    if (price) product.price = Number(price);
    product.category = category || product.category;
    product.image = imageUrl;

    await product.save();

    res.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.log("Error in updateProduct:", error);
    const errorMessage = error.message || (error.error && error.error.message) || "An error occurred during update";
    res.json({ success: false, message: errorMessage });
  }
};



export { addProduct, listProducts, removeProduct, singleProduct, updateProduct };
