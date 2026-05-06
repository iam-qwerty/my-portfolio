"use client"
import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}






















// export const useActiveSection = (refs: Record<string, React.RefObject<HTMLElement>>) => {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight / 3;
      
//       for (const [section, ref] of Object.entries(refs)) {
//         if (!ref.current) continue;
        
//         if (scrollPosition < ref.current.offsetTop + ref.current.offsetHeight) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [refs]);

//   return activeSection;
// };