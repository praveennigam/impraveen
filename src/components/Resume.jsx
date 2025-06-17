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
  {
    title: "BeatTube",
    image: "https://www.videocrypt.com/website_assets/img/product/two-way-streaming.webp",
    userSite: "https://beatbypraveen.onrender.com/",
    adminSite: "",
    git: "",
    description: "A video streaming platform similar to Netflix, offering a rich user experience with a variety of video content. Users can browse, watch, and manage their playlists seamlessly. Developed using React, Node.js, Express, and MongoDB.",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Quiz APK",
    userSite: "https://playwithpraveen.onrender.com/",
    adminSite: "",
    git: "",
    description: "A mobile quiz application that offers a variety of multiple-choice questions on various topics. Users can test their knowledge and track their scores. The app is designed to be user-friendly and visually appealing, built with React and integrated with Firebase for real-time data management.",
    technologies: ["React", "Tailwind", "HTML", "JavaScript", "CSS"]
  }
  ,
  {
    "title": "Employee Management System",
    "adminSite": "http://managementbypraveen.onrender.com/",
  "description": "The Employee Management System simplifies employee management with role-based access for Admins, HR, and Employees. It includes real-time complaint management with Socket.IO, offer letter generation via Nodemailer, and attendance tracking. HR manages leave requests, salary slips, deductions, and increments. Managers assign and track tasks. The signup page is restricted to Admins, with roles assigned by them. The system uses a tree-based workflow for organized task management and offers a modern, user-friendly interface.",
    "technologies": [
      "Node.js",
      "Express",
      "EJS",
      "CSS",
      "JavaScript"
    ]
  }
  
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
    <div className="resume-container mx-auto max-w-4xl bg-white p-3 rounded-lg shadow-md text-gray-800 mt-8">
      <header className="bg-blue-500 text-white p-3 pt-3 rounded-t-lg mb-2 text-center">
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
          I am a passionate full-stack developer who loves building web applications that are functional and user-friendly. I specialize in creating responsive interfaces using React, HTML, CSS, Tailwind CSS, and Bootstrap. In React, I leverage state management and hooks to handle complex interactions efficiently.On the back-end, I work with Node.js, Express, and MongoDB to build APIs and manage data. What excites me about web development is the ability to create solutions that help people and make their lives easier. I’m always eager to learn new technologies and collaborate with others to build impactful applications.
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

      <section className="bg-gray-100 p-3 pb-10 mt-4 rounded-lg shadow-sm mb-8 text-xs">
        <h2 className="text-base font-semibold text-blue-500 border-b-2 border-blue-500 pb-2 mb-2">Education</h2>
        <ul className="list-disc pl-5 space-y-3">
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

      <section className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4   text-xs">
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
