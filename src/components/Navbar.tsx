import React from "react";
import Link from "@/components/Links";
const Navbar = () => {
  return (
    <div className="absolute w-full px-10 md:px-0">
      <ul className="flex flex-wrap items-center font-jbExtrabold tracking-wider md:text-lg justify-between px-[10vw] md:px-[20vw] lg:px-[30vw] py-5">
        <li>
          <Link text="Home" to="" href="/"></Link>
        </li>
        <li>
          <Link text="About" to="" href="#"></Link>
        </li>
        <li>
          <Link text="Theme" to="" href="#"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
