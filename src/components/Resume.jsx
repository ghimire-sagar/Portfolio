import React from 'react'
import { download } from '../assets'
import styles from '../style'

const Resume = () => {
  return (
    <div className={`${styles.flexCenter} md:w-[270px] w-[240px] md:h-[50px] h-[40px] bg-secondary rounded-[10px] p-[20px] hover:bg-darkbluenight cursor-pointer`}>
    <div className={`${styles.flexCenter} flex flex-row`}>
    <div className={`${styles.flexStart} flex-row`}>
      <p className="font-poppins uppercase font-medium text-[20px] leading-[26px]">
      <span className="text-white">Download CV</span>
      </p>
      <img src={download} className="w-[24px] h-[24px] object-contain ml-4" />
    </div>
    </div>
  </div>
  )
}

export default Resume