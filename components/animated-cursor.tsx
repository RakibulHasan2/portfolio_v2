"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorOuterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        type: "spring",
        mass: 0.1
      }
    }
  }

  const cursorOuterVariants = {
    default: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      transition: {
        type: "spring",
        mass: 0.2
      }
    }
  }

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate="default"
      />
      <motion.div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-12 h-12 border border-primary rounded-full pointer-events-none z-40 opacity-50"
        variants={cursorOuterVariants}
        animate="default"
      />
    </>
  )
}