import React, { useEffect, useContext, useState, } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart, getImageUrl } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('Large');
  const [subscription, setSubscription] = useState('One-time');
  const [quantity, setQuantity] = useState(1);

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(getImageUrl(item.image[0]))


        return null;
      }

    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  useEffect(() => {
    setQuantity(1);
  }, [subscription]);

  if (!productData) {
    return <div className='opacity-0'></div>;
  }

  const basePrice =
    subscription === '1 Month' ? productData.price * 0.90 :
    subscription === '3 Months' ? productData.price * 0.85 :
    subscription === '6 Months' ? productData.price * 0.80 :
    productData.price;

  const totalPrice = basePrice * quantity;

  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-20 py-12 transition-opacity ease-in duration-500 opacity-100'>
      {/* ------------- Product Data ------------ */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ----------- Product Images ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full no-scrollbar gap-3'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(getImageUrl(item))} src={getImageUrl(item)} key={index} className='w-[24%] sm:w-full flex-shrink-0 cursor-pointer rounded-xl border border-slate-200 object-cover' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex items-center justify-center p-8'>
            <img className='w-full h-auto object-contain hover:scale-105 transition-transform duration-500' src={image} alt={productData.name} />
          </div>
        </div>

        {/* ---------- Product Info ----------- */}
        <div className='flex-1'>
          <h1 className='font-black text-3xl md:text-4xl mt-2 text-slate-900 tracking-tight'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-3'>
            <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
            <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
            <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
            <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
            <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
            <p className='pl-2 text-sm text-slate-500 font-medium'>(145 Reviews)</p>
          </div>
          <p className='mt-6 text-slate-600 md:w-4/5 leading-relaxed'>{productData.description}</p>

          <p className='mt-6 text-4xl font-extrabold text-[var(--color-primary)]'>
            {currency}{totalPrice}
          </p>

          {productData.features && (
            <div className='mt-8 flex flex-wrap gap-3'>
              {productData.features.map((feature, index) => (
                <span key={index} className='bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider flex items-center gap-2'>
                  <span className='material-symbols-outlined text-[14px]'>verified</span>
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className='mt-8 flex flex-col gap-6'>
            {/* Size Selector */}
            {productData.category !== 'Wipes' && (
              <div>
                <p className='font-bold text-slate-900 mb-2'>Select Size</p>
                <div className='flex gap-3'>
                  {['Medium', 'Large', 'XL'].map((s) => (
                    <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 border rounded-lg text-sm font-bold transition-all ${size === s ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subscription Selector */}
            <div>
              <p className='font-bold text-slate-900 mb-2'>Delivery Plan</p>
              <div className='flex flex-wrap gap-3'>
                {['One-time', '1 Month', '3 Months', '6 Months'].map((plan) => {
                  let badge = '';
                  if (plan === '1 Month') badge = '10% off';
                  if (plan === '3 Months') badge = '15% off';
                  if (plan === '6 Months') badge = '20% off';
                  
                  return (
                    <button key={plan} onClick={() => setSubscription(plan)} className={`relative px-4 py-3 border rounded-lg text-sm font-bold transition-all ${subscription === plan ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                      {plan}
                      {badge && <span className='absolute -top-2 -right-2 bg-[var(--color-accent-green)] text-white text-[10px] px-1.5 py-0.5 rounded-full'>{badge}</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {subscription !== 'One-time' && (
              <div>
                <p className='font-bold text-slate-900 mb-2'>Select Quantity</p>
                <div className='flex items-center gap-3'>
                  <button 
                    onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                    className='px-3 py-1 border rounded-lg font-bold'
                  >-</button>

                  <span className='font-bold text-lg'>{quantity}</span>

                  <button 
                    onClick={() => setQuantity(prev => prev < 24 ? prev + 1 : 24)}
                    className='px-3 py-1 border rounded-lg font-bold'
                  >+</button>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => addToCart(productData._id, productData.category === 'Wipes' ? 'N/A' : size, subscription, quantity)} className='mt-10 bg-[var(--color-primary)] text-white px-10 py-4 text-sm font-bold rounded-xl hover:bg-[var(--color-primary)]/90 active:scale-95 transition-all shadow-lg shadow-[var(--color-primary)]/20 flex items-center gap-2'>
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
            ADD TO CART
          </button>

          <hr className='mt-12 sm:w-4/5 border-slate-200 dark:border-slate-800' />
          <div className='text-sm text-slate-600 mt-8 flex flex-col gap-4 font-medium'>
            <p className='flex items-center gap-3'><span className="material-symbols-outlined text-green-500">task_alt</span> Dermatologically tested & safe for sensitive skin.</p>
            <p className='flex items-center gap-3'><span className="material-symbols-outlined text-blue-500">local_shipping</span> Cash on delivery is available on this product.</p>
            <p className='flex items-center gap-3'><span className="material-symbols-outlined text-purple-500">inventory_2</span> Discreet packaging and fast delivery.</p>
          </div>
        </div>

      </div>

      {/* ----------- Description & Review Section ----------- */}
      <div className='mt-24'>
        <div className='flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar'>
          <b className='border-b-2 border-[var(--color-primary)] px-6 py-3 text-sm text-[var(--color-primary)] font-bold whitespace-nowrap cursor-pointer'>Description</b>
          <p className='px-6 py-3 text-sm text-slate-500 cursor-pointer hover:text-[var(--color-primary)] font-bold whitespace-nowrap transition-colors'>Reviews (145) </p>
          <p className='px-6 py-3 text-sm text-slate-500 cursor-pointer hover:text-[var(--color-primary)] font-bold whitespace-nowrap transition-colors'>Technical Specs</p>
        </div>
        <div className='flex flex-col gap-6 p-8 md:p-12 text-slate-600 bg-white shadow-sm rounded-b-3xl border border-t-0 border-slate-200 leading-relaxed text-sm md:text-base'>
          <p>
            At Fabby, we understand that providing care requires compassion, quality, and reliability. This product is engineered with advanced healthcare technology to ensure maximum comfort and dignity. Featuring rapid absorption cores, skin-friendly materials, and advanced leak prevention, it allows both users and caregivers to breathe easier. Stop thinking, start living.
          </p>
          <p>
            <strong className="text-slate-900 block mb-2 font-black">Who is this for?</strong>
            Ideal for elderly patients, individuals with mobility issues, and anyone requiring dependable incontinence management. Designed with caregiver convenience in mind, allowing for easy changes and reducing skin irritation through anti-bacterial technology and a balanced pH. Experience the profound acts of love with everyday confidence.
          </p>
        </div>
      </div>

      {/* ----------- Display Related Products ----------- */}
      <RelatedProducts category={productData.category} />

    </div>
  )
}

export default Product
