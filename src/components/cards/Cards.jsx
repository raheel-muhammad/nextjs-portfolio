"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import Card from "./Card";

const journey = [
    {
        type: "experience",
        company: "Odeao-Labs",
        logoUrl: "/assets/journey/experience/logo-1.svg",
        position: "web Developer",
        duration: "jul-2021 - present",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "experience",
        company: "Odeao-Labs",
        logoUrl: "/assets/journey/experience/logo-2.svg",
        position: "web Developer",
        duration: "jul-2021 - present",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "education",
        institution: "Odeao-Labs",
        logoUrl: "/assets/journey/education/logo-1.svg",
        qualification: "web Developer",
        duration: "jul-2021 - present",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "education",
        institution: "Odeao-Labs",
        logoUrl: "/assets/journey/education/institution.svg",
        qualification: "web Developer",
        duration: "jul-2021 - present",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "HTML",
        icon: <FaHtml5 />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "CSS",
        icon: <FaCss3Alt />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "JavaScript",
        icon: <FaJs />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "React",
        icon: <FaReact />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "WordPress",
        icon: <FaWordpress />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
    {
        type: "skill",
        name: "Figma",
        icon: <FaFigma />,
        duration: "Learned in 2017",
        description: "Built websites and web apps using Next.js, Tailwind CSS, and JavaScript. Worked on scalable, user-friendly solutions.",
    },
];

const Cards = () => {
    return (
        <>
            <Tabs defaultValue="experience" className="w-full flex flex-col items-center">
                <TabsList className="max-w-max mb-[30px]">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">My Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="w-full">
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
                            {journey.filter((item) => item.type === "experience").map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
                            {journey.filter((item) => item.type === "education").map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
                <TabsContent value="skills" className="w-full">
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
                            {journey.filter((item) => item.type === "skill").map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
            </Tabs>
        </>
    );
}

export default Cards;
