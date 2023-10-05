'use client';
import React, { useState, useEffect } from 'react';
import styles from '../About/About.module.css';

interface typeprops {
    message:string;
    cursor?:string;
}
const TypingAnimation = ({
    message = "This is a typing animation",
    cursor="|"
}:typeprops) => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= message.length) {
                setText(message.slice(0, index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <div className="-z-20">
                <img
                    src="/assets/icons/14@1x.png"
                    alt="logo"
                    className={`w-60 pl-40 md:mr-0 mr-5 md:p-14 ${styles.float3} absolute mt-60 right-0`}
                />
                <img
                    src="/assets/icons/06@1x.png"
                    alt="logo"
                    className={`w-60 pr-40 md:ml-0 ml-5 md:p-14 ${styles.float2} absolute mt-[30rem]`}
                />
            </div>
            <span>{text}</span>
            {isTyping && <span className="cursor">
                <span className="animate-blink font-extrabold">
                    {cursor}
                </span>
            </span>}
        </div>
    );
};

export default TypingAnimation;
