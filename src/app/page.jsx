"use client";
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Journey from '../components/Journey'
import Work from '@/components/work/Work'
import Contact from '../components/Contact'
import FixedMenu from '../components/FixedMenu';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);


  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
