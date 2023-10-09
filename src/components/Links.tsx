'use client'
import { FC, useEffect } from "react";
import Link from "next/link";
interface LinkProps {
  href: string;
  text: string;
  to: string;
}


function animateScroll(currentTime: number, targetPosition: number, startPosition: number, startTime: number) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / 1000, 1);

  window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

  if (progress < 1) {
    requestAnimationFrame((currentTime) => animateScroll(currentTime, targetPosition, startPosition, startTime));
  }
}

const Links: FC<LinkProps> = ({ href, text, to }) => {
  
  useEffect(() => {
    const linkElement = document.querySelector(`a[href="${href}"]`);

    if (linkElement) {
      linkElement.addEventListener('click', (e) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top;
          const startPosition = window.pageYOffset;
          const startTime = performance.now();

          requestAnimationFrame((currentTime) => animateScroll(currentTime, targetPosition, startPosition, startTime));
        }
      });
    }
  }, [href]);
  return (
    <div className="pt-3 ">
      <div className="hover:drop-shadow-[0_0_0.2rem_#d2b863] transition duration-300">
        <Link
          className="hover:underline hover:drop-shadow-[0_0_0.2rem_#460a07] transition duration-300 underline-offset-8 scroll-smooth"
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
