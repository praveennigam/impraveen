import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />

          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Technologies />
                <Study />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        {showButton && (
          <span>
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 right-2 p-2 h-12 w-9 opacity-50 hover:opacity-900 hover:bg-blue-800 bg-black rounded-xl"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </span>
        )}
      </div>
    </Router>
  );
};


export default App;
