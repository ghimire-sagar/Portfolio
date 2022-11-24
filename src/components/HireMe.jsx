import styles from "../style";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Map, ContactImage } from '../assets';
import GoToTop from './GoToTop';

const HireMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6e0yxw', 'template_zkurozm', form.current, 'cPbLvyW8RksdDxfFo')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="bg-primarynight w-full overflow-hidden ">
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`w-full lg:mt-14 mt-10 text-poppins`}>
            <img src={Map} alt="mapwebsite" className=" absolute w-full mt-6" />
            <h1 className="absolute lg:mt-32 md:mt-24 lg:left-32 mt-16 left-10 flex-1 font-poppins font-black uppercase lg:text-[52px] md:text-[48px] text-[24px] text-white ss:leading-[70px] leading-[50px]">
              Get In
              <span className="text-secondary">{" "}Touch</span> {" "}
            </h1>
          </div>
          <section id="hireme" className={`flex md:flex-row flex-col text-poppins`}>
            <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 lg:mt-64 md:mt-48 mt-28 rounded-[20px] mx-auto z-[10] bg-cardhover text-white">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold lg:mr-6 mr-4 leading-tight">Lets talk about Designs!</h2>
                  <div className="text-dimWhite mt-8 font-medium">
                    Want Designs? Send me an <span className="text-secondarynight font-bold">email</span> to get new and updated designs.
                  </div>
                  <img src={ContactImage} alt="contact" className=" w-[70%] h-[70%] mt-8 bg-containr items-center" />
                </div>
              </div>
              <div className="lg:mt-12 md:mt-6 mt-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <span className="uppercase text-sm text-dimWhite font-bold">Full Name</span>
                    <input className="w-full bg-transparent text-white mt-2 p-3 border-b border-dimWhite focus:outline-none focus:border-secondary"
                      type="text" placeholder="" name="user_name" />
                  </div>
                  <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input className="w-full bg-transparent text-white mt-2 p-3 border-b border-dimWhite focus:outline-none focus:border-secondary"
                      type="text" name="user_email" />
                  </div>
                  <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea className="w-full bg-transparent text-white mt-2 p-3 border-b border-dimWhite focus:outline-none focus:border-secondary" name="message"></textarea>
                  </div>
                  <div className="mt-12">
                    <button className="py-3 w-full bg-secondary hover:bg-darkbluenight font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]" type="submit" value="Send">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default HireMe;