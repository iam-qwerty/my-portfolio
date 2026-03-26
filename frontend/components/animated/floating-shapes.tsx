
"use client";
import { motion } from "framer-motion";

const FloatingShape = ({ className = "", ...props }) => (
  <motion.div
    className={`absolute pointer-events-none opacity-10 ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    {...props}
  >
    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="40" />
    </svg>
  </motion.div>
);

export default FloatingShape;



// import { motion } from 'framer-motion';

// interface FloatingShapeProps {
//   className?: string;
// }

// export const FloatingShape: React.FC<FloatingShapeProps> = ({ className = "", ...props }) => (
//   <motion.div
//     className={`absolute pointer-events-none opacity-10 ${className}`}
//     animate={{
//       y: [0, -20, 0],
//       rotate: [0, 5, -5, 0],
//     }}
//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "linear"
//     }}
//     {...props}
//   >
//     <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
//       <circle cx="50" cy="50" r="40" />
//     </svg>
//   </motion.div>
// );









// import { motion } from 'framer-motion';

// export const FloatingShape = ({ className = "" }: { className?: string }) => (
//   <motion.div
//     className={`absolute pointer-events-none opacity-10 ${className}`}
//     animate={{
//       y: [0, -20, 0],
//       rotate: [0, 5, -5, 0],
//     }}
//     transition={{
//       duration: 8,
//       repeat: Infinity,
//       ease: "linear"
//     }}
//   >
//     <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
//       <circle cx="50" cy="50" r="40" />
//     </svg>
//   </motion.div>
// );

// export const FloatingTriangle = ({ className = "" }: { className?: string }) => (
//   <motion.div
//     className={`absolute pointer-events-none opacity-10 ${className}`}
//     animate={{
//       y: [0, 20, 0],
//       rotate: [0, -5, 5, 0],
//     }}
//     transition={{
//       duration: 10,
//       repeat: Infinity,
//       ease: "linear"
//     }}
//   >
//     <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
//       <polygon points="50,10 90,90 10,90" />
//     </svg>
//   </motion.div>
// );
































// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// // Define the color scheme based on your palette
// const colors = ['#F5FAF7', '#f5faf7', '#16A34A', '#ffffff', '#gray100']; // You can adjust these colors as needed

// const randomNumber = (min: number, max: number) => Math.random() * (max - min) + min;

// interface ShapeProps {
//   size: number;
//   top: number;
//   left: number;
//   color: string;
// }

// const FloatingShape = ({ size, top, left, color }: ShapeProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 0.8, y: [-10, 10, -10] }}
//       transition={{
//         duration: randomNumber(6, 12), // Slower floating effect
//         repeat: Infinity,
//         repeatType: 'reverse',
//       }}
//       style={{
//         position: 'absolute',
//         width: `${size}px`,
//         height: `${size}px`,
//         backgroundColor: color,
//         borderRadius: '50%', // Make all shapes circular like in the image
//         top: `${top}%`,
//         left: `${left}%`,
//         opacity: 0.8, // More subtle transparency
//       }}
//     />
//   );
// };

// export const FloatingShapes = () => {
//   const [shapes, setShapes] = useState<ShapeProps[]>([]);

//   useEffect(() => {
//     const generateShapes = () => {
//       const newShapes = Array.from({ length: 10 }, () => ({
//         size: randomNumber(15, 40), // Smaller size, random between 15px and 40px
//         top: randomNumber(0, 100),  // Random vertical position
//         left: randomNumber(0, 100), // Random horizontal position
//         color: colors[Math.floor(Math.random() * colors.length)], // Random color from the palette
//       }));
//       setShapes(newShapes);
//     };

//     generateShapes();
//   }, []);

//   return (
//     <>
//       {shapes.map((shape, index) => (
//         <FloatingShape key={index} {...shape} />
//       ))}
//     </>
//   );
// };
