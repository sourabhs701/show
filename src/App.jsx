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
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Simulate loading of media assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900"
      >
        <div className="relative w-52 h-52">
          <img
            src="/frog.gif"
            alt="Loading..."
            className="w-full h-full object-contain"
          />
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-[#9ED03E] mt-4 rounded-full"
        />
      </motion.div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />
      <main className="mx-auto overflow-hidden">
        <NavBar />
        <div className="space-y-32">
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