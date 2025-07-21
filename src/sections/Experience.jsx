// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaHistory, FaLaptopCode, FaRobot } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const experiences = [
  {
    icon: <FaRobot />,
    logo: 'https://www.nicepng.com/png/detail/922-9228204_apj-abdul-kalam-missile-complex-defence-research-and.png',
    organization: 'DRDO',
    role: 'Intern – Robotics & ROS',
    period: 'Aug 2024 – Oct 2024',
    description:
      'Worked on a robotics project involving the Robot Operating System (ROS). Developed a web-based GUI to remotely control a bot, enabling real-time interaction and monitoring through a browser interface.',
    tech: ['ROS', 'Web GUI', 'HTML', 'CSS', 'JavaScript', 'Linux'],
  },
  {
    icon: <FaLaptopCode />,
    logo: 'https://assets.upstox.com/content/assets/images/ipo_logo/INE349Y01013.png',
    organization: 'IdeaForge Technologies',
    role: 'Software Developer Intern',
    period: 'Feb 2025 – Aug 2025',
    description:
      'Contributed to a drone-based Flight Test Management System (FTMS). Handled backend development using Node.js, Sequelize, and PostgreSQL and created interactive admin UI with React and Tailwind CSS.',
    tech: ['Next.js', 'Node.js', 'Hapi.js', 'Sequelize', 'PostgreSQL', 'Material UI'],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Experience = () => {
  return (
    <section id="experience" className="-mt-10 px-6">
      <motion.div
        className="text-center mb-16 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 text-yellow-400 mt-15 md:-mt-1">
          <FaHistory className="text-3xl md:text-4xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Experience Timeline
          </h2>
        </div>
        <p className="text-gray-400 text-sm mt-2 max-w-md">
          A journey through my internships, collaborations, and real-world learning.
        </p>
      </motion.div>

      <div className="relative border-l border-gray-700 max-w-4xl mx-auto -mt-4 md:-mt-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.organization}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 ml-6 relative"
          >
            {/* Timeline icon */}
            <div className="absolute -left-7 top-1 text-yellow-400 text-xl">
              {exp.icon}
            </div>

            {/* Card */}
            <div className="bg-gradient-to-b from-gray-900 via-[#111111] to-gray-950 border border-yellow-400/10 p-6 rounded-2xl shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={exp.logo}
                  alt={exp.organization}
                  className="w-12 h-12 object-contain rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-1">
                    <MdWork className="text-yellow-400" />
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.organization}</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 italic mb-2">{exp.period}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{exp.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
