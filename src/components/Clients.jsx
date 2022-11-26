import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
    <section className={`${styles.flexCenter} my-4 flex-col mt-10`}>
      <div className="w-full flex-1 justify-between items-center text-center flex-row sm:mb-10 mb-3 relative z-[1]">
        <h1 className={styles.heading2} data-aos="fade-down" data-aos-duration="1000">
          Some Client's
        </h1>
        <p className={`${styles.paragraph} text-center`} data-aos="fade-up" data-aos-delay='200' data-aos-duration="1500">
            Here are some clients I previously worked for
          </p>
      </div>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mt-10 mb-10`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients
