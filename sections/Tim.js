import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { teamdata1, teamdata2 } from '@/assets/data/dummydata'; 
import { Card } from '@/components/common/Card';
import { TitleSm, TitleLogo } from '@/components/common/Title';

const Team = () => {
  const [bagiancs, inView1] = useInView({triggerOnce: true}); 
  const [bagianbd, inView2] = useInView({triggerOnce: true}); 

  const [inView, ref] = useInView({ triggerOnce: true });
  const motionRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0); 

  const motionVariantsA = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const motionVariantsB = {
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
      <section className='agency bg-top' ref={bagiancs}>
        <div className='container'>
          <div className='heading-title'>

            <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsB}
              ref={motionRef}
            >
            <TitleSm title='TEMUI TIM KEAMANAN SIBER KAMI' /> <br />
            <br />
            <TitleLogo caption="Sebuah tim kreatif yang cerdas & bersemangat" className="title-bg" />
          </motion.div>
          </div>
          
          <motion.div
           initial='hidden'
           animate={inView ? 'visible' : 'hidden'}
           variants={motionVariantsA}
           ref={motionRef}
           className='grid-5 py'
         >
            {teamdata1.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className='agency bg-top' ref={bagianbd}>
        <div className='container'>
          <div className='heading-title'>

          <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsB}
              ref={motionRef}
            >
            <TitleSm title='MEET OUR BIG DATA TEAM' />
            <br />
            <br />
            <TitleLogo caption='Tim lain yang terdiri dari individu-individu berbakat' className='title-bg' />
           </motion.div>
           </div>

            <motion.div
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              variants={motionVariantsA}
              ref={motionRef}
              className='grid-5 py'
            >
          
            {teamdata2.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Team;
