// src/App.jsx
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { Toaster } from "react-hot-toast";
import { SkillsCard } from "./components/SkillCard";
import { ThemeProvider } from "./components/providers";
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import DiscussProject from './components/DiscussProject';
import { Path } from './components/Journey';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />
      <main className="mx-auto overflow-hidden">
        <NavBar />
        <div className="space-y-32 pb-32">
          <Hero />
          <AboutMe />
          <Projects />
          <SkillsCard />
          <Path />
          <DiscussProject id="contact" />
        </div>
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </ThemeProvider>
  )
}

export default App;