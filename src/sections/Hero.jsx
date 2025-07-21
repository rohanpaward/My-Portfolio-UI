// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaBriefcase, FaPhone } from 'react-icons/fa';
import profile from '../assets/Heroimg.png';

const Hero = () => {
  return (
    <section className="h-screen  text-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* ✅ Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-2 border-white/10"
        >
          <div className="relative no-bg z-10">
            <img
              src={profile}
              alt="Rohan's profile"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>

        {/* ✅ Right - Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Hey, I'm <span className="text-[#ffd700] relative stroke-effect">Rohan</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-xl">
            Full-Stack Developer & AI Enthusiast crafting modern, performant web experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center md:justify-start">
            <a href="#experience" className="flex items-center gap-2 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <FaBriefcase className="text-lg" />
                View Experience
              </motion.button>
            </a>

            <a href="#contact" className="flex items-center gap-2 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <FaPhone className="text-lg" />
                Contact Me
              </motion.button>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
