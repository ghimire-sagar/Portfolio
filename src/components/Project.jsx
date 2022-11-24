import {Dexit} from '../assets';
import styles, {layout} from '../style';
import Button2 from './Button2';

const Project = () =>  (
    <section id='project' className={`${layout.sectionReverse} sm:mb-10 mb-3`}>
      <div className={layout.sectionImgReverse}>
        <img src={Dexit} alt="Dexit Network" className="w-[100%] h-[100%] relative z-[5] rounded-[20px]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Dexit Blockchain Website</h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        DeXit Chain is an Ethereum EVM 100% compatible blockchain, it is designed for decentralized application (Dapp) development within many possible verticals including DeFi, NFT, Gaming, and many others.
        </p>
          <Button2 styles="mt-5" />
      </div>
    </section>
  )

export default Project
