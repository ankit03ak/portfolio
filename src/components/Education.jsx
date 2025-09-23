import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../constants";



const Education = () => {
  return (
    // <>Hello</>
    
    <div id="education" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>

      <div className="relative mx-auto w-full max-w-4xl">
        
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-neutral-700"></div>

        {EDUCATION.map((item, index) => (
          <div
            key={index}
            className="mb-10 grid grid-cols-9 items-center w-full relative"
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-span-4 flex justify-end">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.0 }}
                    className="w-full max-w-[500px] bg-neutral-800 p-4 rounded-lg shadow-lg"
                  >
                    <h2 className="font-bold text-xl mb-1 text-green-400">
                      {item.degree}
                    </h2>
                    <p className="mb-2 text-neutral-300">{item.institute}</p>
                    <p className="mb-1 text-neutral-300">{item.year}</p>
                    <p className="text-neutral-300 font-medium">
                      Grade: {item.grade}
                    </p>
                  </motion.div>
                </div>

                <div className="col-span-1 flex justify-center items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-neutral-900 z-10"></div>
                </div>

                <div className="col-span-4"></div>
              </>
            ) : (
              <>
                <div className="col-span-4"></div>

                <div className="col-span-1 flex justify-center items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-neutral-900 z-10"></div>
                </div>

                <div className="col-span-4 flex justify-start">
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.0 }}
                    className="w-full max-w-[500px] bg-neutral-800 p-4 rounded-lg shadow-lg"
                  >
                    <h2 className="font-bold text-xl mb-1 text-green-400">
                      {item.degree}
                    </h2>
                    <p className="mb-2 text-neutral-300">{item.institute}</p>
                    <p className="mb-1 text-neutral-300">{item.year}</p>
                    <p className="text-neutral-300 font-medium">
                      Grade: {item.grade}
                    </p>
                  </motion.div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;