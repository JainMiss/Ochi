import React from "react";

function About() {
  return (
    <div className=" w-full p-10 h-full   bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[11vw] leading-[8.5vw] tracking-tight sm:text-[8vw] sm:leading-[8.5vw]">
        Ochi is a strategic partner for fast-growing tech 
        businesses that needto raise funds, sell products,
         explain complex ideas, and hire great people.
      </h1>

      <div className="w-full flex flex-wrap sm:flex-nowrap gap-5  border-t-[1px] mt-20 pt-10 border-[#7bc84b]">
      
        <div className="w-full ">
          <h1 className="text-4xl lg:text-6xl xl:text-8xl">Our approch :</h1>
          <button className="  uppercase flex gap-10 items-center px-6  mt-10 py-3 bg-zinc-900 rounded-full text-white xl:text-4xl">
            Read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-full h-full">
          <div className="max-w-full h-[15rem] rounded-xl overflow-hidden sm:h-[14rem] lg:h-[20rem] xl:h-[28rem]">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// 1: 22 minute
