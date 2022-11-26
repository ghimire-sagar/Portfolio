import { social } from "../constants";
import styles from "../style";
import SocialCard from './SocialCard' ;

const Social = () => (
    <section id="social" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
        <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
          Social Links
        </h1>
        <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
            You can reach me in all of the social platforms for any designs
          </p>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {social.map((card) => (
          <SocialCard key={card.id} {...card} />
        ))}

      </div>
    </section>
  )


export default Social
