import React from "react";
import Link from "@/components/Links";
const Navbar = () => {
  return (
    <div
      className=" w-full
    sticky top-0 z-50 
    "
    >
      <ul className="flex flex-wrap items-center font-jbExtrabold tracking-wider md:text-lg justify-between px-[10vw] md:px-[20vw] lg:px-[30vw] py-5">
        <li>
          <Link text="Home" href="#home" to=""></Link>
        </li>
        <li>
          <Link text="About" href="#about" to=""></Link>
        </li>
        <li>
          <Link text="Flowchart" href="#flowchart" to=""></Link>
        </li>
        <li>
          <Link text="Themes" href="#themes" to=""></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
