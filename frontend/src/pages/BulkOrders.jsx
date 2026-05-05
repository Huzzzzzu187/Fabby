import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';

const BulkOrders = () => {
  const { backendUrl } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    organizationType: '',
    phone: '',
    email: '',
    requirements: '',
    quantity: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/bulkorder/place', formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          fullName: '',
          organizationName: '',
          organizationType: '',
          phone: '',
          email: '',
          requirements: '',
          quantity: '',
          location: ''
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello, I am interested in bulk orders.

Name: ${formData.fullName}
Organization: ${formData.organizationName}
Type: ${formData.organizationType}
Quantity: ${formData.quantity}
Location: ${formData.location}

Please share details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('bulk-order-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. Hero Section */}
        <div className="text-center space-y-6 pt-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bulk Orders & Partnerships
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We partner with hospitals, old age homes, and organizations to provide quality care products at scale.
          </p>
          <button 
            onClick={scrollToForm}
            className="mt-4 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-[var(--color-primary)]/30 hover:scale-105 transition-transform"
          >
            Contact Us
          </button>
        </div>

        {/* 2. Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Hospitals */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-blue-600 text-3xl">local_hospital</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">For Hospitals</h3>
            <p className="text-slate-600 mb-6">Get reliable bulk supply of diapers and healthcare essentials for patients.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Bulk pricing
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Priority delivery
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Custom requirements support
              </li>
            </ul>
          </div>

          {/* Card 2: Old Age Homes */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-purple-600 text-3xl">elderly</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">For Old Age Homes</h3>
            <p className="text-slate-600 mb-6">Ensure comfort and dignity for your residents with our care products.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Monthly supply plans
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Special discounts
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Easy reordering
              </li>
            </ul>
          </div>

          {/* Card 3: CSR Partnerships */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-orange-600 text-3xl">diversity_1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">CSR Collaborations</h3>
            <p className="text-slate-600 mb-6">Partner with us to support communities through care product donations.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> NGO & trust support
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Donation programs
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Social impact initiatives
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Features / Trust Section */}
        <div className="bg-[var(--color-primary)]/5 rounded-2xl p-8 md:p-12 border border-[var(--color-primary)]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl">verified_user</span>
              <p className="font-bold text-slate-800">Trusted by healthcare providers</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl">local_shipping</span>
              <p className="font-bold text-slate-800">Fast and discreet delivery</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[var(--color-primary)] text-4xl">payments</span>
              <p className="font-bold text-slate-800">Flexible bulk pricing</p>
            </div>
          </div>
        </div>

        {/* 3. Contact Form Section */}
        <div id="bulk-order-form" className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 p-8 md:p-12 max-w-4xl mx-auto border border-slate-100 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Request a Quote</h2>
            <p className="text-slate-600">Fill out the form below and our partnerships team will get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Organization Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Organization Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="organizationName"
                  required
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="City Hospital"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Organization Type */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Organization Type <span className="text-red-500">*</span></label>
                <select 
                  name="organizationType"
                  required
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors bg-white"
                >
                  <option value="" disabled>Select Type</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Old Age Home">Old Age Home</option>
                  <option value="NGO">NGO</option>
                  <option value="Corporate (CSR)">Corporate (CSR)</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contact@organization.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Requirement Details */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Requirement Details <span className="text-red-500">*</span></label>
                <textarea 
                  name="requirements"
                  required
                  rows="4"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Please describe what products you are looking for..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Quantity Needed */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Estimated Quantity Needed <span className="text-red-500">*</span></label>
                <input 
                  type="number" 
                  name="quantity"
                  required
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>

              {/* Delivery Location */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Delivery Location (City/State) <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="New York, NY"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
                />
              </div>
            </div>

            <div className="pt-6 flex flex-col gap-4">
              <button 
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-primary)]/90 transition-all active:scale-[0.99] shadow-lg shadow-[var(--color-primary)]/20 flex justify-center items-center gap-2"
              >
                <span>Send Inquiry</span>
                <span className="material-symbols-outlined">send</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.99] shadow-lg shadow-green-500/20 flex justify-center items-center gap-2"
              >
                <span>Contact on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;
