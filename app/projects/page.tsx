'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from '@/components/AnimatedBackground';
import Image from 'next/image';

// --- DATA ---
type Project = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  cardColor: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Chain-Work",
    category: "Ethereum based freelancing dApp",
    description: "This is a Web3 application for Freelance work",
    imageUrl: "https://i.ibb.co/nMms4TDK/656a6f3d-1e4e-4b62-9cbf-787dabea643a.png",
    tags: ["ReactJs", "Express js", "Solidity", "Framer motion"],
    cardColor: "bg-[#336433]",
    link: "https://chainworkweb3.vercel.app/", // Replace with actual link
  },
  {
    title: "Strato.dev",
    category: "Blockchain based collaborative AI code editor",
    description: "Collaborate using Github and also run the code on the browser using webcontainers",
    imageUrl: "https://i.ibb.co/7sBVf51/becca457-d3b3-4c44-b7e5-5abb4d30dc40.png",
    tags: ["React", "Tailwindcss", "Gemini API", "RainbowKIT", "Ethereum", "Webcontainers", "Git workflows"],
    cardColor: "bg-[#6D4990]",
    link: "https://strato-dev.vercel.app/", // Replace with actual link
  },
  {
    title: "Cloak-Desktop",
    category: "A Onion Routing based chat app with Solana features",
    description: "This application is a chat app which enhances the security with onion routing and solana based payment integration on it",
    imageUrl: "https://camo.githubusercontent.com/dd2f582712f7ed8d544a80090fd9d2003d1ee66679f6f5cae61bc8e9fd38478a/68747470733a2f2f692e696d6775722e636f6d2f796456684830302e706e67",
    tags: ["electronjs", "typescript", "scss", "solana", "onion routing"],
    cardColor: "bg-orange-950/40",
    link: "https://github.com/NexorTech/Cloak-desktop.git", // Replace with actual link
  },
    {
    title: "Msh",
    category: "A simple shell with C",
    description: "msh is a custom, lightweight shell program written in the C programming language.",
    imageUrl: "https://i.ibb.co/N0k9V09/Gemini-Generated-Image-u44ub3u44ub3u44u.png",
    tags: ["C", "cmake"],
    cardColor: "bg-[#1B6DBD]",
    link: "https://github.com/MohakGupta2004/msh", // Replace with actual link
  },
  {
    title: "Morphsploit",
    category: "A framework for solving portswigger ctfs easily",
    description: "This framework will help you creating automations for solving ctfs challengs. You can use it for free and also has default attack templates.",
    imageUrl: "https://i.ibb.co/Rkcp7CFv/95872359-16e7-4771-8333-37030aab30f0.png",
    tags: ["Golang","html", "javascript"],
    cardColor: "bg-[#4C1715]",
    link: "https://github.com/MohakGupta2004/Morphsploit" // Replace with actual link
  }
];

// --- ANIMATIONS ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

// --- COMPONENTS ---
const ProjectCard = ({ project }: { project: Project }) => {
  const handleClick = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div variants={itemVariants} className="group h-full">
      <Card 
        className={`
          h-full text-white rounded-2xl overflow-hidden
          border border-slate-800/50 transition-all duration-300
          flex flex-col p-6 md:p-8 hover:brightness-110 cursor-pointer
          ${project.cardColor}
        `}
        onClick={handleClick}
      >
        <header>
          <p className="text-base text-slate-300">{project.category}</p>
          <CardTitle className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg flex items-center gap-2">
            {project.title}
            <ExternalLink className="h-6 w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
          <p className="mt-2 text-slate-300/80 text-sm">{project.description}</p>
        </header>

        {/* UPDATED: Image size increased and shadow removed */}
        <div className="my-auto flex-grow flex items-center justify-center py-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            className="w-auto h-full max-h-[250px] md:max-h-[300px] rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <footer className="flex flex-wrap justify-center gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-black/20 border border-white/10 text-white/80 hover:bg-black/40 cursor-pointer px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </footer>
      </Card>
    </motion.div>
  );
};

// --- MAIN PAGE ---
export default function ProjectsPage() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>
      <motion.section
        className="w-full max-w-7xl relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] -z-10"></div>
        
        <motion.div variants={itemVariants} className="mb-4">
          <Button variant="ghost" onClick={() => router.back()} className="text-slate-300 hover:text-white hover:bg-white/10">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </motion.div>

        <div className="flex justify-between items-center mb-8 px-4">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white">
            My Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700 transition-transform hover:scale-110"><ChevronLeft className="h-6 w-6 text-white" /></Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700 transition-transform hover:scale-110"><ChevronRight className="h-6 w-6 text-white" /></Button>
          </motion.div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {projects.map((project, index) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4"
                key={index}
              >
                <div className="h-[580px]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}