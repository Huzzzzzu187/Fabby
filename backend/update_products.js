import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  const productModel = (await import('./models/productModel.js')).default;
  const products = await productModel.find({});
  
  for (let p of products) {
    if (p.name === 'Wet Wipes') {
      p.image = ["babywipes (1).png", "babywipes (2).png", "babywipes (3).png", "babywipes (4).png"];
      await p.save();
      console.log('Updated Wet Wipes');
    }
  }
  
  console.log('Done');
  process.exit(0);
}).catch(console.error);
