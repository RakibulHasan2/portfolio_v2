"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import img1 from "@/public/rakib3.jpg";
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My background and passion" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-square max-w-[800px] mx-auto lg:ml-auto lg:mr-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-chart-1 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="absolute inset-2 rounded-3xl overflow-hidden bg-background flex items-center justify-center">
                <Image
                  src={img1}
                  alt="Rakibul Hasan"
                  fill
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Full Stack Engineer with practical experience across the entire project lifecycle
            </h3>

            <p className="text-muted-foreground">
              I&rsquo;m Rakibul Hasan, a Full Stack Engineer with extensive experience developing and deploying 
              eCommerce platforms, portfolio websites, and comprehensive restaurant management systems. 
              Currently working at Hotchpotch Digital, I&rsquo;ve contributed across the full project lifecycle, 
              covering development, deployment, product research, and client communication.
            </p>

            <p className="text-muted-foreground">
              I specialize in modern technologies including Next.js, React.js, NestJS, Prisma, Docker, 
              Vercel, and AWS. At Hotchpotch Digital, I&rsquo;ve led designer teams to align UI/UX with technical 
              goals, managed deployments to cPanel and AWS, and coordinated workload distribution within 
              agile teams using modern project management tools.
            </p>

            <p className="text-muted-foreground">
              Working in a dynamic startup environment has strengthened my ability to connect design, 
              development, and strategy, ensuring smooth execution and successful delivery of every project. 
              I&rsquo;m passionate about building scalable solutions that deliver real business value.
            </p>
            <div className="pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <CounterItem value={2} label="Years Experience" />
                <CounterItem value={15} label="Projects Completed" />
                <CounterItem value={7} label="Certificates" />
                <CounterItem value={1} label="Hackathon" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ value, label }: { value: number; label: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-3xl font-bold text-primary mb-2">{value}+</span>
      <span className="text-sm text-muted-foreground text-center">{label}</span>
    </motion.div>
  );
};
