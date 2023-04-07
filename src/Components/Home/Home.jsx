import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

const handleToCart = tshirt => {
    // console.log(tshirt);
    const exists = cart.find(ts => ts._id === tshirt._id);
    if(exists){
     toast('you have already added this');
    }
    else{
        const newCart =  [...cart, tshirt];
        setCart(newCart);
    }
}

const handleRemoveFromCart = id => {
    // console.log(id);
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
}

    return (
        <div className='home-container'>
            <div className='tshirts-container'>
            {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleToCart={handleToCart}
                ></Tshirt>)
            }
            </div>
            <div className='cart-container'>
             <Cart cart={cart}
             handleRemoveFromCart={handleRemoveFromCart}
             ></Cart>
            </div>
        </div>
    );
};

export default Home;