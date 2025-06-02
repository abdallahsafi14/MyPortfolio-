import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`mb-16 lg:mb-20 flex flex-wrap lg:flex-nowrap items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  width={300}
                  height={300}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-stone-500/20"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-stone-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                {/* Decorative border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-stone-600 to-stone-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-300 -z-10"></div>
              </div>
            </motion.div>

            {/* Project Content */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-3/5 text-center lg:text-left"
            >
              <div className="bg-stone-900/30 backdrop-blur-sm rounded-2xl p-8 border border-stone-800 hover:border-stone-700 transition-all duration-300 hover:shadow-xl hover:shadow-stone-500/10">
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="mb-4 font-bold text-3xl text-white hover:text-stone-300 transition-colors duration-200 cursor-pointer"
                >
                  {project.title}
                </motion.h3>

                <p className="mb-6 text-stone-400 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-stone-900 text-stone-300 px-4 py-2 rounded-lg text-sm font-medium border border-stone-600 hover:border-stone-500 transition-all duration-200 cursor-pointer shadow-md hover:shadow-stone-500/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links Placeholder */}
                {/* <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-stone-700 hover:bg-stone-600 text-stone-200 px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-stone-500/20"
                  >
                    View Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-stone-600 hover:border-stone-500 text-stone-300 hover:text-stone-200 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-stone-800/50"
                  >
                    View Code
                  </motion.button>
                </div> */}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-stone-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-stone-600/10 rounded-full blur-lg"></div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
