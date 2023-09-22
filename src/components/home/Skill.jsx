import React from "react";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import reactLogo from "../../assets/images/react.png";
import laravel from "../../assets/images/laravel.png";
import php from "../../assets/images/php.png";
import mysql from "../../assets/images/mysql.png";
import bootstrap from "../../assets/images/bootstrap.png";
import tailwind from "../../assets/images/tailwind.png";

function Skill() {
  return (
    <div className="order-4">
      <div className="md:flex">
        <h4 className="font-semibold flex justify-center md:justify-start md:w-57  items-center text-center md:text-left w-full text-xl md:pb-0 pb-5">
          Tech Stack
        </h4>
        <div className="grid md:flex grid-cols-3 gap-1 place-items-center md:justify-start">
          <img className="h-14" src={html} alt="html" />
          <img className="h-14" src={css} alt="css" />
          <img className="h-14" src={javascript} alt="javascript" />
          <img className="h-14" src={reactLogo} alt="reactLogo" />
          <img className="h-14" src={laravel} alt="laravel" />
          <img className="h-14" src={php} alt="php" />
          <img className="h-14" src={mysql} alt="mysql" />
          <img className="h-14" src={bootstrap} alt="bootstrap" />
          <img className="h-14" src={tailwind} alt="tailwind" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
