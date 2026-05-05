import { createContext, useState, useEffect, } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'



export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId, size, subscription) => {
        let cartData = structuredClone(cartItems);

        // variantKey format: "Large_1 Month"
        const variantKey = `${size}_${subscription}`;

        if (cartData[itemId]) {
            if (cartData[itemId][variantKey]) {
                cartData[itemId][variantKey] += 1;
            } else {
                cartData[itemId][variantKey] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][variantKey] = 1;
        }

        setCartItems(cartData);
        toast.success('Added to Cart')

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, variantKey }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const variantKey in cartItems[itemId]) {
                if (cartItems[itemId][variantKey] > 0) {
                    totalCount += cartItems[itemId][variantKey];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, variantKey, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][variantKey] = quantity;

        setCartItems(cartData)

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, variantKey, quantity }, { headers: { token } })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let product = products.find((product) => product._id === itemId);
            if (!product) continue;
            
            for (const variantKey in cartItems[itemId]) {
                const quantity = cartItems[itemId][variantKey];
                if (quantity > 0) {
                    // Extract subscription to calculate discount
                    const subscription = variantKey.split('_')[1];
                    let discountMultiplier = 1;
                    if (subscription === '1 Month') discountMultiplier = 0.90;
                    else if (subscription === '3 Months') discountMultiplier = 0.85;
                    else if (subscription === '6 Months') discountMultiplier = 0.80;
                    
                    const discountedPrice = product.price * discountMultiplier;
                    totalAmount += discountedPrice * quantity;
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/product/list')
            if(response.data.success){
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async ( token ) => {
        try {

            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
                
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }

    }


    useEffect(()=>{
        getProductsData()

    },[])

    useEffect(()=>{
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))       
        }

    },[])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        addToCart, cartItems,setCartItems,
        getCartCount,updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken,token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
