'use client'
import { FC, useEffect } from "react";
import { Link } from "react-scroll";
interface LinkProps {
  text: string;
  to: string;
}

const Links: FC<LinkProps> = ({  text, to }) => {
  return (
    <div className="pt-3 ">
      <div className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
        <Link
          className="hover:underline hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8 scroll-smooth"
          to={to}
          target={to}
          smooth={true}
          duration={700}
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default Links;

// fffba4
// d2b863
// ad832d
// 3d2e10

// f8bdb9
// ec4237
// a3180f
// 460a07
