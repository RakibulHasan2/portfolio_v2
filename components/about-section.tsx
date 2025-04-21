"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My background and passion" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-chart-1 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-xl overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg" 
                  alt="Rakibul Hasan working" 
                  width={600} 
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Full Stack Developer with a passion for creating exceptional digital experiences</h3>
            
            <p className="text-muted-foreground">
              I'm Rakibul Hasan, a Full Stack Developer with expertise in building modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I create seamless and engaging user experiences.
            </p>
            
            <p className="text-muted-foreground">
              My journey in web development began with a curiosity about how digital products work and evolved into a passion for crafting elegant solutions to complex problems. I believe in clean, maintainable code that delivers real value.
            </p>
            
            <p className="text-muted-foreground">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge through learning and experimentation.
            </p>
            
            <div className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <CounterItem value={3} label="Years Experience" />
                <CounterItem value={20} label="Projects Completed" />
                <CounterItem value={15} label="Happy Clients" />
                <CounterItem value={5} label="Awards" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const CounterItem = ({ value, label }: { value: number, label: string }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-3xl font-bold text-primary mb-2">{value}+</span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </motion.div>
  )
}