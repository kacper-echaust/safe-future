import { motion } from "motion/react";

type Props = {
  image: string;
  title: string;
  id: number;
};

const Card = ({ image, title, id }: Props) => {
  const delayNumber = id * 0.2;

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: delayNumber, duration: 0.5, ease: "easeOut" },
      }}
      whileHover={{
        boxShadow: "0 16px 36px rgba(0, 0, 0, 0.18)",
        y: -10,
        transition: { duration: 0.2 }, // niezależne przejście na hover
      }}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="card-content">
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
};

export { Card };
