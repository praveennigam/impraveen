import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { ABOUT_TEXT, PROJECTS, res } from "../constants";
import { HOBBIES, SKILLS, downloadResumePdf } from "../resumePdf";


const UI_EDUCATION = [
  "MCA in Software Engineering - Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021 - Oct 2023) | 6.2 CGPA",
  "BSc in Computer Science in Information Technology - Devi Ahilya Vishwavidyalaya, Indore (2017 - May 2021) | 6.54 CGPA",
  "12th Grade - Madhya Pradesh Board of Secondary Education (Jun 2016 - May 2017) | 64.79%",
  "10th Grade - Madhya Pradesh Board of Secondary Education (Jun 2014 - May 2015) | 79.89%",
];

const UI_WORK = [
  {
    company: "Zehntech Pvt Ltd., Indore",
    role: "Software Engineer",
    period: "September 2024 - December 2024",
    description: "Worked as a Software Engineer on innovative projects and solutions.",
  },
  {
    company: "Elymento.ai",
    role: "Software Engineer",
    period: "October 2025 - Present",
    description: "Working on product development and AI-driven solutions.",
  },
];

const Resume = () => {
  useEffect(() => {
    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) downloadButton.style.display = "inline-flex";
  }, []);

  return (
    <div
      className="resume-container mt-20 mx-auto w-full rounded-xl bg-transparent p-1 text-gray-800"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <header className="mb-4 rounded-lg border border-cyan-300/20 bg-slate-900/40 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={res}
                alt="Profile"
                className="h-16 w-16 rounded-full border-4 border-cyan-600 object-cover shadow-md sm:h-24 sm:w-24"
              />
              <div>
                <h1 className="text-xl font-bold text-cyan-100 sm:text-3xl">Praveen Nigam</h1>
                <p className="text-sm font-semibold text-cyan-200">MERN Stack Developer</p>
                <p className="mt-1 break-all text-[11px] leading-snug text-slate-100 sm:break-normal sm:text-xs">
                  <a href="mailto:praveennigam1999@gmail.com" className="font-medium text-cyan-200">
                    praveennigam1999@gmail.com
                  </a>{" "}
                  <span className="hidden sm:inline">|</span>{" "}
                  <a href="tel:+919109481480" className="font-medium text-cyan-200">
                    +91 9109481480
                  </a>
                </p>
              </div>
            </div>
            <button
              className="download-button mt-1 inline-flex w-max shrink-0 items-center self-end whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-2 py-1 text-[10px] font-medium text-white shadow-md transition hover:brightness-110 sm:self-auto sm:px-3 sm:text-xs"
              onClick={downloadResumePdf}
              style={{ display: "none" }}
              type="button"
            >
              <FaDownload className="mr-0 text-[9px] sm:mr-1.5 sm:text-[11px]" />
              <span className="hidden whitespace-nowrap sm:inline">Download PDF</span>
            </button>
          </div>
        </header>

        <section className="mb-4 rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
          <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
            Contact Information
          </h2>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:praveennigam1999@gmail.com" className="text-cyan-200">
              praveennigam1999@gmail.com
            </a>
          </p>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+919109481480" className="text-cyan-200">
              +91 9109481480
            </a>
          </p>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">Address:</span> 799, Sector R, Pioneer Institute, Indore,
            Madhya Pradesh, India, 452010
          </p>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/impraveen1999/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200"
            >
              linkedin.com/in/impraveen1999
            </a>
          </p>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">Portfolio:</span>{" "}
            <a
              href="https://impraveen.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200"
            >
              impraveen.onrender.com
            </a>
          </p>
          <p className="text-xs text-slate-100">
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/praveennigam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200"
            >
              github.com/praveennigam
            </a>
          </p>
        </section>

        <section className="mb-4 rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
          <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-slate-100">{ABOUT_TEXT}</p>
        </section>

        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <section className="rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
            <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
              Key Skills
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-xs">
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
            <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
              Hobbies
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-xs">
              {HOBBIES.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mb-4 rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
          <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
            Education
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-xs">
            {UI_EDUCATION.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4 rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
          <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
            Work Experience
          </h2>
          <ul className="space-y-2 text-xs">
            {UI_WORK.map((item) => (
              <li key={item.company}>
                <p className="font-semibold text-slate-100">{item.company}</p>
                <p>
                  <span className="font-semibold">{item.role}</span> ({item.period})
                </p>
                <p className="text-slate-100">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-cyan-300/20 bg-slate-900/35 p-3 text-slate-100">
          <h2 className="mb-2 border-b border-cyan-300/40 pb-1 text-base font-semibold text-cyan-100">
            Projects
          </h2>
          {PROJECTS.map((project) => (
            <div key={project.title} className="mb-2 text-[10px]">
              <h3 className="font-semibold text-slate-100">{project.title}</h3>
              {project.userSite && (
                <p>
                  <span className="font-semibold">User:</span>{" "}
                  <a href={project.userSite} target="_blank" rel="noopener noreferrer" className="text-cyan-200">
                    {project.userSite}
                  </a>
                </p>
              )}
              {project.adminSite && (
                <p>
                  <span className="font-semibold">Admin:</span>{" "}
                  <a href={project.adminSite} target="_blank" rel="noopener noreferrer" className="text-cyan-200">
                    {project.adminSite}
                  </a>
                </p>
              )}
              {project.git && (
                <p>
                  <span className="font-semibold">Git:</span>{" "}
                  <a href={project.git} target="_blank" rel="noopener noreferrer" className="text-cyan-200">
                    {project.git}
                  </a>
                </p>
              )}
              <p className="text-slate-100">{project.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;
