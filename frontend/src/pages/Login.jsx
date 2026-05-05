import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const { setToken, navigate, token } = useContext(ShopContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('/api/user/login', { email, password });
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        
        // Mock user details since simple login might not return all user details
        // In real world, user object would come from response.data.user
        const userObj = response.data.user || {
          email: email,
          name: "User"
        };
        localStorage.setItem('user', JSON.stringify(userObj));
        
        toast.success("Logged in successfully!");
        navigate('/');
      } else {
        toast.error(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem('user', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
      
      // Setting dummy token for context
      const dummyToken = await user.getIdToken();
      setToken(dummyToken);
      localStorage.setItem('token', dummyToken);
      
      toast.success("Logged in with Google successfully!");
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error("Google Login failed: " + error.message);
    }
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center py-10 px-4'>
      <div className='bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-extrabold text-slate-900'>Welcome Back</h2>
          <p className='text-slate-500 mt-2'>Sign in to your Fabby account</p>
        </div>

        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-1'>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className='w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' 
              placeholder='john@example.com' 
            />
          </div>

          <div className='relative'>
            <label className='block text-sm font-medium text-slate-700 mb-1'>Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className='w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition' 
              placeholder='••••••••' 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className='absolute right-4 top-10 text-slate-400 hover:text-slate-600'
            >
              <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>

          <div className='flex justify-end'>
            <span className='text-sm text-blue-600 font-medium hover:underline cursor-pointer'>
              Forgot Password?
            </span>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3.5 mt-2 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span> : ''}
            {isLoading ? 'Signing In...' : 'Login'}
          </button>
        </form>

        <div className='mt-8 flex items-center justify-between'>
          <hr className='w-full border-slate-200' />
          <span className='px-4 text-sm text-slate-400 font-medium'>OR</span>
          <hr className='w-full border-slate-200' />
        </div>

        <button 
          onClick={handleGoogleLogin}
          className='w-full mt-6 py-3.5 px-4 border border-slate-200 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors text-slate-700 font-medium'
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className='w-5 h-5' />
          Continue with Google
        </button>

        <p className='mt-8 text-center text-sm text-slate-500'>
          Don't have an account? <Link to="/signup" className='text-blue-600 font-bold hover:underline'>Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
