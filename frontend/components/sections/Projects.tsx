"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "../section";
import { Github, ExternalLink, Layers, Code2, Globe, CheckCircle2, Info, ChevronRight } from "lucide-react";
import { projects, ProjectType, Project } from "@/lib/data";
import FloatingTriangle from "../animated/floating-traingle";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ScrollArea } from "@/components/ui/scroll-area"

const ProjectCard = ({ project, index, getTypeIcon }: { project: Project; index: number; getTypeIcon: (type: ProjectType) => React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const ProjectContent = (
    <div className="group relative flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Floating Type Badge (Show first type) */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-zinc-950/80 backdrop-blur-md border-zinc-700 text-[10px] md:text-xs py-1 px-2.5 flex items-center shadow-lg">
            {getTypeIcon(project.types[0])}
            {project.types[0]}
            {project.types.length > 1 && <span className="ml-1 text-zinc-500">+{project.types.length - 1}</span>}
          </Badge>
        </div>

        {/* View Details Trigger Overlay (Desktop only) */}
        {isDesktop && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform cursor-pointer">
              <Info className="w-4 h-4" />
              View Details
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-lg md:text-xl font-bold group-hover:text-yellow-400 transition-colors">
            {project.title}
          </h4>
          <Link target="_blank" href={project.link} className="text-zinc-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-4 md:mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>

        {!isDesktop && (
          <div className="flex items-center text-yellow-400 text-xs font-semibold mb-4 gap-1">
            Tap to see more <ChevronRight className="w-3 h-3" />
          </div>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-4 border-t border-zinc-800">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-full"
    >
      {isDesktop ? (
        <Dialog key={project.title}>
          <DialogTrigger asChild>
            <div className="cursor-pointer h-full">
              {ProjectContent}
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl bg-zinc-950 border-zinc-800 text-white p-0 gap-0 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Left: Image (45%) */}
              <div className="md:w-[45%] relative shrink-0 border-r border-zinc-800/50">
                <Image src={project.src} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950/20" />
              </div>

              {/* Right: Info (55%) */}
              <ScrollArea className="md:w-[55%] h-[80vh] md:h-auto max-h-[85vh]">
                <div className="p-8 md:p-10 space-y-8">
                  <DialogHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {project.types.map((type) => (
                        <Badge key={type} variant="outline" className="text-yellow-400 border-yellow-400/30 bg-yellow-400/5 px-3 py-1 text-[11px] uppercase tracking-wider">
                          {getTypeIcon(type)}
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-black">{project.title}</DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <h5 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-500">
                      Highlights
                    </h5>
                    <div className="grid grid-cols-1 gap-3">
                      {project.features?.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
                          <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-200 text-sm leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tags?.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-default px-2.5 py-1 text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4 sticky bottom-0 bg-zinc-950 pb-2">
                    <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold flex-1 h-12 shadow-[0_10px_20px_-10px_rgba(250,204,21,0.3)]">
                      <Link href={project.link} target="_blank">
                        Explore Live <ExternalLink className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    {project.github && (
                      <Button asChild variant="outline" className="border-zinc-800 hover:bg-zinc-900 flex-1 h-12 text-zinc-300">
                        <Link href={project.github} target="_blank">
                          <Github className="mr-2 w-4 h-4" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer key={project.title}>
          <DrawerTrigger asChild>
            <div className="h-full">
              {ProjectContent}
            </div>
          </DrawerTrigger>
          <DrawerContent className="bg-zinc-950 border-zinc-800 text-white max-h-[92vh]">
            <ScrollArea className="overflow-y-auto px-6 pt-2 pb-8">
              <DrawerHeader className="px-0 text-left">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.types.map((type) => (
                    <Badge key={type} variant="outline" className="text-yellow-400 border-yellow-400/30 bg-yellow-400/5 px-2 py-0.5 text-[10px] items-center flex">
                      {getTypeIcon(type)}
                      {type}
                    </Badge>
                  ))}
                </div>
                <DrawerTitle className="text-2xl font-bold">{project.title}</DrawerTitle>
                <DrawerDescription className="text-zinc-400 pt-2 leading-relaxed">
                  {project.description}
                </DrawerDescription>
              </DrawerHeader>

              <div className="mt-4 relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-zinc-800">
                <Image src={project.src} alt={project.title} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <h5 className="font-bold text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Key Features</h5>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.features?.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800/80">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold w-full h-12 rounded-xl">
                  <Link href={project.link} target="_blank">
                    Visit Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                {project.github && (
                  <Button asChild variant="outline" className="border-zinc-800 hover:bg-zinc-900 w-full h-12 rounded-xl text-zinc-300 font-medium">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 w-4 h-4" />
                      Source Code
                    </Link>
                  </Button>
                )}
                <DrawerClose asChild>
                  <Button variant="ghost" className="w-full text-zinc-500 hover:text-white mt-2">Close</Button>
                </DrawerClose>
              </div>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<ProjectType | "All">("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.types.includes(filter)
  );

  const getTypeIcon = (type: ProjectType) => {
    switch (type) {
      case "Fullstack":
        return <Code2 className="w-3 h-3 mr-1" />;
      case "Web App":
        return <Layers className="w-3 h-3 mr-1" />;
      case "Landing Page":
        return <Globe className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <Section id="projects">
      <div className="relative px-3 md:px-6 lg:px-16 max-w-7xl mx-auto">
        <FloatingTriangle className="hidden md:block text-yellow-400 right-0 top-0 opacity-20 -z-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-balance">
              Featured <span className="text-yellow-400">Works</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-md text-balance leading-relaxed">
              Catalog of some of my best works.
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full md:w-auto" onValueChange={(v) => setFilter(v as ProjectType | "All")}>
            <TabsList className="bg-zinc-900 border border-zinc-800 h-10 md:h-12 p-1 w-full md:w-auto overflow-x-auto overflow-y-hidden no-scrollbar justify-start md:justify-center rounded-xl md:rounded-2xl">
              <TabsTrigger value="All" className="px-5 py-1.5 md:py-2 flex-shrink-0 text-xs md:text-sm font-bold data-[state=active]:bg-zinc-800 data-[state=active]:text-yellow-400 rounded-lg md:rounded-xl">All</TabsTrigger>
              <TabsTrigger value="Landing Page" className="px-5 py-1.5 md:py-2 flex-shrink-0 text-xs md:text-sm font-bold data-[state=active]:bg-zinc-800 data-[state=active]:text-yellow-400 rounded-lg md:rounded-xl">Landing Pages</TabsTrigger>
              <TabsTrigger value="Web App" className="px-5 py-1.5 md:py-2 flex-shrink-0 text-xs md:text-sm font-bold data-[state=active]:bg-zinc-800 data-[state=active]:text-yellow-400 rounded-lg md:rounded-xl">Web Apps</TabsTrigger>
              <TabsTrigger value="Fullstack" className="px-5 py-1.5 md:py-2 flex-shrink-0 text-xs md:text-sm font-bold data-[state=active]:bg-zinc-800 data-[state=active]:text-yellow-400 rounded-lg md:rounded-xl">Fullstack</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} getTypeIcon={getTypeIcon} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectsSection;
