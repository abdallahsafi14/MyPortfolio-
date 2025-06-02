import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { motion, Variants } from "framer-motion";
import { BsWordpress } from "react-icons/bs";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Technologies = () => {
  const technologies = [
    {
      icon: <RiReactjsLine />,
      color: "text-cyan-400",
      name: "React",
      duration: 2.5,
    },
    {
      icon: <TbBrandNextjs />,
      color: "text-white",
      name: "Next.js",
      duration: 3,
    },
    {
      icon: <BsWordpress />,
      color: "text-blue-500",
      name: "WordPress",
      duration: 3.5,
    },
    { icon: <FaHtml5 />, color: "text-red-500", name: "HTML5", duration: 2 },
    { icon: <FaCss3 />, color: "text-sky-600", name: "CSS3", duration: 2.8 },
    {
      icon: <FaBootstrap />,
      color: "text-violet-700",
      name: "Bootstrap",
      duration: 4,
    },
    {
      icon: <RiTailwindCssFill />,
      color: "text-cyan-400",
      name: "Tailwind",
      duration: 2.2,
    },
    {
      icon: <FaJs />,
      color: "text-yellow-400",
      name: "JavaScript",
      duration: 3.2,
    },
    {
      icon: <TbBrandTypescript />,
      color: "text-blue-500",
      name: "TypeScript",
      duration: 4.2,
    },
    {
      icon: <TbBrandRedux />,
      color: "text-violet-700",
      name: "Redux",
      duration: 3.8,
    },
    {
      icon: <FaGitAlt />,
      color: "text-orange-500",
      name: "Git",
      duration: 4.5,
    },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Technology Card */}
              <div className="bg-stone-900/40 backdrop-blur-sm rounded-2xl p-6 border border-stone-800 hover:border-stone-600 transition-all duration-300 hover:shadow-2xl hover:shadow-stone-500/10 cursor-pointer">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={iconVariants(tech.duration)}
                  className="flex flex-col items-center "
                >
                  <div
                    className={`text-6xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.icon}
                  </div>
                  <span className="text-stone-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl bg-gradient-to-r from-stone-400 to-stone-600"></div>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-stone-800 text-stone-200 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-stone-800"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute top-1/2 left-4 w-32 h-32 bg-stone-500/5 rounded-full blur-3xl"></div> */}
        <div className="absolute top-1/4 right-8 w-24 h-24 bg-stone-600/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-stone-400/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center max-w-4xl mx-auto px-4"
      >
        <p className="text-stone-400 text-lg leading-relaxed">
          Proficient in modern web technologies with expertise in{" "}
          <span className="text-cyan-400 font-semibold">React</span> and{" "}
          <span className="text-white font-semibold">Next.js</span> ecosystem,
          skilled in both frontend development and content management with{" "}
          <span className="text-blue-500 font-semibold">WordPress</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Technologies;
