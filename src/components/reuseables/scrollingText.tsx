import React, { useEffect, useRef } from "react";

interface ScrollTextProps {
    message: string;
}

const ScrollingText: React.FC<ScrollTextProps> = ({message}) => {
    const textRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.animation = "scroll-text 60s linear infinite";
        }
    }, []);
    return (
        <div className="w-full overflow-hidden whitespace-nowrap relative ">
            <div className="flex gap-5 w-max" ref={textRef}>
                <div className="inline-block text-sm">
                    {message} &nbsp; 🚀
                </div>
                <div className="inline-block text-sm">
                    {message} &nbsp; 🚀
                </div>
            </div>
        </div>
    );
};

export default ScrollingText;
