// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY < window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: "Let's Connect", href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-6 py-6 shadow-lg"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-yellow-400">Rohan.Dev</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8 font-semibold text-base">
              {navItems.slice(0, -1).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={navItems[3].href}
                  className="bg-yellow-400 text-black px-5 py-2.5 rounded-full font-medium shadow hover:bg-yellow-300 transition text-base"
                >
                  {navItems[3].name}
                </a>
              </li>
            </ul>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.ul
                className="md:hidden mt-6 flex flex-col gap-5 px-4 text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-medium text-white hover:text-yellow-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
