"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Project data
const projects = [
  {
    id: 1,
    title: "Gadget Sailor",
    description: "An e-commerce platform for tech enthusiasts to discover and purchase gadgets with a seamless shopping experience.",
    image: "/gadget-sailor.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://gadget-sailor-frontend.vercel.app/",
    githubUrl: "https://github.com/RakibulHasan2/gadget-sailor-frontend",
    featured: true
  },
  {
    id: 2,
    title: "POS System",
    description: "A comprehensive point-of-sale system designed for small businesses with inventory management and sales analytics.",
    image: "/pos-system.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Material UI"],
    liveUrl: "https://pos-frontend-one-olive.vercel.app/",
    githubUrl: "https://github.com/RakibulHasan2/pos-frontend",
    featured: true
  },
  {
    id: 3,
    title: "Quiz Platform",
    description: "An interactive quiz application that allows users to test their knowledge across various subjects and compete with others.",
    image: "/quiz-platform.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://quiz-client-rakibulhasan2s-projects.vercel.app/",
    githubUrl: "https://github.com/RakibulHasan2/quiz-client",
    featured: true
  },
  {
    id: 4,
    title: "Globe Explorer",
    description: "A travel companion app that helps users discover and plan trips to destinations around the world with local insights.",
    image: "/globe-explorer.jpg",
    tags: ["React", "Firebase", "Express", "Node.js", "Tailwind CSS"],
    liveUrl: "https://globe-explorer-7129a.web.app/home",
    githubUrl: "https://github.com/RakibulHasan2/globe-explorer-client",
    featured: false
  },
]

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => activeFilter === 'featured' ? project.featured : !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Projects" 
          subtitle="Explore my recent work and the problems I've solved" 
        />
        
        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('all')}
            className="rounded-full"
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'featured' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('featured')}
            className="rounded-full"
          >
            Featured
          </Button>
          <Button 
            variant={activeFilter === 'recent' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('recent')}
            className="rounded-full"
          >
            Recent
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col group border-border/50 hover:border-primary/50 transition-colors duration-300">
        <div className="relative overflow-hidden">
          <div className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <Image 
                src={project.image || "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt={project.title} 
                width={600} 
                height={340}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          {project.featured && (
            <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Eye className="h-4 w-4" />
              Preview
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}