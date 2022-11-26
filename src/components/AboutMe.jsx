import styles from "../style";
import { Myprofile } from '../assets';
import Toolsused from "./Toolsused";
import { tools } from "../constants";
import Business from "./Business";
import GoToTop from './GoToTop';
import Resume from "./Resume";
import { Resumepdf } from '../assets'

const AboutMe = () => (
  <div>
    <div className="bg-primarynight w-full overflow-hidden ">
      <div className={`bg-primarynight ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY} lg:mt-20 mt-20`}>
              <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row justify-between items-center w-full">
                  <h1 className="flex-1 font-poppins font-medium uppercase ss:text-[32px] text-[20px] text-white ss:leading-[50px] leading-[30px]" data-aos="fade-right" data-aos-duration="1500" data-aos-delay='100'>
                    Hi, I'm<br/>
                    <span className="text-secondary ss:text-[40px] text-[26px] font-black">Sagar Ghimire</span> {" "}
                    <br />UI/UX Designer.
                  </h1>
                </div>
                <p className={`${styles.paragraph} lg:max-w-[650px] mt-5`}>During the last 2+ years as a design professional, I’ve been working with companies from various industries, helping them to build new services from the ground up, but also improve existing ones.
                <br />My core skills lie in the intersection of design and technology, meaning that I’m skilled in designing digital experiences with an iterative and data-driven approach, but I’m also comfortable coordinating with the development team to solve more technical problems as frontend developer.
                <br />I enjoy working on projects that have a positive impact on the surrounding society and the environment, in addition to the business in question. I am comfortable working on a range of projects from designing native apps to collaborating on set with a production crew.
                <br />If you think that I would be a great fit to your team as a UI/UX designer, feel free to contact me via email or LinkedIn, and let’s discuss more!
                <br />Or, if you’re a fellow designer, let’s connect on LinkedIn. I’m always looking for talented people to work on projects together and to learn more.
                </p>
                <div className="flex flex-row items-center py-[4px] mt-8">
                  <a href = {Resumepdf} target = "_blank">
                    <Resume />
                  </a>
              </div>
              </div>
  
              <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative lg:mr-16`}>
                <img  src={Myprofile} alt="website" className="lg:w-[100%] lg:h-[100%] w-[60%] h-[60%] relative z-[5]" data-aos="zoom-in" data-aos-duration="1500"/>
              </div>
            </section>
            <div className={`bg-backgroundnight`}>
              <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Business/>
                </div>
              </div>
            </div>
              <section id="tools" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
                <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
                  <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
                    Tools Used
                  </h1>
                  <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
                      Tools used for graphic, user interface and experience design
                    </p>
                </div>
                <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
                  {tools.map((card) => (
                    <Toolsused key={card.id} {...card} />
                  ))}
                </div>
              </section>
          </div>
        </div>
      </div>
      <GoToTop />
  </div>
  )

export default AboutMe
