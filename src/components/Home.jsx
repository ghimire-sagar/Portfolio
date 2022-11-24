import styles from '../style';
import GoToTop from './GoToTop';
import {Project, Project2, Business, Clients, CTA, Stats, Testimonials, Hero, MyWorks, Social, Button3} from '.';
import { Link } from 'react-router-dom';
import Projectheader from './Projectheader';


const Home = () => (
    <div className="bg-primarynight w-full overflow-hidden ">
      <div className={`bg-primarynight ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-backgroundnight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
          </div>
        </div>
      </div>
      <div className={`bg-primarynight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <MyWorks />
            <div className={`w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]`}>
            <Link to="/WorksLists">
              <Button3 />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-backgroundnight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Business/>
          </div>
        </div>
      </div>
      <div className={`bg-primarynight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Testimonials />
          </div>
        </div>
      </div>
      <div className={`bg-backgroundnight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Projectheader />
            <Project />
            <Project2 />
          </div>
        </div>
      </div>
      <div className={`bg-primarynight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Clients />
          </div>
        </div>
      </div>
      <div className={`bg-backgroundnight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Social />
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );

export default Home