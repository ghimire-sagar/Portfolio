import React from 'react'
import { work2top, work2mid1, work2mid2, work2bottom } from '../assets'
import styles from '../style';

const Searchstudy = () => (
  <div className="bg-primarynight w-full overflow-hidden ">
    <div className={`bg-primarynight ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <img src={work2top} alt="searchstudy" className="w-[100%]" />
        <img src={work2mid1} alt="searchstudy" className="w-[100%]" />
        <img src={work2mid2} alt="searchstudy" className="w-[100%]" />
        <img src={work2bottom} alt="searchstudy" className="w-[100%]" />
      </div>
    </div>
  </div>
  )

export default Searchstudy
