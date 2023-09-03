import { FC } from "react";
import Link from "next/link";
interface LinkProps {
  href: string;
  text: string;
  to: string;
}

const Links: FC<LinkProps> = ({ href, text, to }) => {
  return (
    <div className="pt-3 ">
      <div className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
        <Link
          className="hover:underline hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8"
          href={href}
          target={to}
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
