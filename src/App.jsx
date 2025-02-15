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
const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main className=" mx-auto">
        <NavBar />
        <Hero />
        <AboutMe />
        <Projects />
        <SkillsCard />
        <Path />
        <DiscussProject id="contact" />
      </main>
      <Toaster position="bottom-right" />
    </ThemeProvider>

  )
}

export default App;