import React from 'react';
import './itemcard.css';

function ItemCard() {
  return (
    <div className='product-container'>
      <div className='product-section'>
        <img className='card' src='/images/Rectangle 53.png' alt='Wine bar' />
        <p className='product-title'>Product Name</p>
        <p className='product-price'>Price</p>
        <button className='product-btn'>Add to Cart</button>
      </div>
      <div className='product-section'>
        <img className='card' src='/images/Rectangle 55.png' alt='Wine bar' />
        <p className='product-title'>Product Name</p>
        <p className='product-price'>Price</p>
        <button className='product-btn'>Add to Cart</button>
      </div>
      <div className='product-section'>
        <img className='card' src='/images/Rectangle 54.png' alt='Wine bar' />
        <p className='product-title'>Product Name</p>
        <p className='product-price'>Price</p>
        <button className='product-btn'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemCard;
