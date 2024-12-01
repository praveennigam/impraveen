import project1 from '../assets/project-1.jpg'
import project2 from '../assets/project-2.jpg'
import quiz from "../assets/quiz.jpeg";  // Import the quiz image directly

export const HERO_CONTENT = `I am a passionate full stack developer eager to start my career by crafting robust and scalable web applications. Having recently completed my studies in Computer Science, I have developed strong skills in front-end technologies like React, HTML, and CSS, as well as back-end technologies like Node.js, Express, and MongoDB. My goal is to leverage my knowledge and enthusiasm to create innovative solutions that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies, eager to create innovative and scalable web applications. With a degree in Computer Science, I have honed my skills in modern web development frameworks and tools such as React, Node.js, MongoDB, RDBMS, Python, and jQuery.

On the front-end, I am proficient in building responsive, user-friendly interfaces using React, CSS, React Material UI, Tailwind CSS, HTML, and Bootstrap. I focus on delivering exceptional user experiences through clean, maintainable code and intuitive designs. On the back-end, I leverage technologies like Node.js, Express, and MongoDB to build scalable APIs and server-side solutions. Additionally, I work with RDBMS for relational database management, ensuring data integrity and efficient storage.

My journey in web development began with a natural curiosity for technology and problem-solving, and it has evolved into a deep commitment to crafting solutions that are both innovative and user-centric. I thrive in collaborative environments where I can continuously learn and contribute to impactful projects.

Currently, I am working at Zehntech Pvt Ltd, where I am further developing my skills in building real-world applications and gaining hands-on experience with scalable systems. I am also passionate about exploring new technologies, staying active in the tech community, and always looking for opportunities to improve my craft.

As I continue to grow as a developer, I am excited about the future of web development and the opportunity to contribute to innovative solutions that make a difference.`;

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
  image: quiz,  // Directly use the imported image here
  userSite: "https://playwithpraveen.onrender.com/",
  adminSite: "",
  git: "",
  description: "A mobile quiz application that offers a variety of multiple-choice questions on various topics. Users can test their knowledge and track their scores. The app is designed to be user-friendly and visually appealing, built with React and integrated with Firebase for real-time data management.",
  technologies: ["React", "Tailwind", "HTML", "JavaScript", "CSS"]
}
];

export const CONTACT = {
  address: "Indore,India",
  phoneNo: "+91 9109481480 ",
  email: "praveennigam1999@gmail.com",
};
