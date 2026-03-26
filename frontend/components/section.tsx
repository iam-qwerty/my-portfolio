'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type SectionProps = {
  children: React.ReactNode
  id: string
  className?: string
}

export default function Section({ children, id, className = "" }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-16 md:py-24 relative ${className}`}
    >
      {children}
    </motion.section>
  )
}