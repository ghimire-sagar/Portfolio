import React from 'react'

const Button2 = ({ styles }) => {
  return (
    <div>
      <button type='button' className={`font-poppins font-normal text-[18px] text-dimWhitenight hover:text-white outline-none underline underline-offset-4 hover:underline-offset-8 ${styles}`}>
        <a href="https://dexit.network/">Visit Website</a>
      </button>
    </div>
  )
}

export default Button2
