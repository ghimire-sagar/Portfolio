import styles from "../style";
import { Homepageimage } from '../assets';
import GetStarted from "./GetStarted";
import { Link } from 'react-router-dom';

const Hero = () => (
          <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY} lg:mt-8 mt-16`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-black uppercase ss:text-[52px] text-[36px] text-white ss:leading-[70px] leading-[50px]" data-aos="fade-right" data-aos-duration="1500" data-aos-delay='100'>
                  Boosting Your<br className="sm:block hidden"/> {" "} 
                  <span className="text-secondary">Brands and<br className="sm:block hidden"/>{" "}Products</span> {" "}
                  <br /><span >With Web and App Design.</span>
                </h1>
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`} data-aos="fade-right" data-aos-delay='200' data-aos-duration="1500">A passionate UI/UX designer with the goal to create delightful experience and drive business impact.</p>
              <div className="flex flex-row items-center py-[4px] mt-8">
                  <Link to="/HireMe">
                    <GetStarted />
                  </Link>
              </div>
            </div>
            <img  src={Homepageimage} alt="mainimage" className="lg:w-[50%] lg:h-[50%] w-[100%] h-[100%] z-[5] lg:mt-0 lg:mr-20 mt-10" data-aos="zoom-in" data-aos-duration="1500"/>
          </section>
  )

export default Hero
