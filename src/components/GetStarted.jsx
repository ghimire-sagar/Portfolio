import styles from "../style";
import { arrowRight } from '../assets';


const GetStarted = () => (
      <div className={`${styles.flexCenter} md:w-[270px] w-[240px] md:h-[50px] h-[40px] bg-secondary rounded-[10px] p-[20px] hover:bg-darkbluenight cursor-pointer`}>
        <div className={`${styles.flexCenter} flex flex-row`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins uppercase font-medium text-[20px] leading-[26px]">
          <span className="text-white">Hire Me !</span>
          </p>
          <img src={arrowRight} className="w-[24px] h-[24px] object-contain ml-4" />
        </div>
        </div>
      </div>
  )

export default GetStarted
