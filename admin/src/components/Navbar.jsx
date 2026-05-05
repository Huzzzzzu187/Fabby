import React from 'react'
import { assets } from '../assets/assets'


const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between border-b border-slate-200 bg-white'>
      <div className="text-4xl font-extrabold tracking-tight text-slate-900">Fabby<span className="text-xl font-bold text-[var(--color-primary)] ml-2 tracking-normal">Admin</span></div>
      <button onClick={() => setToken('')} className='bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 transition-colors text-white px-5 py-2 sm:px-7 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer shadow-sm'>Logout</button>

    </div>
  )
}

export default Navbar
