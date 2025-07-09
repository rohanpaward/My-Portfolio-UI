// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGitAlt, FaNodeJs, FaReact, FaTools } from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
} from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Sequelize', icon: <SiSequelize className="text-indigo-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-400" /> },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen px-6  text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div
        className="text-center mb-16 flex flex-col items-center"
        variants={cardVariant}
      >
        <div className="flex items-center gap-2 justify-center mb-3">
          <FaTools className="text-yellow-400 text-3xl animate-spin-slow" />
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-tight">
            Tech Stack & Skills
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md">
          Technologies I’ve worked with and tools I use to build modern, performant apps.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-900 via-[#111111] to-gray-950 border border-yellow-400/10 p-6 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group"
            variants={cardVariant}
            whileHover={{ scale: 1.06 }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-300 group-hover:text-yellow-400">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
