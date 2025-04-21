"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { BadgeCheck, Building, Calendar, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

const experienceData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    duration: "Jan 2023 - Present",
    description: "Leading development of web applications using React, Node.js, and MongoDB. Implementing responsive designs and RESTful APIs. Collaborating with cross-functional teams to deliver high-quality products.",
    type: "work"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Innovations",
    location: "Dhaka, Bangladesh",
    duration: "Jun 2022 - Dec 2022",
    description: "Developed and maintained client websites using React and Next.js. Created reusable components and implemented responsive designs. Worked closely with designers to ensure pixel-perfect implementation.",
    type: "work"
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "StartUp Hub",
    location: "Dhaka, Bangladesh",
    duration: "Jan 2022 - May 2022",
    description: "Assisted in developing website features using JavaScript and React. Participated in code reviews and learned best practices. Gained hands-on experience with modern web development workflows.",
    type: "work"
  },
  {
    id: 4,
    title: "BSc in Computer Science",
    company: "Bangladesh University of Engineering and Technology",
    location: "Dhaka, Bangladesh",
    duration: "2018 - 2022",
    description: "Focused on software development, algorithms, and database systems. Completed projects in web development and machine learning. Graduated with honors.",
    type: "education"
  }
]

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background" 
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const isEven = index % 2 === 0
  
  return (
    <motion.div 
      className={cn(
        "flex flex-col md:flex-row gap-4 mb-8 relative",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-0.5 md:z-0 z-[-1]" />
      
      {/* Date marker */}
      <div className={cn(
        "md:w-1/2 flex",
        isEven ? "md:justify-end" : "md:justify-start"
      )}>
        <div className={cn(
          "flex items-center",
          isEven ? "md:mr-8" : "md:ml-8"
        )}>
          <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground ring-8 ring-background">
            {item.type === "work" ? (
              <Building className="w-4 h-4" />
            ) : (
              <GraduationCap className="w-4 h-4" />
            )}
          </div>
          <div className={cn(
            "bg-card shadow-sm border border-border p-4 rounded-lg ml-4 md:ml-0",
            isEven ? "md:mr-4" : "md:ml-4",
            "flex items-center md:w-auto w-full"
          )}>
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{item.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className={cn(
        "md:w-1/2 pl-12 md:pl-0",
        isEven ? "md:pl-8" : "md:pr-8 md:text-right"
      )}>
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <div className="flex items-center mt-1 mb-3 text-muted-foreground">
            <span>{item.company}</span>
            <span className="mx-2">•</span>
            <span>{item.location}</span>
          </div>
          <p className="text-muted-foreground">{item.description}</p>
          
          <div className={cn(
            "flex gap-2 mt-4 flex-wrap",
            isEven ? "" : "md:justify-end"
          )}>
            {item.type === "work" && (
              <>
                <Badge>Team Collaboration</Badge>
                <Badge>Project Management</Badge>
                <Badge>Problem Solving</Badge>
              </>
            )}
            {item.type === "education" && (
              <>
                <Badge>Research</Badge>
                <Badge>Team Projects</Badge>
                <Badge>Academic Excellence</Badge>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
      <BadgeCheck className="w-3 h-3 mr-1" />
      {children}
    </div>
  )
}