"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle: string
  alignment?: 'left' | 'center'
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <span className="inline-block ml-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">.</span>
      </motion.h2>
      <motion.p 
        className="text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        className={`h-1 w-20 bg-primary mt-4 rounded ${alignment === 'center' ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
    </div>
  )
}