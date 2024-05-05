import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  motion;

  return (
    <div data-scroll  data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-zinc-900 pt-2">
      <div className="text-structure mt-52 px-20">
        {["We Create", "Eye Opeming", "Presentation"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease:[0.76,0,0.24,1],duration:1 }}
                    className=" mr-[1vw] w-[9vw] rounded-md h-[5.7vw] relative  top-[1vw ] bg-red-500"
                  ></motion.div>
                )}
                <h1 className=" flex items-center uppercase  text-[9vw] h-full  leading-[7.5vw] -tracking-tighter font-['Founders_Grotesk_consoled'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-20 flex  justify-between items-center py-5 px-20">
        {["For Public and Private companies", "From the first to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}

        <div className="start flex items-center gap-5 ">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-lg  uppercase  hover:bg-white hover:text-black">
            Start the project
          </div>
          <div className="w-10 h-10   flex items-center justify-center border-[2px] border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

// 50:17
