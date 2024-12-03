import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const PROJECTS = [
  {
    title: "Food Delivery Website",
    userSite: "https://food-deliveryapp-frontend.onrender.com",
    adminSite: "https://food-deliveryapp-admin.onrender.com",
    git: "https://github.com/praveennigam/deliveryApp",
    description:
      "An intuitive food delivery platform with an admin panel for restaurant management and a secure payment system using Stripe. Customers can easily browse restaurant menus, select dishes, and place orders. The website features real-time order tracking and seamless payment integration. Developed using HTML, CSS, React, Node.js, Express, and MongoDB.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-Commerce Shopping Website",
    userSite: "https://user-67cg.onrender.com",
    adminSite: "https://shopbyme.onrender.com",
    git: "https://github.com/praveennigam/ShopByme",
    description:
      "A comprehensive e-commerce platform featuring both admin and user panels. The user panel offers a seamless shopping experience with product browsing, cart management, and secure payment processing. The admin panel allows for efficient product management, order tracking, and user management. Developed using HTML, CSS, React, Node.js, Express, and MongoDB.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
  },
];

const Resume = () => {
  const downloadPDF = () => {
    const element = document.querySelector(".resume-container");
    const options = {
      margin: [0.2, 0.2],
      filename: "Praveen_Nigam_Resume.pdf",
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: [8.5, 11],
        orientation: "portrait",
      },
    };

    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) {
      downloadButton.style.display = "none";
    }

    html2pdf()
      .from(element)
      .set(options)
      .save()
      .finally(() => {
        if (downloadButton) {
          downloadButton.style.display = "block";
        }
      });
  };

  useEffect(() => {
    const downloadButton = document.querySelector(".download-button");
    if (downloadButton) {
      downloadButton.style.display = "block";
    }
  }, []);

  return (
    <div className="resume-container mx-auto max-w-4xl bg-white p-3 rounded-lg shadow-md text-gray-800 mt-16">
      <header className="bg-blue-500 text-white p-3 pt-4 rounded-t-lg mb-2 text-center">
        <h1 className="text-lg font-semibold">Praveen Nigam</h1>
        <p className="text-sm">Mern Stack Developer</p>
      </header>

      <div className="flex justify-center mb-3">
        <button
          className="download-button bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-700"
          onClick={downloadPDF}
          style={{ display: "none" }}
        >
          <FaDownload className="inline-block mr-2" />
          <span className="inline-block">Download PDF</span>
        </button>
      </div>

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4 text-sm">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-1">Contact Information</h2>
        <p className="mb-2 text-black hover:underline text-xs">
          Email:{" "}
          <a
            href="mailto:praveennigam1999@gmail.com"
            className="text-blue-500 hover:underline text-xs"
          >
            praveennigam1999@gmail.com
          </a>
        </p>
        <p className="mb-1 text-black hover:underline text-xs">
          Phone:{" "}
          <a href="tel:+919109481480" className="text-blue-500 hover:underline text-xs">
            +91 9109481480
          </a>
        </p>
        <p className="mb-1 text-xs">
          Address: 799, Sector R, Pioneer Institute, Indore, Madhya Pradesh, India, 452010
        </p>
        <p className="mb-1 text-xs">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/impraveen1999/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/impraveen1999
          </a>
        </p>
        <p className="mb-1 text-xs">
          Portfolio:{" "}
          <a
            href="https://impraveen.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            impraveen.onrender.com
          </a>
        </p>
        <p className="mb-1 text-xs">
          GitHub:{" "}
          <a
            href="https://github.com/praveennigam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/praveennigam
          </a>
        </p>
      </section>

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4 text-sm">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Professional Summary</h2>
        <p className="text-xs pb-2 mb-2">
          I am a passionate full stack developer eager to start my career by crafting robust and scalable web applications.
          Recently graduating with a degree in Computer Science, I have developed strong skills in front-end technologies like
          React, HTML, CSS, and BootStrap, as well as back-end technologies like Node.js, Express, and MongoDB. My journey in
          web development began with a strong curiosity for technology and problem-solving. I thrive in collaborative settings,
          and I am excited to apply my hands-on experience to create innovative solutions that deliver exceptional user experiences.
          Beyond coding, I enjoy exploring new technologies, staying active in the tech community, and am eager to continue learning
          in a professional environment.
        </p>
      </section>

      <div className="flex flex-wrap gap-3 mb-5">
        <section className="bg-gray-100 p-3 rounded-lg shadow-sm flex-1 min-w-[240px] text-xs">
          <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Key Skills</h2>
          <ul className="list-disc pl-5 mb-1 space-y-1 text-xs">
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap 4</li>
            <li>JavaScript</li>
            <li>OOPS Concepts</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-3 rounded-lg shadow-sm flex-1 min-w-[240px] text-xs">
          <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Hobbies</h2>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Playing Snooker</li>
            <li>Cricket</li>
            <li>Traveling</li>
          </ul>
        </section>
      </div>

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-8 text-xs">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Education</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>MCA in Software Engineering</strong> - Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021 - Oct 2023) Graduated with 6.2 CGPA
          </li>
          <li>
            <strong>BSc in Computer Science in Information Technology</strong> - Devi Ahilya Vishwavidyalaya, Indore (2017 - May 2021) Graduated with 6.54 CGPA
          </li>
          <li>
            <strong>12th Grade</strong> - Madhya Pradesh Board of Secondary Education (Jun 2016 - May 2017) Graduated with 64.79%
          </li>
          <li>
            <strong>10th Grade</strong> - Madhya Pradesh Board of Secondary Education (Jun 2014 - May 2015) Graduated with 79.89%
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4  text-xs">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Work Experience</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Zehntech Pvt Ltd. Indore</strong>
            <br />
            <b>Software Engineer</b> (September 2024 - Present)
            <br />
            Working as a Software Engineer on innovative projects and solutions.
          </li>
        </ul>
      </section>

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4 text-xs">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Projects</h2>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base font-semibold">{project.title}</h3>
            <p className="text-xs">
              <b>User:</b> <a href={project.userSite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{project.userSite}</a>
            </p>
            <p className="text-xs">
              <b>Admin:</b> <a href={project.adminSite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{project.adminSite}</a>
            </p>
            <p className="text-xs text-gray-600">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
