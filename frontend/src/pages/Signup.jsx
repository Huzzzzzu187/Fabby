import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Signup = () => {
  const { setToken, navigate, backendUrl, token } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: '',
    gender: '',
    address: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      // Assuming backend accepts these fields. Using the existing /api/user/register
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender,
        address: formData.address
      };

      const response = await axios.post(backendUrl + '/api/user/register', payload);
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        
        // Also set user in local storage as requested
        const userObj = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        };
        localStorage.setItem('user', JSON.stringify(userObj));
        
        toast.success("Account created successfully!");
        navigate('/');
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem('user', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
      
      // In a real app, you would also sync this Google user with your backend to get a proper token.
      // For now, setting dummy token to pass context checks
      const dummyToken = await user.getIdToken();
      setToken(dummyToken);
      localStorage.setItem('token', dummyToken);
      
      toast.success("Signed up with Google successfully!");
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error("Google Signup failed: " + error.message);
    }
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center py-10 px-4'>
      <div className='bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 w-full max-w-lg'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-extrabold text-slate-900'>Create Account</h2>
          <p className='text-slate-500 mt-2'>Join Fabby to access premium healthcare products</p>
        </div>

        <form onSubmit={handleSignup} className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='John Doe' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='john@example.com' />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='relative'>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Password *</label>
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required minLength="6" className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='••••••••' />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-9 text-slate-400 hover:text-slate-600'>
                <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Confirm Password *</label>
              <input type={showPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength="6" className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='••••••••' />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='+1 234 567 890' />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-600' />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-slate-600 bg-white'>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1'>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className='w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' placeholder='123 Main St, City' />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span> : ''}
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className='mt-6 flex items-center justify-between'>
          <hr className='w-full border-slate-200' />
          <span className='px-3 text-sm text-slate-400 font-medium'>OR</span>
          <hr className='w-full border-slate-200' />
        </div>

        <button 
          onClick={handleGoogleSignup}
          className='w-full mt-6 py-3 px-4 border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors text-slate-700 font-medium'
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className='w-5 h-5' />
          Continue with Google
        </button>

        <p className='mt-8 text-center text-sm text-slate-500'>
          Already have an account? <Link to="/login" className='text-blue-600 font-bold hover:underline'>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
