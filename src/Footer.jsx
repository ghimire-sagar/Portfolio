import styles from "./style";
import { logo } from "./assets";
import { footerLinks, socialMedia } from "./constants";

const Footer = () => (
  <div className={`bg-backgroundnight`}>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
          <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex flex-col justify-start mr-10">
              <img src={logo} alt="sagar designs" className="w-[266px] h-[72px] object-contain"/>
              <p className={`${styles.paragraph} mt-4 max-w-[380px]`}>I create fresh and thoughtful designs to make life a little more delightful.</p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {footerLinks.map((footerlink) => (
                <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                    {footerlink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerlink.links.map((link, index) => (
                      <a href={link.link} rel="noreferrer">
                      <li key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhitenight hover:text-white cursor-pointer ${index !== footerlink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                        {link.name}
                      </li>
                      </a>
                    ))}
                  </ul>
                </div> 
              ))}

            </div>
          </div>
          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#d1d1d1]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
              2022 Sagar Designs. All rights reserved.
            </p>
            <div className="flex flex-row md:mt-0 mt-6">
              {socialMedia.map((social, index, link) =>(
                <img
                link={link}
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[24px] h-[24px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  )

export default Footer
