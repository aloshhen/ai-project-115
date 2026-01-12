import React from 'react'
import { motion } from 'framer-motion'

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 1
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
        />
      ))}
    </div>
  )
}