import React from 'react'

const Button = ({ styles }) => {
  return (
    <div>
      <button type='button' className={`py-3 px-10 bg-secondary hover:bg-darkbluenight font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
        Get in touch
      </button>
    </div>
  )
}

export default Button
