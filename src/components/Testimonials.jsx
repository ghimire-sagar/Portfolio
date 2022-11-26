import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard' ;

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
        <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
          Clients views
        </h1>
        <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
            What my clients say abou my design and projects
          </p>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}

      </div>
    </section>
  )


export default Testimonials
