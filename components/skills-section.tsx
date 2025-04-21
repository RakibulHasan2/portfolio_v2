"use client"

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiMui, SiNodedotjs, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiDocker, SiVercel, SiNetlify, SiFigma, SiPostman, SiJest, SiTrello, SiPython, SiCplusplus, SiDotnet, SiGit } from 'react-icons/si'
import { Layout, Server, Database, Code2, Globe } from 'lucide-react'
import { FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
// Skill icons map
const skillIconMap : any = {
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "JavaScript": <SiJavascript />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Redux": <SiRedux />,
  "Material UI": <SiMui />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "GraphQL": <SiGraphql />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "MySQL": <SiMysql />,
  "Firebase": <SiFirebase />,
  "Git/GitHub": <SiGit />,
  "Docker": <SiDocker />,
  "AWS": <FaAws />,
  "Vercel": <SiVercel />,
  "Netlify": <SiNetlify />,
  "Figma": <SiFigma />,
  "Postman": <SiPostman />,
  "VS Code": <VscVscodeInsiders />,
  "Trello": <SiTrello />,
  "Python": <SiPython />,
  "C++": <SiCplusplus />,
  "Java": <FaJava />,
  "ASP.NET Core": <SiDotnet />,
}

// Skill categories
const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <Layout className="h-4 w-4" />,
    skills: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Next.js",
      "TypeScript", "Tailwind CSS", "Redux", "Material UI"
    ]
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Server className="h-4 w-4" />,
    skills: [
      "Node.js", "Express.js", "GraphQL", "ASP.NET Core"
    ]
  },
  {
    id: "database",
    label: "Database",
    icon: <Database className="h-4 w-4" />,
    skills: [
      "MongoDB", "PostgreSQL", "MySQL", "Firebase"
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Code2 className="h-4 w-4" />,
    skills: [
      "Git/GitHub", "Docker", "AWS", "Vercel", "Netlify",
      "Figma", "Postman", "VS Code", "Trello"
    ]
  },
  {
    id: "languages",
    label: "Languages",
    icon: <Globe className="h-4 w-4" />,
    skills: [
      "JavaScript", "TypeScript", "Python", "C++", "Java"
    ]
  }
]

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies I craft solutions with" 
        />

        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold">{category.label}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative rounded-xl border border-white/10 backdrop-blur-sm bg-white/5 p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-primary text-3xl mb-3">
                    {skillIconMap[skill] || <Code2 className="h-6 w-6" />}
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
};