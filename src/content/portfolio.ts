/**
 * EDIT THIS FILE to update all content, links and stats on the portfolio.
 * Anything marked [PLACEHOLDER] should be replaced with real information.
 */

export const profile = {
  name: "Yuvraj Singh",
  logo: "YUVRAJ",
  tagline: "BTech CSE Student | Java Developer | Problem Solver",
  intro:
    "I'm a Computer Science undergraduate focused on software development. I spend my time writing Java, sharpening my Data Structures & Algorithms fundamentals, and building for the web — learning by shipping small, real projects.",
  email: "yuvraj@example.com", // [PLACEHOLDER] replace with real email
  githubUrl: "https://github.com/yuvrajsingh24042005-arch",
  linkedinUrl: "https://www.linkedin.com/in/yuvraj-singh-b09048362",
  location: "India", // [PLACEHOLDER]
};

export const about = {
  heading: "About Me",
  intro: "Curious, focused, and always building.",
  paragraphs: [
    "I am a BTech Computer Science student with a strong interest in software development and problem solving. I am currently focused on learning Java, strengthening my Data Structures & Algorithms fundamentals, and exploring Web Development.",
    "I enjoy the process of breaking down a coding problem, understanding the logic behind it, and finding a clean, efficient solution. That mindset has helped me solve 50+ problems on LeetCode so far, and I keep practicing every day to improve.",
    "Beyond problem solving, I love building practical projects that let me apply what I learn. My goal is to become a Full Stack Developer and create useful, well-crafted applications that solve real problems.",
    "I am still early in my journey, but I am committed to learning consistently, improving my skills, and turning ideas into working products.",
  ],
  highlights: [
    { label: "Degree", value: "BTech CSE" },
    { label: "Focus", value: "Java • DSA • Web" },
    { label: "LeetCode", value: "50+ Solved" },
    { label: "Goal", value: "Full Stack Developer" },
  ],
};

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Terminal",
    skills: [
      { name: "Java", icon: "Coffee" },
      { name: "C", icon: "Code2" },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    icon: "Code",
    skills: [
      { name: "Arrays", icon: "List" },
      { name: "Strings", icon: "Type" },
      { name: "Binary Search", icon: "Search" },
      { name: "Two Pointers", icon: "MoveHorizontal" },
      { name: "Sliding Window", icon: "PanelTop" },
      { name: "Sorting", icon: "ArrowUpDown" },
      { name: "Basic Hashing", icon: "Hash" },
      { name: "Problem Solving", icon: "Lightbulb" },
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: [
      { name: "HTML", icon: "FileCode2" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "Braces" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Monitor" },
      { name: "Firebase", icon: "Flame" },
    ],
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    description: "Daily practice on DSA problems and contest questions.",
    url: "https://leetcode.com/u/yuvrajsinghh24/",
    stat: "50+ Problems Solved",
  },
  {
    platform: "GitHub",
    description: "My projects, code, and development work.",
    url: "https://github.com/yuvrajsingh24042005-arch",
  },
  {
    platform: "CodeChef",
    description: "My competitive programming profile.",
    url: "https://www.codechef.com/users/equal_glim_45",
  },
];

export const projects = [
  {
    name: "VitalSync",
    description:
      "A health and wellness application designed to help users monitor and manage their daily health-related activities.",
    tech: ["Java", "Android", "Firebase"],
    githubUrl: "https://github.com/yuvrajsingh24042005-arch/VitalSync.git",
    demoUrl: "",
  },
  {
    name: "Coming Soon",
    description:
      "My upcoming full-stack project. Details will be added once development is complete.",
    tech: [],
    githubUrl: "",
    demoUrl: "",
    isPlaceholder: true,
  },
];

export const achievements = [
  {
    title: "Certification title", // [PLACEHOLDER]
    meta: "Issuer • Year", // [PLACEHOLDER]
    description: "Placeholder — add a certification you have actually completed.",
    kind: "Certification",
  },
  {
    title: "Coding milestone", // [PLACEHOLDER]
    meta: "Platform • Year", // [PLACEHOLDER]
    description: "Placeholder — add a real milestone, e.g. a problem-count or rating goal you reached.",
    kind: "Milestone",
  },
  {
    title: "Contest participation", // [PLACEHOLDER]
    meta: "Event • Year", // [PLACEHOLDER]
    description: "Placeholder — add hackathons or contests you took part in.",
    kind: "Contest",
  },
  {
    title: "Coursework highlight", // [PLACEHOLDER]
    meta: "College • Semester", // [PLACEHOLDER]
    description: "Placeholder — add academic work you're proud of.",
    kind: "Academic",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Coding Profiles", href: "#profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
