import React from "react";
import Social from "./Social";

function Data() {
  return (
    <div>
      <h1 className="text-6xl font-extrabold flex text-center md:text-left justify-center">Mohamed Aslam</h1>
      <h3 className="pt-2 text-2xl flex justify-center md:justify-start">Full Stack Developer</h3>
      <p className="py-4 flex justify-center text-center md:text-start">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis,
        suscipit culpa quidem blanditiis consequuntur veniam explicabo accusamus
      </p>
      <Social />
      <div className="pt-4 flex justify-center md:justify-start">
        <button className="bg-white  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <i className="uil uil-bag pr-3 text-xl"></i>Hire me
        </button>
      </div>
      <div>

      </div>
      
    </div>
  );
}

export default Data;
