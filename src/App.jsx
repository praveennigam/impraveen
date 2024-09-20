import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume"; // Import the Resume component
import { FaFilePdf } from "react-icons/fa"; // Import the Resume icon

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />

          {/* Navigation Button */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
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
      </div>
    </Router>
  );
};

export default App;
