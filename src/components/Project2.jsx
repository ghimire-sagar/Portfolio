import {Hamrodokaan} from '../assets';
import styles, {layout} from '../style';
import Button4 from './Button4';

const Project2 = () => {
  return (
    <section id="project2" className={`${layout.section2} sm:mb-10 mb-3`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Hamrodokaan e-commerce</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        AGS Mart Nepal Pvt.Ltd. Nepal is a company established in early 2022 with its head office in Lalitpur ward no 3. A team of e-commerce specialists founded this company to access manufactured goods to ordinary people without needing extra hassle regardless of where the customer lies, Urban or Rural.
        </p>
          <Button4 styles="mt-5" />
    </div>
    <div className={layout.sectionImg}>
      <img src={Hamrodokaan} alt="Hamrodokaan" className='w-[100%] h-[100%] rounded-[20px]' />
    </div>
  </section>
  )
}

export default Project2
