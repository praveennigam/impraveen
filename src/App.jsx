import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import RealGlobeBackground from "./components/RealGlobeBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import WorkExperience from "./components/WorkExperience"; // Import WorkExperience component

const App = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="relative overflow-x-hidden bg-[#050711] text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#19213c_0%,#090b16_45%,#04050c_100%)]" />
          <div className="blob blob-purple top-16 -left-20" />
          <div className="blob blob-blue top-1/3 -right-24" />
          <div className="blob blob-pink bottom-10 left-1/3" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        </div>

        <RealGlobeBackground />

        <div className="relative z-10 container mx-auto px-4 sm:px-8">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <WorkExperience />
                  <Technologies />
                  <Study />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 h-11 w-11 rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            aria-label="Back to Top"
          >
            <FaArrowUp className="mx-auto text-sm" />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
