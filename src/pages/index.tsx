import React, { useState } from "react";
import logo from "../assets/images/background.png";

import { ArrowSquareOut, UserFocus } from "@phosphor-icons/react";
import ScrollingText from "../components/reuseables/scrollingText";
import { Link } from "react-router-dom";


export default function Home(): JSX.Element {
  const [viewMode, setViewMode] = useState<"home" | "create" | "update">("home");
 
  return (
    <div className={`flex flex-col gap-10 items-center w-full z-30 text-white py-10`} >
      <div className="grid lg:grid-cols-2 gap-10 w-full">
        <Link to="/about" className="bg-gradient-to-r from-secondary from-70% to-black rounded-[2rem] gap-5 grid md:grid-cols-2 grid-cols-1 w-full p-7">
          <img className="aspect-square h-52 w-full object-cover rounded-tl-[2rem] rounded-br-[2rem]" alt="logo" src={logo} />
          <div className="flex flex-col justify-end w-full gap-2 text-white">
            <div className="uppercase text-sm tracking-wide">A Software Engineer</div>
            <div className="text-[2.7rem] leading-tight font-semibold md:w-full lg:w-3/4">
              Samson Ajaloleru.
            </div>
            <div className="text-sm">I am a Software Engineer based in Lagos, Nigeria.</div>
            <div className="items-end flex flex-col w-full">
              <ArrowSquareOut size={32} />
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center w-full relative">
          <div className="rounded-full p-4 px-7 bg-gradient-to-r from-secondary from-70% to-black flex flex-col w-full absolute">
            <ScrollingText message="Highly motivated and results-oriented Senior Software Engineer with over 7 years of experience designing, developing, and deploying robust and scalable web applications. Possess a strong foundation in both front-end and back-end technologies, including React.js, Node.js, and various JavaScript frameworks. Passionate about creating innovative and user-friendly solutions that solve real-world problems. Strong team player with excellent communication and problem-solving skills." />
          </div>
          <div className="gap-10 grid md:grid-cols-2 w-full mt-[6rem]">
            <div className="flex flex-col items-center w-full gap-7 text-white bg-gradient-to-r from-secondary from-70% to-black p-7 rounded-[2rem]">
              <UserFocus size={70} />
              <div className="justify-between items-center flex flex-row w-full">
                <div className="flex flex-col ">
                  <div className="opacity-55 uppercase text-sm tracking-wide">more about me</div>
                  <div className="text-[1.4rem] lg:text-[2rem] leading-tight font-semibold">
                    Credentials 
                  </div>
                </div>
                <ArrowSquareOut size={32} />
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-7 text-white bg-gradient-to-r from-secondary from-70% to-black p-7 rounded-[2rem]">
              <UserFocus size={70} />
              <div className="justify-between items-center flex flex-row w-full">
                <div className="flex flex-col ">
                  <div className="opacity-55 uppercase text-sm tracking-wide">showcase</div>
                  <div className="text-[1.4rem] lg:text-[2rem] leading-tight font-semibold">
                    Projects 
                  </div>
                </div>
                <ArrowSquareOut size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>     
      <div className="gap-10 grid md:grid-cols-3 w-full">
        <div className="flex flex-col items-center w-full gap-7 text-white bg-gradient-to-r from-secondary from-70% to-black p-7 rounded-[2rem]">
          <UserFocus size={70} />
          <div className="justify-between items-center flex flex-row w-full">
            <div className="flex flex-col ">
              <div className="opacity-55 uppercase text-sm tracking-wide">stay with me</div>
              <div className="text-[1.4rem] lg:text-[2rem] leading-tight font-semibold">
                Profiles 
              </div>
            </div>
            <ArrowSquareOut size={32} />
          </div>
        </div>
        <div className="flex flex-col items-center md:col-span-2 w-full gap-7 text-white bg-gradient-to-r from-secondary from-70% to-black p-7 rounded-[2rem]">
          <div className="justify-between mt-10 items-end flex flex-row w-full">
            <div className="text-[2.5rem] lg:text-[2rem] leading-tight font-semibold">
              Let's  <br/>work <span className="text-light-green">together.</span> 
            </div>
            <ArrowSquareOut size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
