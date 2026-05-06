import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const productModel = (await import('./models/productModel.js')).default;
  const products = await productModel.find({});
  console.log(JSON.stringify(products.map(p => ({id: p._id, name: p.name, image: p.image})), null, 2));
  process.exit(0);
}).catch(console.error);
