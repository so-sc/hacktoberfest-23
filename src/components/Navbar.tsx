import React from "react";
import Link from "@/components/Links";
const Navbar = () => {
  return (
    <div className=" w-full
    sticky top-0 z-50 
    ">
      <ul className="flex flex-wrap items-center font-jbExtrabold tracking-wider md:text-lg justify-between px-[10vw] md:px-[20vw] lg:px-[30vw] py-5">
        <li>
          <Link text="HOME" to=""></Link>
        </li>
        <li>
          <Link text="RULES" to="themes"></Link>
        </li>
        <li>
          <Link text="FLOWCHART" to="flowchart"></Link>
        </li>
        <li>
          <Link text="THEMES" to="themes"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
