import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (e) {
    // skip
  }

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken('');
    setCartItems({});
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <img src={assets.logo_main} alt="Fabby Logo" className="h-12 w-auto object-contain" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/">Home</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/collection">Products</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/about">About</NavLink>
              {/* <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/education">Education</NavLink> */}
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/blog">Blog</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/bulk-orders">Hospital Care</NavLink>
              <NavLink className="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors" to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-4">

            <Link to='/cart' className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[10px] font-bold px-1.5 rounded-full">{getCartCount()}</span>
            </Link>

            {token ? (
              <div className="group relative">
                <button onClick={() => navigate('/profile')} className="flex items-center gap-2 p-1.5 pr-3 hover:bg-slate-100 rounded-full transition-colors border border-transparent hover:border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 hidden md:block">
                    Hi, {user?.name ? user.name.split(' ')[0] : 'User'}
                  </span>
                  <span className="material-symbols-outlined text-sm text-slate-400">expand_more</span>
                </button>
                {/* Dropdown Menu */}
                <div className="group-hover:block hidden absolute right-0 pt-2 z-50">
                  <div className="flex flex-col w-48 bg-white shadow-xl rounded-2xl py-2 border border-slate-100 overflow-hidden">
                    <button onClick={() => navigate('/profile')} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 text-left transition-colors">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                      My Profile
                    </button>
                    <button onClick={() => navigate('/orders')} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 text-left transition-colors">
                      <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                      My Orders
                    </button>
                    <div className="border-t border-slate-100 my-1"></div>
                    <button onClick={logout} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 text-left transition-colors">
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')} 
                className="px-5 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
              >
                Login
              </button>
            )}

            <button onClick={() => setVisible(true)} className="md:hidden p-2 hover:bg-slate-100 rounded-full text-slate-600">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-[60] transition-all min-h-screen ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-slate-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer border-b bg-slate-50">
            <span className="material-symbols-outlined text-slate-400 font-bold">arrow_back</span>
            <p className="font-bold text-lg text-slate-900">Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/collection">Products</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/about">About</NavLink>
          {/* <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/education">Education</NavLink> */}
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/blog">Blog</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/bulk-orders">Hospital Care</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-4 pl-6 border-b font-medium text-lg text-slate-800 hover:text-[var(--color-primary)] transition-colors" to="/contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
