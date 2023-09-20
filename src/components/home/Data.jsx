import React from "react";
import Social from "./Social";

function Data() {
  return (
    <div>
      <h1 className="text-6xl font-extrabold">Mohamed Aslam</h1>
      <h3 className="pt-2 text-2xl">Full Stack Developer</h3>
      <p className="py-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis,
        suscipit culpa quidem blanditiis consequuntur veniam explicabo accusamus
      </p>
      <Social />
      <div className="pt-4">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Hire me
        </button>
      </div>
      
    </div>
  );
}

export default Data;
