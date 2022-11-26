import React from 'react'
import { work3top, work3mid, work3bottom } from '../assets';
import styles from '../style';

const Linkup = () => (
  <div className="bg-primarynight w-full overflow-hidden ">
    <div className={`bg-primarynight ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <img src={work3top} alt="linkupimage" className="w-[100%]" />
        <img src={work3mid} alt="linkupimage" className="w-[100%]" />
        <img src={work3bottom} alt="linkupimage" className="w-[100%]" />
      </div>
    </div>
  </div>
  )

export default Linkup