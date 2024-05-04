import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  motion;

  return (
    <div data-scroll  data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-zinc-900 pt-2 ">
      <div className="text-structure mt-[0.5rem] sm:mt-[2rem] md:mt-[4rem] lg:mt-[8rem] pl-4 pr-3">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease:[0.76,0,0.24,1],duration:1 }}
                    className=" mr-[1vw] w-[9vw] rounded-md h-[5.7vw] relative  top-[1vw ] bg-red-500"
                  ></motion.div>
                )}
                <h1 className=" flex items-center uppercase  text-[11vw]   leading-[8.5vw] -tracking-tighter font-['Founders_Grotesk_consoled'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[2px] border-zinc-700  mt:5 sm:flex sm:justify-between py-2 px-5 leading-9">
        {["For Public and Private companies", "From the first pitch to IPO"].map(
          (item) => (
            <p className="text-md lg:text-xl font-light">
              {item}
            </p>
          )
        )}

        <div className="flex items-center gap-5 ">
          <div className="px-2 lg:text-xl border-[1px] border-zinc-400 rounded-full font-light text-md  uppercase  hover:bg-white hover:text-black ">
            Start the project
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// 50:17
