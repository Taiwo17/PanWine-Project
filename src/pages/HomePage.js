import React from 'react';
import Input from '../components/Input';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import './homepage.css';

function HomePage() {
  return (
    <>
      <Navbar />
      <header className='header'>
        <h1 className='title-caption'>
          Tastefulness & Elegance of a Best Wine
        </h1>
        <p className='caption'>
          Browse our collection to find that delectable taste you desire
        </p>
        <button>Explore Products</button>
      </header>
      <div className='section'>
        <Input />
        <div className='title-product'>
          <h2>Products</h2>
        </div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className='view-more'>
          <Link>
            <p className='more'>
              View More{' '}
              <span>
                <svg
                  width='10'
                  height='18'
                  viewBox='0 0 10 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 17L9 9L1 0.999998'
                    fill='#411530'
                    fill-opacity='0.6'
                  />
                  <path
                    d='M1 17L9 9L1 0.999998'
                    stroke='#4169E1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </p>
          </Link>
        </div>
      </div>
      <footer>
        <div className='footer-container'>
          <div className='footer-title'>
            <h2 className='footer-heading'>PanWines</h2>
            <p className='text-content'>
              Get the Tastefulness & Elegance of a Best Wine
            </p>
          </div>
          <div className='footer-section-two'>
            <div className='footer-section-container'>
              <div className='container'>
                <div className='homepage'>
                  <p className='text'>Homepage</p>
                  <p className='homepage-text'>Home</p>
                  <p className='homepage-text'>Authentication</p>
                  <p className='homepage-text'>Product</p>
                  <p className='homepage-text'>Shopping</p>
                </div>

                <div className='contact-us-footer'>
                  <p className='text'>Contact Us</p>
                  <p className='contact-us'>Panwine@gmail.com</p>
                  <p className='contact-us'>www.PanWine.com</p>
                  <p className='contact-us'>+2347069261648</p>
                </div>
              </div>

              <div className='footer-btn'>
                <button>Explore Products</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
