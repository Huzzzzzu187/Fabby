import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency, products } = useContext(ShopContext)
  const product = products.find(p => p._id === id);
  const keyFeature = product?.features?.[0];

  return (
    <Link className='group' to={`/product/${id}`}>
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-4">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image[0]} alt={name} />
        {keyFeature && <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[var(--color-primary)] shadow-sm">{keyFeature}</div>}
      </div>
      <h3 className="font-bold text-slate-900 line-clamp-1">{name}</h3>
      <p className="text-slate-500 text-sm mb-2">{product?.category || 'Premium Care'}</p>
      <p className="text-[var(--color-primary)] font-bold text-lg">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
