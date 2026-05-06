import { motion } from 'framer-motion'

const FloatingTriangle = ({ className = "", ...props }) => (
    <motion.div
      className={`absolute pointer-events-none opacity-10 ${className}`}
      animate={{
        y: [0, 20, 0],
        rotate: [0, -5, 5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
      {...props}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
        <polygon points="50,10 90,90 10,90" />
      </svg>
    </motion.div>
  )

  export default FloatingTriangle;