import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const BulkOrders = ({token}) => {
  const [orders, setOrders] = useState([])

  const fetchBulkOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(backendUrl + '/api/bulkorder/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.bulkOrders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/bulkorder/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchBulkOrders()
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchBulkOrders();
  }, [token])

  return (
    <div>
      <h3>Bulk Order Inquiries</h3>
      <div>
        {orders.map((order, index) => (
          <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_2fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
            <img className='w-12' src={assets.order_icon} alt="" />
            <div>
              <p className='mt-0 font-bold text-base text-slate-800'>{order.organizationName}</p>
              <p className='mb-2 font-medium text-slate-600'>Type: {order.organizationType}</p>
              
              <div className='mt-3 mb-2 font-medium bg-slate-50 p-2 rounded'>
                <p className='font-bold text-slate-800 mb-1'>Requirements:</p>
                <p className='text-slate-600'>{order.requirements}</p>
              </div>

              <div className='mt-3'>
                <p className='font-bold text-slate-800'>Contact Person:</p>
                <p>{order.fullName}</p>
                <p>{order.phone}</p>
                <p>{order.email}</p>
              </div>
            </div>
            
            <div>
              <p className='text-sm sm:text-[15px]'>Quantity : {order.quantity}</p>
              <p className='mt-3'>Location : {order.location}</p>
              <p className='mt-3'>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-2 font-semibold border rounded bg-white mt-4 sm:mt-0'>
              <option value="Pending">Pending</option>
              <option value="Contacted">Contacted</option>
              <option value="Completed">Completed</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BulkOrders
