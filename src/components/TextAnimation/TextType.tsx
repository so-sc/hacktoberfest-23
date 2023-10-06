"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../About/About.module.css";

const TypingAnimation = ({ message = "This is a typing animation" }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px", // margin around the viewport
      threshold: 0.5, // trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is visible, start typing animation
          setIsTyping(true);
          startTypingAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (typingContainerRef.current) {
      observer.observe(typingContainerRef.current);
    }

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  const startTypingAnimation = () => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <div ref={typingContainerRef}>
      <span>{text}</span>
      {isTyping && (
        <span className="cursor">
          <span className="animate-blink">_</span>
        </span>
      )}
    </div>
  );
};

export default TypingAnimation;
