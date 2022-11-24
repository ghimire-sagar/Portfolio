import styles from "./style";
import Button from "./components/Button";
import { Link } from 'react-router-dom';

const CTA = () => (
  <div className={`bg-primarynight`}>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-cardhover rounded-[20px]`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>
            Design and Innovate with me!
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-2`}>
            Design and Redesign your products to increase your customers.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-8`}>
          <Link to="/HireMe">
            <Button />
          </Link>
        </div>
      </section>
      </div>
    </div>
  </div>
  )

export default CTA
