import './input.css';

function Input() {
  return (
    <div className='input-container'>
      <div className='input-one'>
        <input type='text' placeholder='Search Names' name='' id='' />
        <button>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>
      <div className='input-section-two'>
        <input type='text' name='' placeholder='Search Categories' id='' />

        <button>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Input;
