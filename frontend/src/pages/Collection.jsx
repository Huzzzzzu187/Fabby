import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }


  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }




    setFilterProducts(productsCopy);
  }

  /** Sorting Code */

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {

      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;

    }

  }


  useEffect(() => {
    applyFilter();
  }, [category, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-8">
      {/* Breadcrumbs & Title */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <a className="hover:text-[var(--color-primary)] transition-colors" href="/">Home</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-slate-900 font-medium">Healthcare Products</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Premium Healthcare Solutions</h1>
            <p className="text-slate-500 mt-2 max-w-xl">Find high-quality solutions designed for ultimate comfort and professional care. Tested and trusted by healthcare specialists.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-slate-200">
            <select onChange={(e) => setSortType(e.target.value)} className="bg-transparent text-sm font-medium outline-none cursor-pointer py-1 px-2 border-none ring-0">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 cursor-pointer lg:cursor-default" onClick={() => setShowFilter(!showFilter)}>
              <span className="material-symbols-outlined text-[var(--color-primary)]">tune</span> Filters
              <span className={`material-symbols-outlined ml-auto lg:hidden transition-transform ${showFilter ? 'rotate-180' : ''}`}>expand_more</span>
            </h3>

            <div className={`${showFilter ? 'block' : 'hidden'} lg:block space-y-8`}>

              <div>
                <p className="font-bold text-slate-900 mb-3 text-sm">CATEGORIES</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer" type="checkbox" value={'Diapers'} onChange={togglecategory} />
                    <span className="text-sm text-slate-600 group-hover:text-[var(--color-primary)] transition-colors">Adult Diapers</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer" type="checkbox" value={'Pants'} onChange={togglecategory} />
                    <span className="text-sm text-slate-600 group-hover:text-[var(--color-primary)] transition-colors">Diaper Pants</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer" type="checkbox" value={'Underpads'} onChange={togglecategory} />
                    <span className="text-sm text-slate-600 group-hover:text-[var(--color-primary)] transition-colors">Underpads</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer" type="checkbox" value={'Wipes'} onChange={togglecategory} />
                    <span className="text-sm text-slate-600 group-hover:text-[var(--color-primary)] transition-colors">Wipes</span>
                  </label>
                </div>
              </div>



            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            ) : (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-6xl mb-4">search_off</span>
                  <p className="text-xl font-bold text-slate-500">Product not available</p>
                  <p className="text-sm mt-2">Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
