import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { TitleLogo, TitleSm } from "@/components/common/Title";

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
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={motionVariants}
              ref={motionRef}
            />
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
              bentuk pembayaran yang dibuat menggunakan algoritma enkripsi.
              Penggunaan teknologi enkripsi berarti cryptocurrency berfungsi
              keduanya sebagai mata uang dan sebagai sistem akuntansi virtual.
              Menggunakan cryptocurrency, Anda memerlukan dompet cryptocurrency.
            </p>
          </div>
          <div className="container">
        <div className="heading-title">
        <Link href="/coinpage">
      <button className="button-coin">
        <span>Mari Menjelajahi dunia</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L12.293 8 6.646 2.354a.5.5 0 0 1 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M1.5 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
