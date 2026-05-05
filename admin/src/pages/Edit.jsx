import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = ({ token }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Diapers");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.post(backendUrl + '/api/product/single', { productId: id })
                if (response.data.success) {
                    const product = response.data.product
                    setName(product.name)
                    setDescription(product.description)
                    setPrice(product.price)
                    setCategory(product.category)
                    
                    if (product.image[0]) setImage1(product.image[0])
                    if (product.image[1]) setImage2(product.image[1])
                    if (product.image[2]) setImage3(product.image[2])
                    if (product.image[3]) setImage4(product.image[3])
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append("productId", id)
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)

            typeof image1 !== 'string' && image1 && formData.append("image1", image1)
            typeof image2 !== 'string' && image2 && formData.append("image2", image2)
            typeof image3 !== 'string' && image3 && formData.append("image3", image3)
            typeof image4 !== 'string' && image4 && formData.append("image4", image4)

            const response = await axios.post(backendUrl + "/api/product/update", formData, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/list')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    if (loading) return <div className="text-center py-10">Loading...</div>

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload new images (Optional)</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20 h-20 object-cover cursor-pointer' src={!image1 ? assets.upload_area : typeof image1 === 'string' ? image1 : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>

                    <label htmlFor="image2">
                        <img className='w-20 h-20 object-cover cursor-pointer' src={!image2 ? assets.upload_area : typeof image2 === 'string' ? image2 : URL.createObjectURL(image2)} alt="" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
                    </label>

                    <label htmlFor="image3">
                        <img className='w-20 h-20 object-cover cursor-pointer' src={!image3 ? assets.upload_area : typeof image3 === 'string' ? image3 : URL.createObjectURL(image3)} alt="" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
                    </label>

                    <label htmlFor="image4">
                        <img className='w-20 h-20 object-cover cursor-pointer' src={!image4 ? assets.upload_area : typeof image4 === 'string' ? image4 : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Product category</p>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
                        <option value="Diapers">Adult Diapers</option>
                        <option value="Pants">Diaper Pants</option>
                        <option value="Underpads">Underpads</option>
                        <option value="Wipes">Wipes</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='75' required />
                </div>
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 transition-all text-white font-bold rounded-xl shadow-sm cursor-pointer'>UPDATE</button>
        </form>
    )
}

export default Edit
