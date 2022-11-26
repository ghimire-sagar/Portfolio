import React from 'react'
import { work1top, work1mid1, work1mid2, work1bottom } from '../assets';
import styles from '../style';

const Kinbech = () => (
        <div className="bg-primarynight w-full overflow-hidden ">
          <div className={`bg-primarynight ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <img src={work1top} alt="Kinbechimage" className="max-w-full h-auto" />
              <img src={work1mid1} alt="Kinbechimage" className="max-w-full h-auto" />
              <img src={work1mid2} alt="Kinbechimage" className="max-w-full h-auto" />
              <img src={work1bottom} alt="Kinbechimage" className="max-w-full h-auto" />
            </div>
          </div>
        </div>

  )

export default Kinbech
