import { motion } from "framer-motion";

const tags = [
  "Educational Website",
  "Real Estate Website",
  "Consultancy Website",
  "Automotive Website",
  "Health & Wellness Website",
  "Blog",
  "Restaurant & Food Website",
  "Charity & Nonprofit Website",
  "Technology & Gadgets Website",
  "Music & Entertainment Website",
  "Portfolio Website",
  "E-commerce Website",
  "Event Website",
  "Travel & Tourism Website",
  "Personal Website",
  "Business Website",
  "Online Booking Website",
  "Medical or Clinic Website",
  "And Many More"
];

const getRandomRotation = () => Math.floor(Math.random() * 20 - 10); // -10 to +10 degrees

export function FallingText() {
  return (
    <section className="tag-section">
      <div className="tag-container">
        {tags.map((tag, i) => (
          <motion.div
            key={tag}
            className="tag"
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                rotate: getRandomRotation(),
            }}
            whileHover={{
                scale: 1.05,
                y: -5,
                rotate: getRandomRotation(), // optional: adds randomness on hover
            }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 12,
                delay: (tags.length - i) * 0.07,
            }}
            viewport={{ once: true }}
            >
            {tag}
            </motion.div>
        ))}
      </div>
    </section>
  );
}
