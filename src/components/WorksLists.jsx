import { myworks } from "../constants";
import styles from "../style";
import WorkCard from './WorkCard' ;
import GoToTop from './GoToTop';

const WorksLists = () => (
  <div className={`bg-primarynight`}>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section id="Allworks" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
              <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
                <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
                  All Works
                </h1>
                <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
                    All of the design works which I had done are below
                  </p>
              </div>
              <div className="flex flex-wrap justify-center w-full relative z-[1]">
                {myworks.map((card) => (
                  <WorkCard key={card.id} {...card} />
                ))}

              </div>
            </section>
          </div>
        </div>
        <GoToTop />
      </div>
  )


export default WorksLists
