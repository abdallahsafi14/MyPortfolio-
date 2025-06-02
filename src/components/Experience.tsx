import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-600 hidden lg:block"></div>

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-12 lg:mb-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-stone-500 rounded-full border-4 border-gray-900 shadow-lg hidden lg:block"></div>

            <div className="lg:ml-20 bg-stone-900/50 backdrop-blur-sm rounded-2xl p-8 border border-stone-800 hover:border-stone-700 transition-all duration-300 hover:shadow-2xl hover:shadow-stone-500/10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Year badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <span className="inline-block bg-stone-700 text-stone-200 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {exp.year}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 hover:text-stone-300 transition-colors duration-200">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-stone-500 rounded-full"></div>
                        <span className="text-lg text-stone-300 font-medium">
                          {exp.company}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-stone-400 leading-relaxed mb-6 text-base">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-stone-900 text-stone-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-stone-600 hover:border-stone-500 transition-all duration-200 cursor-pointer shadow-md hover:shadow-stone-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-stone-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-stone-600/10 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
