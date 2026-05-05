import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, token } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        for (const variantKey in cartItems[itemId]) {
          if (cartItems[itemId][variantKey] > 0) {
            tempData.push({
              _id: itemId,
              variantKey: variantKey,
              quantity: cartItems[itemId][variantKey],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t border-slate-200 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            if (!productData) return null;

            // Extract variant data
            const [size, subscription] = item.variantKey.split('_');
            
            // Calculate discount
            let discountMultiplier = 1;
            if (subscription === '1 Month') discountMultiplier = 0.90;
            else if (subscription === '3 Months') discountMultiplier = 0.85;
            else if (subscription === '6 Months') discountMultiplier = 0.80;
            const discountedPrice = productData.price * discountMultiplier;

            return (
              <div
                key={index}
                className="py-4 border-t border-b border-slate-200 text-slate-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 "
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-bold text-slate-900">
                      {productData.name}
                    </p>
                    <div className="flex flex-col mt-1 mb-2 gap-1 text-xs text-slate-500 font-medium">
                        {size !== 'N/A' && <span className="bg-slate-100 px-2 py-0.5 rounded w-fit border">Size: {size}</span>}
                        {subscription !== 'One-time' && <span className="bg-slate-100 px-2 py-0.5 rounded w-fit border">Plan: {subscription}</span>}
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-[var(--color-primary)]">
                        {currency}
                        {discountedPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(item._id, item.variantKey, Number(e.target.value))
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.variantKey, 0)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer hover:opacity-75 transition-opacity"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className=" w-full text-end ">
              <button
                onClick={() => token ? navigate("/place-order") : navigate("/login")}
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 transition-all text-white font-bold text-sm my-8 px-10 py-3.5 rounded-xl shadow-lg shadow-[var(--color-primary)]/20 cursor-pointer"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
