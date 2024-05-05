import React from "react";

function Card() {
  return (
    <div className="w-full   flex  h-full bg-white     flex-wrap   item-center px-2 gap-2">
      <div className="cardcontainer   w-full h-full">
        <div className="card  relative  rounded-xl w-full bg-[#004D43] h-[50vh] sm:h-[75vh] flex items-center justify-center px-5">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute  rounded-full  px-1 py-1 border-2 left-1 bottom-1 ">
            &copy;2019-2022
          </button>
        </div>
      </div>

      <div className="cardcontainer  flex  flex-wrap sm:flex-nowrap gap-2 h-full  w-full  ">
        <div className="card  relative  rounded-xl w-full bg-[#531e2a] h-[50vh] sm:h-[75vh] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute  rounded-full px-1  border-2 left-2 bottom-2 ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        <div className="card  relative  rounded-xl w-full bg-[#4a4141] h-[50vh] sm:h-[75vh] flex items-center justify-center mb-2">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute  uppercase rounded-full  px-1 border-2 left-1 bottom-2 ">
            Business Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
