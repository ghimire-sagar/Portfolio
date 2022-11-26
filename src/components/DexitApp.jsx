import React from 'react'
import { work4top, work4mid, work4bottom } from '../assets';
import styles from '../style';

const DexitApp = () => (
  <div className="bg-primarynight w-full overflow-hidden ">
    <div className={`bg-primarynight ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <img src={work4top} alt="Dexit app" className="w-[100%]" />
        <img src={work4mid} alt="Dexit app" className="w-[100%]" />
        <img src={work4bottom} alt="Dexit app" className="w-[100%]" />
      </div>
    </div>
  </div>
  )

export default DexitApp