import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Coins from "@/components/Coins";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React, { useRef } from "react";

const Hero = () => {
  const [inView, ref] = useInView({ triggerOnce: true });
  const motionRef = useRef(null);

  const motionVariants = {
    hidden: { opacity: 0, z: -100 },
    visible: {
      opacity: 1,
      z: 0,
      transition: { type: "spring", stiffness: "10" },
    },
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo caption="Coins" title="MBC" className="logobg" />
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={motionVariants}
            ref={motionRef}
          >
            <h1 className="hero-title">CRYPTOCURRENCY</h1>
          </motion.div>
          <div className="sub-heading">
            {/* <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={motionVariants}
              ref={motionRef}
            > */}
            <TitleSm title="Multimedia" /> <span>.</span>
            <TitleSm title="Big Data" /> <span>.</span>
            <TitleSm title="Cybersecurity" />
            {/* </motion.div> */}
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <TitleLogo caption="Agensi digital terakhir yang Anda perlukan" />
            <p>
              Cryptocurrency adalah mata uang digital yang merupakan alternatif
              bentuk pembayaran yang dibuat menggunakan algoritma enkripsi. Penggunaan
              teknologi enkripsi berarti cryptocurrency berfungsi keduanya
              sebagai mata uang dan sebagai sistem akuntansi virtual. Menggunakan
              cryptocurrency, Anda memerlukan dompet cryptocurrency.
            </p>
          </div>
          {/* <Coins />
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))} */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
