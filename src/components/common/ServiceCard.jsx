import { motion } from "framer-motion";

 export const ServiceCard = ({ title, items }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="service-icon">{"</>"}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}> <span></span><p>{item}</p></li>
        ))}
      </ul>
      <h4 className="service-card-title">{title}</h4>
    </motion.div>
  );
};
