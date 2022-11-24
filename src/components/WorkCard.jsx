import { Link } from 'react-router-dom';
import React from 'react'

const WorkCard = ({ img, link }) => (
    <div className='flex justify-between flex-col max-w-[580px] mx-5 my-5 hover:bg-[#F2F2FF] bg-dimback'>
      <div className='flex flex-row'>
      <Link to={link}>
        <img src={img} alt={name} className="lg:w-[410px] lg:h-[410px] md:w-[310px] md:h-[310px] w-[270px] h-[270px]" />
        </Link>
      </div>
    </div>    
  )

export default WorkCard