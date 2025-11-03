"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Eye, Github } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import sailor from "@/public/projects/sailor.jpg"
import pos from "@/public/projects/pos.jpg"
import quiz from "@/public/projects/quiz.jpg"
import adda from "@/public/projects/adda.png"
import hotch from "@/public/projects/hotch.png"
import muneer from "@/public/projects/muneer.png"
import pristine from "@/public/projects/pristine.png"
import friday from "@/public/projects/friday.png"

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "eCommerce Platform (USA Client)",
      description: "Full-featured eCommerce solution supporting customer and admin operations with advanced product filtering, category browsing, size-based inventory management, OTP-based login, guest checkout, and comprehensive admin panel.",
      image: pristine,
      liveLink: "https://drive.google.com/drive/folders/1R3Cl56QOE2Sy_FPqFvOrmagrOPJuAcO9",
      technologies: ["Next.js", "React.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker", "AWS EC2"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "Adda Chinese Party Center",
      description: "Dual-purpose platform for restaurant ordering and culinary course management with course enrollment, testimonial approval, certificate generation, food catalog, and secure admin authentication.",
      image: adda,
      liveLink: "https://www.addaarestaurant.com/",
      technologies: ["Next.js", "TypeScript", "Firebase Firestore", "Tailwind CSS", "ImgBB", "JWT"],
      category: "fullstack"
    },
    {
      id: 3,
      title: "POS System (MERN Stack)",
      description: "Role-based POS system with manager/staff access control, product management, billing module with advanced filtering, sales tracking, customer management, and PDF invoice generation.",
      image: pos,
      liveLink: "https://pos-frontend-one-olive.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/pos-frontend",
      backendLink: "https://github.com/RakibulHasan2/pos-backend",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Gadget Sailor - E-commerce Platform",
      description: "eCommerce platform with admin-side CRUD operations, dynamic product filtering, secure shopping cart, user authentication, and multiple payment options.",
      image: sailor,
      liveLink: "https://gadget-sailor-frontend.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/gadget-sailor-frontend",
      backendLink: "https://github.com/RakibulHasan2/gadget-sailor-backend",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      category: "fullstack"
    },
    {
      id: 5,
      title: "Hotchpotch Digital Website",
      description: "Company portfolio website featuring service overviews, project showcases, and team profiles with modern animations and responsive design.",
      image: hotch,
      liveLink: "https://www.hotchpotchdigital.io/",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
      category: "frontend"
    },
    {
      id: 6,
      title: "Friday Sourcing Portfolio",
      description: "Professional buying house portfolio website showcasing services and company information.",
      image: friday,
      liveLink: "https://fridaysourcing.com/",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend"
    },
    {
      id: 7,
      title: "Muneer International Portfolio",
      description: "Corporate website for international trading company with modern design and responsive layout.",
      image: muneer,
      liveLink: "https://www.muneerint.com/",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Here are some of the projects I&lsquo;ve worked on. Each project represents different skills and technologies I&rsquo;ve mastered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    isHovered={hoveredProject === project.id}
                    setHoveredProject={setHoveredProject}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fullstack" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === 'fullstack')
                  .map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index}
                      isHovered={hoveredProject === project.id}
                      setHoveredProject={setHoveredProject}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="frontend" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === 'frontend')
                  .map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index}
                      isHovered={hoveredProject === project.id}
                      setHoveredProject={setHoveredProject}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  liveLink: string;
  githubLink?: string;
  backendLink?: string;
  technologies: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  setHoveredProject: (id: number | null) => void;
}

const ProjectCard = ({ project, index, isHovered, setHoveredProject }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-background/50 backdrop-blur-sm border-border/50 shadow-md hover:shadow-lg transition-all">
        <div className="relative overflow-hidden h-48">
          <Image 
            src={project?.image} 
            alt={project?.title} 
            fill
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button asChild size="sm" variant="default">
              <a href={project?.liveLink} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4 mr-1" /> Live
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={project?.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" /> Code
              </a>
            </Button>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map(tech => (
              <Badge key={tech} variant="outline" className="bg-primary/5">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="bg-primary/5">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-5 pb-5 pt-0 flex justify-between">
          <Button asChild variant="default" size="sm">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" /> View Project
            </a>
          </Button>
          {project.backendLink && (
            <Button asChild variant="outline" size="sm">
              <a href={project.backendLink} target="_blank" rel="noopener noreferrer">
                Backend
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;