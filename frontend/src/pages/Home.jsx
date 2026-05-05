import React, { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

import OurPolicy from '../components/OurPolicy'
import VideoTestimonials from '../components/VideoTestimonials'


const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            section.classList.add('visible');
          } else {
            section.classList.remove('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div ref={el => sectionsRef.current[0] = el} className="fade-in visible"><Hero/></div>
      <div ref={el => sectionsRef.current[1] = el} className="fade-in"><LatestCollection/></div>
      <div ref={el => sectionsRef.current[2] = el} className="fade-in"><VideoTestimonials/></div>

      <div ref={el => sectionsRef.current[3] = el} className="fade-in"><OurPolicy/></div>

    </div>
  )
}

export default Home
