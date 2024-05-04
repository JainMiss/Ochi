import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";
function Featured() {
  motion;
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section className="relative w-full py-2 bg-white rounded-md">
      <div className="w-full  px-10 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-5xl font-bold font-['Neue_Montreal'] tracking-tight text-black pt-4 mt-2">
          Featured Projects
        </h1>
      </div>

      <div className="px-5">
        <div className="cards  w-full flex flex-wrap sm:flex-nowrap gap-6 mt-10 sm:mb-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative  w-full h-[70vh] lg:h-[65vh]"
          >
            <h1 className="absolute  flex text-[#CDEA68] left-full  overflow-hidden  -translate-x-1/2 top-1/2 -translate-y-1/2  z-[10]  leading-none  tracking-tighter text-8xl ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.5 }}
                  className="inline-flex"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full  h-full rounded-xl overflow-hidden">
              <img
                className=" w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer   relative w-full h-[70vh] lg:h-[65vh]"
          >
            <div className="card  w-full h-full rounded-xl  ">
              <h1 className="absolute  flex text-[#CDEA68] overflow-hidden right-full  translate-x-1/2 top-1/2 -translate-y-1/2  z-[9]  leading-none  tracking-tighter text-8xl ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.5,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

            

              <img
                className="w-full h-full bg-cover bg-no-repeat"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
