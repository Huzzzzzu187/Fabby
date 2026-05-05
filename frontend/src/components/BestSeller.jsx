import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const { products, currency } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4)); // Using 4 products for the 2x2 grid layout
  }, [products]);

  return (
    <section className="py-20 bg-[var(--color-accent-blue)] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">
              Our Best <br /><span className="text-[var(--color-primary)]">Sellers</span>
            </h2>
            <p className="text-slate-600">
              Join thousands of happy customers who trust Fabby for their daily comfort and protection.
            </p>
            <div className="flex items-center gap-4 py-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-blue)] bg-slate-200">
                  <img className="w-full h-full rounded-full object-cover" data-alt="User testimonial face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtjIiTdxtlkEQF-L8Ku-U46OlugBqsxIwhPsNLzD_ttl8QRm4swbHZTVOyn-UnhGcVdAy1jXiq-BpqhK9iL0sRKJY15xZ0vq_3kqkGkpMHbuUmaVxZkP2NAoY5FvaSIW0EmZ-dlVtgcnNtsTv9NDBbq9-9CsqGHUfzKbxtQB2sykht4RACDSv-be-8DpO1xgmM_bdkBIFh4ItIosUhLOemvYMLl7T1IDdePbj6X_720YTXcxrtt1r2skcqGWO-fI7a51-0CLrWA" alt="" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-blue)] bg-slate-200">
                  <img className="w-full h-full rounded-full object-cover" data-alt="User testimonial face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIgQq77uKj_E3BLtK5e8Y1ZfPHXEasNOlXLbmBOHoKk1suwrhPncZAQ8nPJNKkHc9jYDfgOqur-FJYwUYywBOMhYfWrqwJVeJAe-9sM9T1b3en-C96GpW_54vojaLJHaNjKH3TsDUhElcuD3DOlt6wacV-ALqvcuMmZg0nN3UrlHNfNJILC2AVAZPue69QZVDWuZRS7ZriRW0NPpbBE2iX0lJMVItRH6o5lBunijI7Uuxp9yQRqzktwKVqHYVMrWykGafWoawuw" alt="" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent-blue)] bg-slate-200">
                  <img className="w-full h-full rounded-full object-cover" data-alt="User testimonial face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDKdkO-WTDTzZ3b4CT4C2_Stgwz4Nrx30xde1Eru2g4Fz_l-I1W0I56emkuOy9eLWsLViJOG3BjW6gS8Vd7fsDl5ZWKjz63tUSKx_VI9oB4qeNkjJefKcGzRbvAUPDTBTKVaop0QdZ25K-Z1BHbCmyUn6QIXKBAhIcp61DMhZosf5IAgb0viOEEVw6k3YUCthjqtOC8GKjkSb23021BfrmglfDd601b4H5S8dThSZbf9uMFcJoSwYjVU3yCWXkKknXgu0d6eOzgQ" alt="" />
                </div>
              </div>
              <div className="text-sm font-bold text-slate-700">
                4.9/5 from 2,000+ reviews
              </div>
            </div>
            <button className="flex items-center gap-2 text-[var(--color-primary)] font-bold group">
              Read Customer Stories
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {bestSeller.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-6 group">
                <Link to={`/product/${item._id}`} className="w-24 h-24 rounded-2xl bg-slate-50 flex-shrink-0 overflow-hidden block">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={item.image[0]} alt={item.name} />
                </Link>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-1">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                  </div>
                  <Link to={`/product/${item._id}`}>
                    <h4 className="font-bold text-slate-900 line-clamp-1 hover:text-[var(--color-primary)] transition-colors">{item.name}</h4>
                  </Link>
                  <p className="text-[var(--color-primary)] font-bold mt-1">{currency}{item.price}</p>
                  <Link to={`/product/${item._id}`} className="mt-3 inline-block text-xs font-bold text-slate-400 hover:text-[var(--color-primary)] uppercase tracking-wider transition-colors">Buy Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
