import { url } from "inspector";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Tech Stack", link: "#tech" },
  { name: "Work Experience", link: "#work-experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I enjoy breaking down complex problems into clean, maintainable, and efficient code.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always learning. Always building.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
		id: 5,
		title: "Beyond the Code: Thinking in DSA",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-[35rem] w-[20rem] opacity-65",
		titleClassName: "mt-20 items-start",
		img: "/lc.png",
		spareImg: "/grid.svg",
	},
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Reflectly - A Mood Tracking Website",
    des: "Track your mood everyday of the year!",
    img: "/p6.png",
    iconLists: [
      "/js.svg",
      "/next.svg",
      "/netlify.svg",
      "/tail.svg",
      "/firebase-icon.svg",
    ],
    link: "https://reflectly-mood-tracker.netlify.app/",
  },
  {
    id: 1,
    title: "ScreenSense - Movie Recommender System",
    des: "Unlock your next favorite movie with a recommender system!",
    img: "/p1.svg",
    iconLists: [
      "/python-5.svg",
      "/streamlit.svg",
      "/numpy.svg",
      "/Matplotlib.svg",
      "/tensorflow.svg",
    ],
    link: "https://screensense-ml.onrender.com/",
  },
  {
    id: 2,
    title: "Summize - An Article Summarizer",
    des: "Summarize any text instantly with smart, concise insights!",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/redux.svg", "/vite.svg", "/gpt4.svg"],
    link: "https://article-summarizer-kappa-nine.vercel.app",
  },
  {
    id: 5,
    title: "A Personal Portfolio Website",
    des: "Highlighting my journey, skills, and creations in one place!",
    img: "/p5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/re.svg"],
    link: "./",
  },
  {
    id: 3,
    title: "Weather App",
    des: "Stay updated with accurate, real-time weather forecasts!",
    img: "/p4.svg",
    iconLists: ["/html.svg", "/tail.svg", "js.svg"],
    link: "https://gentle-forecast.vercel.app",
  },
  {
    id: 4,
    title: "To Do List App",
    des: "Organize your day effortlessly with a smart, simple to-do list!",
    img: "/p3.png",
    iconLists: ["/html.svg", "/tail.svg", "/css.svg", "/js.svg"],
    link: "https://to-do-list-app-ochre-five.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Sambodhi-Roy",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/SambodhiRoy",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/sambodhi-roy/",
  },
];
