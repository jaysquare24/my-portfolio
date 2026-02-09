import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { services } from "../../data/services";
import { ServiceCard } from "../common/ServiceCard";

export const Services = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  
  const index = useTransform(
    scrollYProgress,
    [0, 1],
    [0, services.length - 1]
  );

  
  useMotionValueEvent(index, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  return (
    <section
      ref={sectionRef}
      style={{ height: `${services.length * 100}vh` }}
      id="services"
      className="services-section"
    >

      <div className="container sticky-wrapper" id="services-container">

        <div className="services-bg">
        <div className="  service-track">
          {services.map((service, i) => (
            <div key={i} className="service-bg-item-container">
            
              <p className="service-bg-text">{service.title}</p>
              <img
                src="/resources/style-icon1.svg"
                alt=""
                className="service-bg-icon"
              />
            </div>
            
          ))}
        </div>
     </div>
        <div className="services-header">
          <p className="services-title" ><span>Services</span></p>
          <motion.p 
          className="services-description"
          initial={{opacity:0, x:-40}}
          whileInView={{x:0, opacity:1}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          > 
            What I do
          </motion.p>
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex}>
              <ServiceCard {...services[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

