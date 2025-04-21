"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine, Github as GitHub, Linkedin, Mail } from 'lucide-react'

export const HeroSection = () => {
  const constraintsRef = useRef(null)

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10"
      id="hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-chart-1/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-chart-2/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9]
          }}
          className="lg:order-1 order-2"
        >
          <div className="relative aspect-square max-w-md mx-auto lg:ml-auto lg:mr-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-chart-2/40 animate-rotate-slow" />
            <div className="absolute inset-2 rounded-3xl overflow-hidden bg-background flex items-center justify-center">
              <Image 
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Rakibul Hasan" 
                width={500} 
                height={500}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 0.3
          }}
          className="lg:order-2 order-1 max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
              Hello, I'm Rakibul Hasan
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
            Full Stack Developer
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I craft seamless digital experiences with clean code and creative solutions.
            Specializing in building modern, interactive web applications that deliver
            exceptional user experiences with a focus on performance and accessibility.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <motion.a
              href="https://github.com/RakibulHasan2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors"
            >
              <GitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rakibul-hasan-0261a8236/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:rakibulhasan99445@gmail.com"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full group">
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowDownToLine className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}