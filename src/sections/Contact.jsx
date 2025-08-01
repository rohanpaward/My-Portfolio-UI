// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaChevronDown, FaEnvelopeOpenText, FaPaperPlane } from 'react-icons/fa';
import { toast } from '../utils/toastUtils';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    reason: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://my-portfolio-node.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          reason: '',
          website: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // const planeAnimationStyle = {
  //   animation: 'movePlane 0.6s infinite ease-in-out'
  // };

  const planeKeyframes = `
    @keyframes movePlane {
      0% { transform: translateX(0); }
      50% { transform: translateX(6px); }
      100% { transform: translateX(0); }
    }
  `;
  // added
  return (
    <motion.section
      id="contact"
      className="min-h-screen text-white px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Add animation keyframes */}
      <style>{planeKeyframes}</style>

      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center gap-3 mb-5 md:mt-10 ">
          <FaEnvelopeOpenText className="text-yellow-400 text-3xl" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight text-center">
            Get In Touch
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-gray-900 via-[#111111] to-gray-950 border border-yellow-400/10 p-12 rounded-2xl  shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'name', type: 'text', label: 'Your Name' },
              { id: 'email', type: 'email', label: 'Your Email' },
              { id: 'phone', type: 'tel', label: 'Phone (optional)' },
              { id: 'subject', type: 'text', label: 'Subject' },
              { id: 'website', type: 'url', label: 'Website/Portfolio (optional)' }
            ].map(({ id, type, label }) => (
              <div key={id} className="relative group">
                <input
                  type={type}
                  id={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder=" "
                  required={id !== 'phone' && id !== 'website'}
                  className="peer w-full px-5 py-4 bg-black/30 text-white border mb-5 border-gray-600 rounded-xl placeholder-transparent 
             focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base leading-relaxed"
                />
                <label
                  htmlFor={id}
                  className="absolute left-4 px-1.5 -top-5 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:-top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-yellow-300"
                >
                  {label}
                </label>
              </div>
            ))}

            <div className="relative">
              <select
                id="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="appearance-none w-full px-4 py-4 bg-black/40 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
              >
                <option value=""> Reason For Contact </option>
                <option value="project">Project Collaboration</option>
                <option value="freelance">Freelance Inquiry</option>
                <option value="job">Job Opportunity</option>
                <option value="general">General Query</option>
              </select>
              <FaChevronDown className="absolute top-5 right-4 text-yellow-400 pointer-events-none" />
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer mt-9 md:mt-6 w-full left-4 top-3 px-4  bg-black/40 text-white border border-gray-700 rounded-lg placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute mt-7 md:mt-3 py-3 left-8 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:-top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300"
            >
              Message
            </label>
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`relative group text-black bg-yellow-400 px-7 py-3 font-bold rounded-full transition duration-300 flex items-center justify-center gap-2 ${loading && 'opacity-50 cursor-not-allowed'}`}
            >
              <FaPaperPlane
                className={`text-lg transition-transform ${loading ? 'animate-flight' : ''}`}
              />
              <span>Send Message</span>
            </button>
          </div>

          <style>
            {`
      @keyframes flight {
        0% { transform: translateX(0); }
        25% { transform: translateX(4px); }
        50% { transform: translateX(-4px); }
        75% { transform: translateX(8px); }
        100% { transform: translateX(0); }
      }
      .animate-flight {
        animation: flight 0.8s infinite ease-in-out;
      }
    `}
          </style>
        </form>


      </motion.div>
    </motion.section>
  );
};

export default Contact;
