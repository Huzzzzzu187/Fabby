import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user in localStorage
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!token) {
      // Protect route: redirect to login if not logged in
      navigate('/login');
      return;
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from localStorage", e);
      }
    } else {
      // Fallback dummy user if just token exists but no user object
      setUser({
        name: "Valued Customer",
        email: "customer@example.com",
        phone: "Not provided",
        address: "Not provided"
      });
    }
  }, [navigate]);

  if (!user) return null; // or a loading spinner

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Profile Header */}
        <div className="bg-white rounded-t-3xl p-8 border-b border-slate-100 flex items-center gap-6 shadow-sm">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl font-bold shadow-inner">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{user.name || 'User'}</h1>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              {user.email || 'No email provided'}
            </p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-b-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Full Name</p>
              <p className="text-lg text-slate-800 font-medium">{user.name || 'Not provided'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
              <p className="text-lg text-slate-800 font-medium">{user.email || 'Not provided'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Phone Number</p>
              <p className="text-lg text-slate-800 font-medium">{user.phone || 'Not provided'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Delivery Address</p>
              <p className="text-lg text-slate-800 font-medium">{user.address || 'No default address saved'}</p>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
            <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Edit Profile
            </button>
            <button 
              onClick={() => navigate('/orders')} 
              className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
            >
              View My Orders
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
