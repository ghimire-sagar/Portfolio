import { myworks } from "../constants";
import styles from "../style";
import WorkCard from './WorkCard' ;

const MyWorks = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
        <h1 className={styles.heading2}>
          My Works
        </h1>
        <p className={`${styles.paragraph} text-center`}>
            My major works and projects done for clients
          </p>
      </div>
      <div className="flex flex-wrap justify-center w-full relative z-[1]">
        {myworks.map((card) => (
          <WorkCard key={card.id} {...card} />
        ))}

      </div>
    </section>
  )


export default MyWorks