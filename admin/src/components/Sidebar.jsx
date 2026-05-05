import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2 bg-white'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

                <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l-xl transition-colors hover:bg-slate-50 font-medium'} to="/add">
                    <img className='w-5 h-5' src={assets.add_icon} alt="" />
                    <p className='hidden md:block text-slate-800'>Add Items</p>
                </NavLink>

                <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l-xl transition-colors hover:bg-slate-50 font-medium'} to="/list">
                    <img className='w-5 h-5' src={assets.order_icon} alt="" />
                    <p className='hidden md:block text-slate-800'>List Items</p>
                </NavLink>

                <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l-xl transition-colors hover:bg-slate-50 font-medium'} to="/orders">
                    <img className='w-5 h-5' src={assets.order_icon} alt="" />
                    <p className='hidden md:block text-slate-800'>Orders</p>
                </NavLink>

                <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-3 rounded-l-xl transition-colors hover:bg-slate-50 font-medium'} to="/bulk-orders">
                    <img className='w-5 h-5' src={assets.order_icon} alt="" />
                    <p className='hidden md:block text-slate-800'>Bulk Orders</p>
                </NavLink>


            </div>


        </div>
    )
}

export default Sidebar
