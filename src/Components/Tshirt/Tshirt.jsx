import React from 'react';
import './Tshirt.css'


const Tshirt = ({tshirt, handleToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;