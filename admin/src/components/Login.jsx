import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)

            }




        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-xl rounded-xl px-8 py-8 max-w-md border border-slate-100'>
                <h1 className='text-3xl font-black mb-6 text-slate-900'>Admin <span className="text-[var(--color-primary)]">Panel</span></h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-[var(--color-primary)]' type="email" placeholder='your@email.com' required />
                    </div>
                    <div>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:border-[var(--color-primary)]' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className='mt-4 w-full py-2 px-4 rounded-full font-bold transition-colors shadow-md text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90' type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
