import React from "react";
import Profile from "../../assets/images/profile.jpg";
import './home.css';
import Data from "./Data";

function Home() {
  return (
    <div className="h-screen w-full bg-[#f9f9f9]">
      <div className="max-w-[1000px] grid gap-6 mx-auto items-center  px-8 h-full justify-center">
        <div className="gap-x-8 grid md:grid-cols-2 items-center sm:grid-row" >        
          <div className="grid  place-items-center sm:pt-32 md:pt-0 sm:order-first md:order-1">
            <img className="profile_img" src={Profile} alt="profile" />
          </div>
          <Data/>
        </div>
      </div>
    </div>
  );
}

export default Home;

//  <div className="w-full h-screen bg-[#0a192f]">
//    <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center">
//      <div>
//        <p>Hi, my name is</p>
//        <h1>Mohamed Aslam</h1>
//        <h2>I'am Full Stack Developer.</h2>
//        <p>
//          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//        </p>
//      </div>
//      <div>
//        {/* <img src={Profile} alt="profile" className="" /> */}
//      </div>
//    </div>
//  </div>
