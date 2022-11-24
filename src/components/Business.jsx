import { features } from "../constants";
import styles, {layout} from "../style";
import Button from './Button';
import { connect } from '../assets';
import { Link } from 'react-router-dom';


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} hover:bg-darkbluenight bg-cardhover`}>
    <div className={`w-[72px] h-[72px] rounded-full ${styles.flexCenter} bg-businesscard`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhitenight text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <img src={connect} alt="connect" className="md:w-[50%] md:h-[50%] w-[60%] h-[60%] object-contain mb-4 md:mb-4 mt-4 md:mt-0" />
        <h2 className={styles.heading2}>
        My approach to providing<br className="sm:block hidden"/>UI/UX Design Services. 
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Specialized in creating beautiful and smooth UI/UX designs that provide better user experience by incorporating effective collaboration, streamlined projects which strive for better results.
        </p>
        <Link to="/HireMe">
          <Button styles="mt-5" />
        </Link>
        
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business
