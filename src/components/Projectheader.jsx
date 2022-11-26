import styles from "../style";

const Projectheader = () => (
    <section id="social" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-full flex-1 justify-between items-center text-center flex-row relative z-[1]">
        <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
          Some Projects
        </h1>
        <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
            Some of the major design projects that are implemented
          </p>
      </div>
    </section>
  )


export default Projectheader