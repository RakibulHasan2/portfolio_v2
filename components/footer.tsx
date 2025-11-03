
"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronUp, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Vision Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                My vision is to build{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  innovative solutions
                </span>{' '}
                while making technology more accessible and impactful.
              </h2>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Let&rsquo;s Connect</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-1">
              {[
                { href: "https://github.com/RakibulHasan2", label: "GitHub" },
                { href: "https://www.linkedin.com/in/rakibulhasn2/", label: "LinkedIn" },
                { href: "https://twitter.com", label: "Twitter" },
                { href: "https://instagram.com", label: "Instagram" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm px-4 py-2 rounded-lg hover:bg-gray-800/50"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.label} ↗
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Items */}
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="rakibulhasan99445@gmail.com"
                href="mailto:rakibulhasan99445@gmail.com"
              />
              
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+880 1788-756299"
                href="tel:+8801788756299"
              />
              
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Address"
                value="Gazipura, Dhaka, Bangladesh"
                href="#"
              />
            </div>

            {/* Download Resume */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/Rakibul-Hasan-Resume.pdf"
                target="_blank"
                className="inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-200"
              >
                <span>Download Resume</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear}. All rights reserved Rakibul Hasan
              </p>
              <div className="flex space-x-6 mt-2">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Condition
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                onClick={scrollToTop}
                size="icon"
                variant="outline"
                className="bg-gray-800 border-gray-600 hover:bg-gray-700 text-white rounded-full h-12 w-12"
              >
                <ChevronUp className="h-6 w-6" />
                <span className="sr-only">Back To Top</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

// Contact Item Component
const ContactItem = ({ icon, label, value, href }: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
  
  return (
    <motion.div
      className="flex justify-between items-center py-3 border-b border-gray-700/50"
      whileHover={{ x: 5 }}
    >
      <div className="flex items-center space-x-3">
        <div className="text-gray-400">
          {icon}
        </div>
        <span className="text-gray-400 text-sm">{label}</span>
      </div>
      
      {href === '#' ? (
        <span className="text-white font-medium text-right">{value}</span>
      ) : (
        <motion.a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-white font-medium hover:text-blue-400 transition-colors text-right"
          whileHover={{ scale: 1.05 }}
        >
          {value}
        </motion.a>
      )}
    </motion.div>
  )
}
