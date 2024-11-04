"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from '@/components/AnimatedText';
import WorkItem from "./WorkItem";

const data = [
    {
        href: "",
        category: "design",
        img: "/assets/work/thumb-1.png",
        title: "Luminex UI Kit",
    },
    {
        href: "",
        category: "design",
        img: "/assets/work/thumb-2.png",
        title: "Luminex UI Kit",
    },
    {
        href: "",
        category: "design",
        img: "/assets/work/thumb-3.png",
        title: "Luminex UI Kit",
    },
]

const Work = () => {
    const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));

    const tabData = [
        {
            category: "all"
        },
        ...uniqueCategories.map((category) => ({ category }),)
    ]

    const [tabValue, setTabValue] = useState("all");
    const [visibleItems, setVisibleItems] = useState(2)

    const filterWork = tabValue === "all" ? data.filter((item) => item.category !== "all") : data.filter((item) => item.category === tabValue);
    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 1)
    }
    return (
        <section className='pt-24 min-h-[600px]' id='work'>
            <div className='container mx-auto'>
                <Tabs defaultValue="all" className='w-full flex flex-col'>
                    <div className='flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]'>
                        <AnimatedText text="My Latest Work" textStyles="h2 mb-[30px] xl:mb-0" />
                        <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
                            {tabData.map((item, index) => {
                                return (
                                    <TabsTrigger value={item.category} key={index} className="capitalize w-[120px]" onClick={() => setTabValue(item.category)}>
                                        {item.category}
                                    </TabsTrigger>
                                )
                            })}
                        </TabsList>
                    </div>
                    <TabsContent value={tabValue} className="w-full">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                            <AnimatePresence>
                                {filterWork.slice(0, visibleItems).map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                        <WorkItem {...item} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        {visibleItems < filterWork.length && (
                            <div className='flex justify-center mt-12'>
                                <button onClick={loadMoreItems} className='btn btn-accent'>
                                    Load more
                                </button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default Work