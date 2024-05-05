import React from "react";

function Card() {
  return (
    <div className="w-full   h-screen bg-zinc-900  flex  md:flex    item-center px-32 gap-5">
      <div className="cardcontainer  h-[50vh] w-1/2">
        <div className="card  relative  rounded-xl w-full bg-[#004D43] h-full flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute  rounded-full  px-5 py-3 border-2 left-10 bottom-10 ">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer  flex  gap-5 h-[50vh]  w-1/2  ">
        <div className="card  relative  rounded-xl w-full bg-[#531e2a] h-full flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute  rounded-full  px-5 py-3 border-2 left-10 bottom-10 ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        <div className="card  relative  rounded-xl w-full bg-[#4a4141] h-full flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute  uppercase rounded-full  px-5 py-3 border-2 left-10 bottom-10 ">
           Business Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
