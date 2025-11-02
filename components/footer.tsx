"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
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
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Button 
              onClick={scrollToTop} 
              size="icon" 
              variant="outline"
              className="rounded-full h-12 w-12"
            >
              <ChevronUp className="h-6 w-6" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mb-8">
            <FooterSection title="Navigation">
              <FooterLink href="/#">Home</FooterLink>
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#projects">Projects</FooterLink>
              <FooterLink href="/#skills">Skills</FooterLink>
              <FooterLink href="/#experience">Experience</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </FooterSection>
            
            <FooterSection title="Connect">
              <FooterLink 
                href="https://github.com/RakibulHasan2" 
                external
                icon={<Github className="h-4 w-4 mr-2" />}
              >
                GitHub
              </FooterLink>
              <FooterLink 
                href="https://www.linkedin.com/in/rakibulhasn2/" 
                external
                icon={<Linkedin className="h-4 w-4 mr-2" />}
              >
                LinkedIn
              </FooterLink>
              <FooterLink 
                href="mailto:rakibulhasan99445@gmail.com"
                icon={<Mail className="h-4 w-4 mr-2" />}
              >
                Email
              </FooterLink>
            </FooterSection>
            
            <FooterSection title="Resources">
              <FooterLink href="/Rakibul-Hasan-Resume.pdf" external>Resume</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </FooterSection>
          </div>
          
          <motion.div 
            className="text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>© {currentYear} Rakibul Hasan. All rights reserved.</p>
            <p className="mt-1">Full Stack Engineer specializing in modern web applications</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

const FooterSection = ({ 
  title, 
  children 
}: { 
  title: string
  children: React.ReactNode 
}) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  )
}

const FooterLink = ({ 
  href, 
  children,
  external = false,
  icon
}: { 
  href: string
  children: React.ReactNode
  external?: boolean
  icon?: React.ReactNode
}) => {
  const content = (
    <span className="flex items-center">
      {icon}
      {children}
    </span>
  )
  
  return (
    <li className="text-muted-foreground hover:text-primary transition-colors">
      {external ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(
            "transition-colors hover:text-primary",
            icon && "flex items-center"
          )}
        >
          {content}
        </a>
      ) : (
        <Link 
          href={href}
          className={cn(
            "transition-colors hover:text-primary",
            icon && "flex items-center"
          )}
        >
          {content}
        </Link>
      )}
    </li>
  )
}