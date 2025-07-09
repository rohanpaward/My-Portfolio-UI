// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Real-Time Whiteboard',
    description:
      'Collaborative whiteboard with drawing tools, sticky notes, undo/redo, and real-time sync via Socket.io.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Socket.io', 'Node.js'],
    github: 'https://github.com/rohanpaward/RealTimeWhiteBoard',
    live: 'https://rohanpaward.github.io/RealTimeWhiteBoard/',
  },
  {
    title: 'Flight Test Management System',
    description:
      'Admin panel to manage drone test requirements, platforms, and test history using Sequelize + Next.js.',
    tech: ['React', 'PostgreSQL', 'Sequelize'],
    github: null, // or remove this field entirely
    note: 'Company Project - Private Repo',
  },
  {
    title: 'Real-Time Location Tracker',
    description:
      'A real-time web app built with EJS and Express.js that enables users to share and monitor live geographical locations on an interactive map. Built for speed, clarity, and collaboration.',
    tech: ['JavaScript', 'Express.js', 'EJS', 'Socket.io'],
    github: 'https://github.com/rohanpaward/TRealTimeTracker',
  },
  {
    title: 'Bubble Pop Game',
    description:
      'Fast-paced bubble-popping frenzy! Match bubbles to the target value in 60 seconds. Power-ups and leaderboard included!',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas'],
    github: 'https://github.com/rohanpaward/Bubble_Game',
  },
  {
    title: 'Login & Signup System',
    description:
      'A secure authentication system built with Hapi.js featuring encrypted password handling, server-side validation using Joi, and error handling with appropriate HTTP codes.',
    tech: ['Node.js', 'Hapi.js', 'Joi', 'bcrypt', 'PostgreSQL'],
    github: 'https://github.com/rohanpaward/Login_for',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen text-white px-6 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      {/* Heading */}
      <div className="text-center mb-12 flex flex-col items-center mt-6 md:-mt-70">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-400 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.654 0-3 1.346-3 3v6h6v-6c0-1.654-1.346-3-3-3z"
            />
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="text-gray-400 text-sm mt-2 max-w-md">
          A collection of selected work showcasing full-stack development & real-time apps.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-gray-900 via-[#111111] to-gray-950 border border-yellow-400/10 p-6 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-400 text-black text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline flex items-center gap-2"
                >
                  <FaGithub className="text-lg" />
                  View Code
                </a>
              ) : (
                <span className="text-gray-400 italic">Private Project</span>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex items-center gap-2 text-yellow-400 hover:underline"
                >
                  <BiLinkExternal className="text-lg" /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
