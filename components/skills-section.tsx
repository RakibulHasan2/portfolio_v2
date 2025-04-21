"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code2, Layout, Database, Server, Globe } from 'lucide-react'

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Material UI", level: 80 },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "RESTful APIs", level: 92 },
      { name: "Authentication (JWT)", level: 85 },
      { name: "Socket.io", level: 80 },
      { name: "ASP.NET Core", level: 70 }, // Added from your resume
    ]
  },
  {
    id: "database",
    label: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "Supabase", level: 75 },
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 88 },
      { name: "Netlify", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 90 }, // Added from your resume
      { name: "Jest", level: 75 },
      { name: "Trello", level: 85 },
    ]
  },
  {
    id: "languages",
    label: "Languages",
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "C++", level: 60 },
      { name: "Java", level: 65 },
    ]
  }
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with to bring ideas to life" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-background border border-border">
                {skillCategories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary/10"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {skillCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.skills.map((skill, index) => (
                        <SkillBar 
                          key={skill.name} 
                          name={skill.name} 
                          level={skill.level} 
                          index={index} 
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-medium">{name}</h4>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
        />
      </div>
    </motion.div>
  )
}
