import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        let sortedProducts = products.slice();
        setLatestProducts(sortedProducts.slice(0, 4));
    }, [products]);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Latest Collection</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">New arrivals for your daily care needs.</p>
                    </div>
                    <Link className="text-[var(--color-primary)] font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/collection">
                        View All <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {LatestProducts.length > 0 ? (
                        LatestProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-slate-500 py-10 text-lg">Product not available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LatestCollection;
