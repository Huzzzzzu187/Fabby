import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import About from './pages/About'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import BulkOrders from './pages/BulkOrders'
import Footer from './components/Footer';
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-background-light'>
      <ToastContainer /> {/* To display toast notifications */}
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/education' element={<Education />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/bulk-orders' element={<BulkOrders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />

    </div>
  )
}

export default App
