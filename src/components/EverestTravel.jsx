import React from 'react'
import { work5top, work5mid, work5bottom } from '../assets';
import styles from '../style';

const EverestTravel = () => (
  <div className="bg-primarynight w-full overflow-hidden ">
    <div className={`bg-primarynight ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <img src={work5top} alt="Everest" className="w-[100%]" />
        <img src={work5mid} alt="Everest" className="w-[100%]" />
        <img src={work5bottom} alt="Everest" className="w-[100%]" />
      </div>
    </div>
  </div>
  )

export default EverestTravel
