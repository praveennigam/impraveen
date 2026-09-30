import { jsPDF } from "jspdf";

export const SKILLS = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "Git/GitHub",
  "Next.js",
];

export const HOBBIES = ["Playing Snooker", "Cricket", "Traveling"];

const SKILL_LINE = SKILLS.join(" | ");

const SUMMARY =
  "MERN Stack Developer with 1 year of professional experience building production web applications with React, Node.js, Express, and MongoDB. I build responsive interfaces with HTML, CSS, Tailwind CSS, and Bootstrap. At Elymento.ai I delivered Grolynk.com on the MERN stack, and built Xentto.ai with Next.js and TypeScript.";

const WORK = [
  {
    company: "Elymento.ai",
    role: "Software Engineer",
    period: "October 2025 - Present",
    bullets: [
      "Building product features and AI-driven web solutions, taking work from the interface through API-connected pages to a production release.",
      "Delivered Grolynk.com on the MERN stack: reusable UI components, dynamic routing, API integration, responsive layouts, and a production-ready setup.",
      "Delivered Xentto.ai with Next.js and TypeScript: page architecture, component-driven UI, API-connected sections, and responsive design across devices.",
    ],
  },
  {
    company: "Zehntech Pvt Ltd., Indore",
    role: "Software Engineer",
    period: "September 2024 - December 2024",
    bullets: ["Worked as a Software Engineer on web application projects and solutions."],
  },
];

const PROJECTS = [
  {
    title: "Grolynk.com",
    note: "Professional project at Elymento.ai",
    links: [{ label: "Live", value: "https://grolynk.com", href: "https://grolynk.com" }],
    description:
      "Business platform delivered on the MERN stack: reusable UI components, dynamic routing, API integration, responsive layouts, and a production-ready setup.",
  },
  {
    title: "Xentto.ai",
    note: "Professional project at Elymento.ai",
    links: [{ label: "Live", value: "https://xentto.ai", href: "https://xentto.ai" }],
    description:
      "AI product website built with Next.js and TypeScript: page architecture, component-driven UI, API-connected sections, and responsive design across devices.",
  },
  {
    title: "Food Delivery Website",
    links: [
      {
        label: "Live",
        value: "https://food-deliveryapp-frontend.onrender.com",
        href: "https://food-deliveryapp-frontend.onrender.com/#explore-menu",
      },
      {
        label: "GitHub",
        value: "https://github.com/praveennigam/deliveryApp",
        href: "https://github.com/praveennigam/deliveryApp",
      },
    ],
    description:
      "Food delivery platform with an admin panel, Stripe payments, menu browsing, and order tracking. Built with React, Node.js, Express, and MongoDB.",
  },
  {
    title: "E-Commerce Shopping Website",
    links: [
      { label: "Live", value: "https://user-67cg.onrender.com", href: "https://user-67cg.onrender.com/" },
      { label: "GitHub", value: "https://github.com/praveennigam/ShopByme", href: "https://github.com/praveennigam/ShopByme" },
    ],
    description:
      "Shopping site with user and admin panels, product browsing, cart management, and payments. Built with React, Node.js, Express, and MongoDB.",
  },
  {
    title: "BeatTube",
    links: [
      { label: "Live", value: "https://beatbypraveen.onrender.com", href: "https://beatbypraveen.onrender.com/" },
    ],
    description:
      "Video streaming platform for browsing videos, watching content, and managing playlists. Built with React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Quiz APK",
    links: [
      { label: "Live", value: "https://playwithpraveen.onrender.com", href: "https://playwithpraveen.onrender.com/" },
    ],
    description:
      "Quiz application with multiple-choice questions and score tracking. Built with React and Firebase.",
  },
  {
    title: "Employee Management System",
    links: [
      {
        label: "Live",
        value: "https://managementbypraveen.onrender.com",
        href: "https://managementbypraveen.onrender.com/",
      },
    ],
    description:
      "Role-based employee system for attendance, leave, tasks, and complaints, with real-time updates. Built with Node.js, Express, and Socket.IO.",
  },
];

const EDUCATION = [
  ["MCA, Software Engineering | CGPA 6.2", "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore | 2021 - October 2023"],
  ["BSc, Information Technology | CGPA 6.54", "Devi Ahilya Vishwavidyalaya, Indore | 2017 - May 2021"],
  ["12th Grade | 64.79%", "Madhya Pradesh Board of Secondary Education | June 2016 - May 2017"],
  ["10th Grade | 79.89%", "Madhya Pradesh Board of Secondary Education | June 2014 - May 2015"],
];

const CONTACT = [
  { label: "Email", value: "praveennigam1999@gmail.com", href: "mailto:praveennigam1999@gmail.com" },
  { label: "Phone", value: "+91 9109481480", href: "tel:+919109481480" },
  {
    label: "Address",
    value: "799, Sector R, Pioneer Institute, Indore, Madhya Pradesh, India, 452010",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/impraveen1999",
    href: "https://www.linkedin.com/in/impraveen1999/",
  },
  { label: "Portfolio", value: "impraveen.onrender.com", href: "https://impraveen.onrender.com/" },
  { label: "GitHub", value: "github.com/praveennigam", href: "https://github.com/praveennigam" },
];

