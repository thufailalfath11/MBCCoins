import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { TitleLogo, TitleSm } from "@/components/common/Title";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import styles from "../styles/Styles.module.css"
import Link from "next/link"
import { BsLine } from "react-icons/bs"

const Contact = () => {
  const [inView, ref] = useInView({ triggerOnce: true });
  const motionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0); 

  const motionVariantsA = {
    hidden: { opacity: 0, z: -100 },
    visible: { opacity: 1, z: 0, transition: { duration: 3 } },
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsA}
              ref={motionRef}
            >
            <TitleSm title='KONTAK' /> <br />
            <br />
            <TitleLogo caption="Mari mulai bersama kami sekarang!" className='title-bg' />
            </motion.div>
          </div>

          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='Detail Kontak'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Hubungi Kami: Senin -  Jum'at 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Bandung Indonesia</h3>
                  <span>Telkom University, TULT, Lantai 13.04, MBC Laboratorium</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@dream-theme.com</h3>
                  <span>Hubungi kami kapan saja!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@dream-theme.com</h3>
                  <span>
                    Karier di MBCcoins</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=sok8073r'>
                    <BsLine size={25} />
                  </Link>
                </li>
                <li className='icon'>
                  <Link href='https://github.com/thufailalfath11/MBCcoins_Website.git'>
                    <AiFillGithub size={25} />
                  </Link>
                </li>
                <li className='icon'>
                <Link href='https://www.instagram.com/mbclab/?hl=id'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className='icon'>
                <Link href=' https://www.linkedin.com/company/mbclaboratory/?hl=id'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
         <iframe
                title="Google Map"
                className={styles.map}
                width="100%"
                height="800"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339012673631!2d107.62596047211815!3d-6.96927299303129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sen!2sid!4v1689878358905!5m2!1sen!2sid" 
                aria-label="Embedded Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
