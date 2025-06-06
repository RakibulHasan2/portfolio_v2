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
import globe from "@/public/projects/globe.jpg"
import image2 from "@/public/projects/image.png"
import image1 from "@/public/projects/image1.png"
import hotch from "@/public/projects/hotch.png"
const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Gadget Sailor",
      description: "An e-commerce platform for electronic gadgets with user authentication, product management, and payment integration.",
      image: sailor,
      liveLink: "https://gadget-sailor-frontend.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/gadget-sailor-frontend",
      backendLink: "https://github.com/RakibulHasan2/gadget-sailor-backend",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase Auth"],
      category: "fullstack"
    },
    {
      id: 2,
      title: "POS System",
      description: "A point of sale system with inventory management, sales tracking, and reporting features for small businesses.",
      image: pos,
      liveLink: "https://pos-frontend-one-olive.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/pos-frontend",
      backendLink: "https://github.com/RakibulHasan2/pos-backend",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI", "Chart.js"],
      category: "fullstack"
    },
    {
      id: 3,
      title: "Quiz Application",
      description: "An interactive quiz platform with different categories, timed quizzes, and score tracking.",
      image: quiz,
      liveLink: "https://quiz-client-rakibulhasan2s-projects.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/quiz-client",
      backendLink: "https://github.com/RakibulHasan2/QuizServer",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      category: "fullstack"
    },
    {
      id: 4,
      title: "Globe Explorer",
      description: "A travel booking platform with destination search, booking management, and user reviews.",
      image: globe,
      liveLink: "https://globe-explorer-7129a.web.app/home",
      githubLink: "https://github.com/RakibulHasan2/globe-explorer-client",
      backendLink: "https://github.com/RakibulHasan2/globe-explorer-server",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "Firebase"],
      category: "fullstack"
    },
    {
      id: 5,
      title: "Company Portfolio",
      description: "A company portfolio website featuring service overviews, project showcases, and team profiles for Hotchpotch Innovations Ltd.",
      image: hotch,
      liveLink: "https://hotchpotch-frontend-dusky.vercel.app/",
      technologies: ["Next JS", "Tailwind CSS", "Typescript", "GSAP"],
      category: "frontend"
    },
    {
      id: 6,
      title: "Landing Page",
      description: "A simple Next JS Landing Page",
      image: image2,
      liveLink: "https://next-js-landing-page-sand.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/Next-JS-Landing-Page",
      technologies: ["Next JS", "Tailwind CSS", "Typescript"],
      category: "frontend"
    },
    {
      id: 7,
      title: "Simple Net Tracking Page",
      description: "A simple Next JS Landing Page",
      image: image1,
      liveLink: "https://net-tracking-nine.vercel.app/",
      githubLink: "https://github.com/RakibulHasan2/Net-Tracking",
      technologies: ["HTML", "Tailwind CSS"],
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