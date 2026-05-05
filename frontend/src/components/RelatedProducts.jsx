import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {

        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);

            setRelated(productsCopy.slice(0, 4));

        }
    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2 mb-8'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>

        </div>
    )
}

export default RelatedProducts
