import  { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { ABOUT_TEXT, PROJECTS, res } from "../constants";

const SKILLS = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "Git/GitHub",
];

const EDUCATION = [
  "MCA in Software Engineering - Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021 - Oct 2023) | 6.2 CGPA",
  "BSc in Computer Science in Information Technology - Devi Ahilya Vishwavidyalaya, Indore (2017 - May 2021) | 6.54 CGPA",
  "12th Grade - Madhya Pradesh Board of Secondary Education (Jun 2016 - May 2017) | 64.79%",
  "10th Grade - Madhya Pradesh Board of Secondary Education (Jun 2014 - May 2015) | 79.89%",
];

const WORK = [
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
  const [isPdfMode, setIsPdfMode] = useState(false);

  const downloadPDF = () => {
    const element = document.querySelector(".resume-container");
    const options = {
      margin: [0.08, 0.1],
      filename: "Praveen_Nigam_Resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 1.8, useCORS: true },
      jsPDF: { unit: "in", format: [8.5, 11], orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) downloadButton.style.display = "none";
    setIsPdfMode(true);

    setTimeout(() => {
      html2pdf()
        .from(element)
        .set(options)
        .save()
        .finally(() => {
          setIsPdfMode(false);
          if (downloadButton) downloadButton.style.display = "inline-flex";
        });
    }, 50);
  };

  useEffect(() => {
    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) downloadButton.style.display = "inline-flex";
  }, []);

  const shortDescription = (text) => {
    const firstSentence = text.split(". ")[0];
    const compact = firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
    return compact.length > 85 ? `${compact.slice(0, 82)}...` : compact;
  };

  const projectItems = PROJECTS;

  return (
    <div
      className={`resume-container mt-20 mx-auto w-full rounded-xl text-gray-800 ${
        isPdfMode ? "mt-0 bg-white p-2 text-[9px] leading-[1.3]" : "bg-transparent p-1"
      }`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {isPdfMode && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "72%",
            opacity: 0.1,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
      <header
        className={`rounded-lg border ${
          isPdfMode ? "mb-2 p-3" : "mb-4 p-4"
        } ${
          isPdfMode
            ? "border-slate-200 bg-gradient-to-r from-slate-50 to-cyan-50"
            : "border-cyan-300/20 bg-slate-900/40"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={res}
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-cyan-600 object-cover shadow-md"
            />
            <div>
              <h1 className={`text-3xl font-bold ${isPdfMode ? "text-slate-900" : "text-cyan-100"}`}>
                Praveen Nigam
              </h1>
              <p className={`text-sm font-semibold ${isPdfMode ? "text-cyan-700" : "text-cyan-200"}`}>
                MERN Stack Developer
              </p>
              <p className={`mt-1 text-xs ${isPdfMode ? "text-slate-700" : "text-slate-100"}`}>
                <a
                  href="mailto:praveennigam1999@gmail.com"
                  className={`font-medium ${isPdfMode ? "text-cyan-700" : "text-cyan-200"}`}
                >
                  praveennigam1999@gmail.com
                </a>{" "}
                |{" "}
                <a
                  href="tel:+919109481480"
                  className={`font-medium ${isPdfMode ? "text-cyan-700" : "text-cyan-200"}`}
                >
                  +91 9109481480
                </a>
              </p>
            </div>
          </div>
          <button
            className="download-button mt-1 inline-flex shrink-0 items-center whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-3 py-1.5 text-xs font-medium text-white shadow-md transition hover:brightness-110"
            onClick={downloadPDF}
            style={{ display: "none" }}
          >
            <FaDownload className="mr-1.5 text-[11px]" />
            <span className="whitespace-nowrap">Download PDF</span>
          </button>
        </div>
      </header>

      <section
        className={`rounded-lg border ${
          isPdfMode ? "mb-2 p-2" : "mb-4 p-3"
        } ${
          isPdfMode ? "border-slate-200 bg-slate-50" : "border-cyan-300/20 bg-slate-900/35 text-slate-100"
        }`}
      >
        <h2
          className={`mb-2 border-b pb-1 text-base font-semibold ${
            isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
          }`}
        >
          Contact Information
        </h2>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:praveennigam1999@gmail.com" className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}>
            praveennigam1999@gmail.com
          </a>
        </p>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+919109481480" className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}>
            +91 9109481480
          </a>
        </p>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">Address:</span> 799, Sector R, Pioneer Institute, Indore,
          Madhya Pradesh, India, 452010
        </p>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/impraveen1999/"
            target="_blank"
            rel="noopener noreferrer"
            className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
          >
            linkedin.com/in/impraveen1999
          </a>
        </p>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">Portfolio:</span>{" "}
          <a
            href="https://impraveen.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
          >
            impraveen.onrender.com
          </a>
        </p>
        <p className={`text-xs ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>
          <span className="font-semibold">GitHub:</span>{" "}
          <a
            href="https://github.com/praveennigam"
            target="_blank"
            rel="noopener noreferrer"
            className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
          >
            github.com/praveennigam
          </a>
        </p>
      </section>

      <section
        className={`rounded-lg border ${
          isPdfMode ? "mb-2 p-2" : "mb-4 p-3"
        } ${
          isPdfMode ? "border-slate-200 bg-slate-50" : "border-cyan-300/20 bg-slate-900/35 text-slate-100"
        }`}
      >
        <h2
          className={`mb-2 border-b pb-1 text-base font-semibold ${
            isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
          }`}
        >
          Professional Summary
        </h2>
        <p className={`text-xs leading-relaxed ${isPdfMode ? "text-slate-700" : "text-slate-100"}`}>{ABOUT_TEXT}</p>
      </section>

      <div className={`${isPdfMode ? "mb-2 gap-2" : "mb-4 gap-3"} grid sm:grid-cols-2`}>
        <section
          className={`rounded-lg border ${isPdfMode ? "p-2" : "p-3"} ${
            isPdfMode ? "border-slate-200 bg-slate-50" : "border-cyan-300/20 bg-slate-900/35 text-slate-100"
          }`}
        >
          <h2
            className={`mb-2 border-b pb-1 text-base font-semibold ${
              isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
            }`}
          >
            Key Skills
          </h2>
          <ul className={`list-disc pl-5 ${isPdfMode ? "space-y-0.5 text-[9px]" : "space-y-1 text-xs"}`}>
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section
          className={`rounded-lg border ${isPdfMode ? "p-2" : "p-3"} ${
            isPdfMode ? "border-slate-200 bg-slate-50" : "border-cyan-300/20 bg-slate-900/35 text-slate-100"
          }`}
        >
          <h2
            className={`mb-2 border-b pb-1 text-base font-semibold ${
              isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
            }`}
          >
            Hobbies
          </h2>
          <ul className={`list-disc pl-5 ${isPdfMode ? "space-y-0.5 text-[9px]" : "space-y-1 text-xs"}`}>
            <li>Playing Snooker</li>
            <li>Cricket</li>
            <li>Traveling</li>
          </ul>
        </section>
      </div>

      <section
        className={`rounded-lg border ${
          isPdfMode ? "mb-2 p-2" : "mb-4 p-3"
        } ${
          isPdfMode ? "border-slate-200 bg-slate-50" : "border-cyan-300/20 bg-slate-900/35 text-slate-100"
        }`}
      >
        <h2
          className={`mb-2 border-b pb-1 text-base font-semibold ${
            isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
          }`}
        >
          Education
        </h2>
        <ul className={`list-disc pl-5 ${isPdfMode ? "space-y-1 text-[9px]" : "space-y-2 text-xs"}`}>
          {EDUCATION.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className={`rounded-lg border ${
          isPdfMode ? "mb-2 p-2 border-slate-200 bg-slate-50" : "mb-4 p-3 border-cyan-300/20 bg-slate-900/35 text-slate-100"
        }`}
      >
        <h2
          className={`mb-2 border-b pb-1 text-base font-semibold ${
            isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
          }`}
        >
          Work Experience
        </h2>
        <ul className={`${isPdfMode ? "space-y-1 text-[9px]" : "space-y-2 text-xs"}`}>
          {WORK.map((item) => (
            <li key={item.company}>
              <p className={`font-semibold ${isPdfMode ? "text-slate-800" : "text-slate-100"}`}>{item.company}</p>
              <p>
                <span className="font-semibold">{item.role}</span> ({item.period})
              </p>
              <p className={isPdfMode ? "text-slate-700" : "text-slate-100"}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={`rounded-lg border ${
          isPdfMode ? "p-2 border-slate-200 bg-slate-50" : "p-3 border-cyan-300/20 bg-slate-900/35 text-slate-100"
        }`}
      >
        <h2
          className={`mb-2 border-b pb-1 text-base font-semibold ${
            isPdfMode ? "border-cyan-600 text-cyan-700" : "border-cyan-300/40 text-cyan-100"
          }`}
        >
          Projects
        </h2>
        {projectItems.map((project) => (
          <div key={project.title} className={`${isPdfMode ? "mb-1 text-[9px] leading-[1.2]" : "mb-2 text-[10px]"}`}>
            <h3 className={`font-semibold ${isPdfMode ? "text-slate-900" : "text-slate-100"}`}>{project.title}</h3>
            {project.userSite && (
              <p>
                <span className="font-semibold">User:</span>{" "}
                <a
                  href={project.userSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
                >
                  {project.userSite}
                </a>
              </p>
            )}
            {!isPdfMode && project.adminSite && (
              <p>
                <span className="font-semibold">Admin:</span>{" "}
                <a
                  href={project.adminSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
                >
                  {project.adminSite}
                </a>
              </p>
            )}
            {!isPdfMode && project.git && (
              <p>
                <span className="font-semibold">Git:</span>{" "}
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isPdfMode ? "text-cyan-700" : "text-cyan-200"}
                >
                  {project.git}
                </a>
              </p>
            )}
            <p className={isPdfMode ? "text-slate-700" : "text-slate-100"}>
              {isPdfMode ? shortDescription(project.description) : project.description}
            </p>
          </div>
        ))}
      </section>
      </div>
    </div>
  );
};

export default Resume;
