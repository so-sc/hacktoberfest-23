import React from "react";
import Link from "@/components/Links";
const Navbar = () => {
  return (
    <div className="absolute w-full">
      <ul className="flex flex-wrap items-center font-jbExtrabold tracking-wider md:text-lg justify-between px-[10vw] md:px-[20vw] lg:px-[30vw] py-5">
        <li>
          <Link text="HOME" to="self" href="#"></Link>
        </li>
        <li>
          <Link text="RULES" to="self" href="#"></Link>
        </li>
        <li>
          <Link text="CONTACT" to="self" href="#"></Link>
        </li>
        <li>
          <Link text="HELP" to="self" href="#"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
