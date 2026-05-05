import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <div className="mb-6">
              <img src={assets.logo_main} alt="Fabby Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering people with dignity and premium care solutions. We believe healthcare should be accessible, comfortable, and discreet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[var(--color-primary)] hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Products</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/collection" className="hover:text-[var(--color-primary)] transition-colors">Adult Diapers</Link></li>
              <li><Link to="/collection" className="hover:text-[var(--color-primary)] transition-colors">Underpads</Link></li>
              <li><Link to="/collection" className="hover:text-[var(--color-primary)] transition-colors">Protective Liners</Link></li>
              <li><Link to="/collection" className="hover:text-[var(--color-primary)] transition-colors">Skin Care</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--color-primary)] transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">News</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Shipping Policy</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-[var(--color-primary)] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Our Partner</span>
            <img src={assets.logo_second} alt="Partner Logo" className="h-8 w-auto object-contain" />
          </div>
          <p className="text-sm text-slate-400">© 2026 Fabby Healthcare Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