export function createResumePdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });
  doc.setProperties({
    title: "Praveen Nigam - MERN Stack Developer",
    author: "Praveen Nigam",
    subject: "Resume",
    keywords: "MERN, React, Node.js, Express, MongoDB, Next.js, TypeScript, Software Engineer",
    creator: "Praveen Nigam",
  });
  doc.setLanguage("en-US");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const left = 48;
  const right = pageWidth - 48;
  const width = right - left;
  const bottom = pageHeight - 46;
  const top = 50;
  let y = top;

  const black = () => {
    doc.setTextColor(0, 0, 0);
    doc.setDrawColor(0, 0, 0);
  };

  const newPage = () => {
    doc.addPage();
    y = top;
  };

  const ensure = (height) => {
    if (y + height > bottom) newPage();
  };

  const useFont = (style, size) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    black();
  };

  const write = (value, { style = "normal", size = 11.5, indent = 0, leading = 16, gapAfter = 2 } = {}) => {
    useFont(style, size);
    const lines = doc.splitTextToSize(String(value), width - indent);
    lines.forEach((line) => {
      ensure(leading);
      doc.text(line, left + indent, y);
      y += leading;
    });
    y += gapAfter;
  };

  const section = (title) => {
    ensure(46);
    y += 12;
    useFont("bold", 13);
    doc.text(title, left, y);
    y += 4;
    doc.setLineWidth(0.8);
    black();
    doc.line(left, y, right, y);
    y += 14;
  };

  const bullet = (value) => {
    useFont("normal", 11.5);
    const textWidth = width - 16;
    const lines = doc.splitTextToSize(value, textWidth);
    lines.forEach((line, index) => {
      ensure(16);
      if (index === 0) doc.text("-", left, y);
      doc.text(line, left + 16, y);
      y += 16;
    });
    y += 2;
  };

  const labeledAt = (x, startY, maxWidth, label, value, href, size = 10) => {
    useFont("bold", size);
    const labelText = `${label}: `;
    const labelWidth = doc.getTextWidth(labelText);
    useFont("normal", size);
    const lines = doc.splitTextToSize(value, Math.max(40, maxWidth - labelWidth));
    let lineY = startY;
    lines.forEach((line, index) => {
      const textX = index === 0 ? x + labelWidth : x;
      if (index === 0) {
        useFont("bold", size);
        doc.text(labelText, x, lineY);
        useFont("normal", size);
      }
      doc.text(line, textX, lineY);
      if (href) {
        const textWidth = doc.getTextWidth(line);
        doc.link(textX, lineY - size, textWidth, size + 2, { url: href });
      }
      lineY += size + 3.5;
    });
    return lineY;
  };

  const contactSize = 8.5;
  useFont("bold", contactSize);
  const addressLabelWidth = doc.getTextWidth("Address: ");
  useFont("normal", contactSize);
  const addressValueWidth = doc.getTextWidth(
    "799, Sector R, Pioneer Institute, Indore, Madhya Pradesh, India, 452010"
  );
  const contactX = Math.max(222, right - addressLabelWidth - addressValueWidth);
  useFont("bold", 22);
  doc.text("Praveen Nigam", left, y);
  y += 24;
  useFont("bold", 13);
  doc.text("MERN Stack Developer", left, y);
  y += 17;
  useFont("bold", 12);
  doc.text("1 Year Professional Experience", left, y);
  const identityBottom = y + 16;

  let contactY = top;
  CONTACT.forEach((item) => {
    contactY = labeledAt(contactX, contactY, right - contactX, item.label, item.value, item.href, contactSize);
  });

  y = Math.max(identityBottom, contactY) + 6;
  doc.setLineWidth(0.8);
  black();
  doc.line(left, y, right, y);
  y += 4;

  section("Work Experience");
  write("1 year as a Software Engineer. At Elymento.ai, shipped Grolynk.com on the MERN stack and Xentto.ai with Next.js and TypeScript.", {
    style: "bold",
    size: 11.5,
    leading: 16,
    gapAfter: 6,
  });

  WORK.forEach((job) => {
    ensure(52);
    write(`${job.role}, ${job.company}`, { style: "bold", size: 12, leading: 16, gapAfter: 0 });
    write(job.period, { style: "bold", size: 11.5, leading: 15, gapAfter: 3 });
    job.bullets.forEach((item) => bullet(item));
    y += 6;
  });

  section("Professional Summary");
  write(SUMMARY, { size: 11.5, leading: 16, gapAfter: 2 });

  section("Skills");
  write(SKILL_LINE, { size: 11.5, leading: 16, gapAfter: 2 });

  section("Projects");
  PROJECTS.forEach((project) => {
    ensure(78);
    const title = project.note ? `${project.title} - ${project.note}` : project.title;
    write(title, { style: "bold", size: 12, leading: 16, gapAfter: 1 });
    project.links.forEach((link) => {
      useFont("bold", 11);
      const labelText = `${link.label}: `;
      const labelWidth = doc.getTextWidth(labelText);
      useFont("normal", 11);
      const valueLines = doc.splitTextToSize(link.value, width - labelWidth);
      valueLines.forEach((line, lineIndex) => {
        ensure(15);
        const textX = lineIndex === 0 ? left + labelWidth : left;
        if (lineIndex === 0) {
          useFont("bold", 11);
          doc.text(labelText, left, y);
          useFont("normal", 11);
        }
        doc.text(line, textX, y);
        const textWidth = doc.getTextWidth(line);
        doc.link(textX, y - 10, textWidth, 12, { url: link.href });
        y += 15;
      });
    });
    write(project.description, { size: 11.5, leading: 16, gapAfter: 8 });
  });

  section("Education");
  EDUCATION.forEach(([credential, detail]) => {
    write(credential, { style: "bold", size: 11.5, leading: 16, gapAfter: 0 });
    write(detail, { size: 11.5, leading: 16, gapAfter: 5 });
  });

  section("Hobbies");
  write(HOBBIES.join("  |  "), { size: 11.5, leading: 16, gapAfter: 0 });

  return doc;
}

export function downloadResumePdf() {
  createResumePdf().save("Praveen_Nigam_Resume.pdf");
}
