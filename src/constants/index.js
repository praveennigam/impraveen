import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import quiz from "../assets/quiz.jpeg";  

export const HERO_CONTENT = `I am a passionate full stack developer eager to start my career by crafting robust and scalable web applications. Having recently completed my studies in Computer Science, I have developed strong skills in front-end technologies like React, HTML, and CSS, as well as back-end technologies like Node.js, Express, and MongoDB. My goal is to leverage my knowledge and enthusiasm to create innovative solutions that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate full-stack developer who loves building web applications that are both functional and easy to use. I enjoy solving problems with technology and always strive to learn more and improve my skills.

On the front-end, I specialize in creating responsive and user-friendly interfaces using React, HTML, CSS, and tools like Tailwind CSS and Bootstrap. I focus on making sure users have a smooth experience when interacting with the websites and apps I build. In React, I have experience using state management and hooks to handle complex interactions and keep the app's state consistent and efficient.

On the back-end, I work with technologies like Node.js, Express, and MongoDB to build powerful APIs and manage data. I also work with relational databases to ensure the data is stored correctly and can be easily accessed when needed.

What excites me most about web development is the ability to create solutions that help people and make their lives easier. I enjoy working with others and learning from different experiences, and I always look for ways to improve and stay up-to-date with new technologies.

I am always looking forward to the next challenge in web development and the opportunity to create something meaningful and impactful.` ;

export const EXPERIENCES = [{
  year: "2021 - 2023",
  role: "Postgraduate Studies",
  institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore.",
  description: `Pursuing a Master's degree in Computer Science, focusing on advanced software development topics. Engaged in projects and collaborated with faculty on technology solutions.`,
  subjects: ["Master of Computer Applications"],
},
{
  year: "2017 - 2021",
  role: "Undergraduate Studies",
  institution: "Devi Ahilya Vishwavidyalaya, Indore.",
  description: `Completed a Bachelor's degree in Computer Science. Gained foundational knowledge in algorithms, data structures, and computer systems. Participated in coding competitions.`,
  subjects: ["B.sc in Information Technology."],
},
{
  year: "2016 - 2017",
  role: "12th Grade",
  institution: "Madhya Pradesh Board of Secondary Education.",
  description: `Completed higher secondary education with a focus on science subjects. Excelled in subjects like Physics, Chemistry, and Mathematics, preparing for undergraduate studies in engineering.`,
  subjects: ["Physics", "Chemistry", "Mathematics"],
},
{
  year: "2014 - 2015",
  role: "10th Grade",
  institution: "Madhya Pradesh Board of Secondary Education.",
  description: `Completed secondary education with high distinction. Developed a strong foundation in various subjects, particularly in science and mathematics, setting the stage for future academic pursuits.`,
  subjects: ["Science", "Mathematics", "English"],
},
];

export const PROJECTS = [{
  title: "Food Delivery Website",
  image: project1,
  userSite: "https://food-deliveryapp-frontend.onrender.com/#explore-menu",
  adminSite: "https://food-deliveryapp-admin.onrender.com",
  git: "https://github.com/praveennigam/deliveryApp",
  description: "An intuitive food delivery platform with an admin panel for restaurant management and a secure payment system using Stripe. Customers can easily browse restaurant menus, select dishes, and place orders. The website features real-time order tracking and seamless payment integration. Developed using HTML, CSS, React, Node.js, Express, and MongoDB.",
  technologies: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB"],
},
{
  title: "E-Commerce Shopping Website",
  image: project2,
  userSite: "https://user-67cg.onrender.com/",
  adminSite: "https://shopbyme.onrender.com/",
  git: "https://github.com/praveennigam/ShopByme",
  description: "A comprehensive e-commerce platform featuring both admin and user panels. The user panel offers a seamless shopping experience with product browsing, cart management, and secure payment processing. The admin panel allows for efficient product management, order tracking, and user management. Developed using HTML, CSS, React, Node.js, Express, and MongoDB. ( passcode 1234@4321  in Admin )",
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
  image: quiz,
  userSite: "https://playwithpraveen.onrender.com/",
  adminSite: "",
  git: "",
  description: "A mobile quiz application that offers a variety of multiple-choice questions on various topics. Users can test their knowledge and track their scores. The app is designed to be user-friendly and visually appealing, built with React and integrated with Firebase for real-time data management.",
  technologies: ["React", "Tailwind", "HTML", "JavaScript", "CSS"]
},
                         {
  "title": "Employee Management System",
  "image": "https://www.google.com/imgres?q=ems&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F011%2F176%2F734%2Fnon_2x%2Fmedical-symbol-of-the-emergency-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fems&docid=W4xpeGJOw3aSzM&tbnid=-XUDjGrxZPv18M&vet=12ahUKEwiPxuOD16GKAxWvjq8BHQpDKpAQM3oECFQQAA..i&w=980&h=980&hcb=2&ved=2ahUKEwiPxuOD16GKAxWvjq8BHQpDKpAQM3oECFQQAA",
  "userSite": "",
  "adminSite": "http://managementbypraveen.onrender.com/",
  "git": "",
 "description": "The Employee Management System is a server-side application designed to simplify employee management. It features role-based access control, allowing Admins, HR, and Employees to access specific functionalities. The system includes real-time complaint management with Socket.IO, offer letter generation using Nodemailer, and attendance tracking. HR can manage leave requests, salary slips, deductions, and increments. Managers can assign and track tasks, ensuring timely completion. The signup page is restricted to Admins in the industry version, with roles assigned by Admins. The system operates in a tree-based workflow, ensuring organized task management. it provides a modern, user-friendly interface.",
 "technologies": [
    "Node.js",
    "Express",
    "EJS",
    "CSS",
    "JavaScript"
  ]
}

];

export const CONTACT = {
  address: "Indore,India",
  phoneNo: "+91 9109481480 ",
  email: "praveennigam1999@gmail.com",
};
