import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdOutlineWork } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { RiDownloadLine, RiUserSmileLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbBrandReact, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { useState, useEffect } from "react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "React Developer",
    "Next.js Expert",
    "Front End Developer",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating tech icons */}
        <div className="absolute top-0 left-0 right-0 flex justify-between opacity-20 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="hidden lg:block"
          >
            <TbBrandReact className="text-6xl text-cyan-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="hidden lg:block"
          >
            <TbBrandNextjs className="text-6xl text-white" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="hidden lg:block"
          >
            <SiTailwindcss className="text-6xl text-cyan-400" />
          </motion.div>
        </div>

        {/* Profile badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-3 bg-stone-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-stone-700/50">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <FaCode className="text-xs text-white" />
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <RiUserSmileLine className="text-xs text-white" />
              </div>
            </div>
            <span className="text-stone-300 text-sm">Front-End Developer</span>
          </div>
        </motion.div>

        {/* Main title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-stone-200 via-white to-stone-400 bg-clip-text text-transparent">
              Abdullah
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Safi
            </span>
          </h1>
        </motion.div>

        {/* Animated role switcher */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-stone-800/30 backdrop-blur-sm rounded-full px-5 py-2 border border-stone-700/30">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-stone-300 text-sm">I am a</span>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent min-w-[160px]">
              {roles[textIndex]}
            </span>
          </div>
        </motion.div>

        {/* Description - Updated from CV */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed text-center mb-8"
        >
          As a front-end developer with two years of experience, I am committed
          to expanding my skill set and knowledge in this dynamic field. I
          strive to blend creativity with technical proficiency to deliver
          visually appealing and functional websites.
        </motion.p>

        {/* Quick stats row - Updated from CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-8 mb-8"
        >
          {[
            {
              value: "2+",
              label: "Years Experience",
              icon: <MdOutlineWork className="text-cyan-400" />,
            },
            {
              value: "7+",
              label: "Projects Completed",
              icon: <FaCode className="text-purple-400" />,
            },
            {
              value: "4+",
              label: "Companies",
              icon: <TbBrandReact className="text-blue-400" />,
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="flex items-center gap-1 text-2xl font-bold text-white">
                {stat.icon}
                {stat.value}
              </div>
              <p className="text-stone-400 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-stone-200 to-stone-400 text-stone-900 font-semibold text-sm overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RiDownloadLine className="text-base" />
              Download CV
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white to-stone-300"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-stone-600 text-stone-300 font-semibold text-sm hover:border-stone-500 hover:text-stone-200 hover:bg-stone-800/30 transition-all"
          >
            View My Work
            <HiOutlineExternalLink className="text-sm" />
          </motion.a>
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://github.com/abdallahsafi14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="https://linkedin.com/in/abdallahsafi14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="mailto:abdallahsafi414@gmail.com"
              className="text-stone-400 hover:text-stone-200 transition-colors"
            >
              <MdEmail className="text-xl" />
            </motion.a>
          </div>
          <div className="flex items-center gap-1.5 text-stone-500 text-xs">
            <MdLocationOn className="text-sm" />
            <span>Syria / Homs</span>
            <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
            {/* <span>Open for opportunities</span> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
