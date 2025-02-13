import React, { useRef, useState } from "react";

import { Phone, WhatsappLogo, GithubLogo, InstagramLogo, LinkedinLogo, MapPinArea } from "@phosphor-icons/react";
import ExperienceCarousel from "../components/reuseables/experience";
import Skills from "../components/reuseables/skills";
import InputField from "../components/reuseables/Input/input";
import TextArea from "../components/reuseables/Textarea/textarea";


export default function Contact(): JSX.Element {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className={`flex flex-col gap-10 items-center w-full z-30 text-white py-10`} >
      <div className="flex flex-col md:flex-row items-start gap-10 w-full">
        <div className="flex flex-col md:w-1/3 gap-10">
          <div className="flex flex-col w-full gap-10">
            <div className="text-lg font-semibold uppercase">Contact Info</div>
            <div className="flex flex-row gap-5 w-full">
              <div className="rounded-md p-3 px-4 shadow-white shadow-sm flex justify-center items-center bg-secondary text-light-green">
                <LinkedinLogo size={28} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-sm opacity-45 leading-tight mb-2">
                  MAIL US
                </div>
                <a href="mailto:samsonajaloleru@gmail.com" target="_blank" className="text-sm">
                  samsonajaloleru@gmail.com
                </a>
                <a href="mailto:ajalolerusegun@gmail.com" target="_blank" className="text-sm">
                  ajalolerusegun@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full my-5">
              <div className="rounded-md p-3 px-4 shadow-white shadow-sm flex justify-center items-center bg-secondary text-light-green">
                <Phone size={28} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-sm opacity-45 leading-tight mb-2">
                  CONTACT US
                </div>
                <a href="tel:+234913-917-5151" className="text-sm">
                  +234 913-917-5151
                </a>
                <a href="tel:+234905-285-9381" className="text-sm">
                  +234 905-285-9381
                </a>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full mb-5">
              <div className="rounded-md p-3 px-4 shadow-white shadow-sm flex justify-center items-center bg-secondary text-light-green">
                <MapPinArea size={28} />
              </div>
              <div className="flex flex-col w-full">
                <div className="text-sm opacity-45 leading-tight mb-2">
                  LOCATION
                </div>
                <div className="text-sm">
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="text-lg font-semibold uppercase">Social Info</div>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/ajaloleru-samson" target="_blank" className="rounded-full p-5 shadow-white shadow-sm bg-secondary text-light-green">
                <LinkedinLogo size={28} />
              </a>
              <a href="https://github.com/samajaloleru" target="_blank" className="rounded-full p-5 shadow-white shadow-sm bg-secondary text-light-green">
                <GithubLogo size={28} />
              </a>
              <a href="https://wa.link/irvdk7" target="_blank" className="rounded-full p-5 shadow-white shadow-sm bg-secondary text-light-green">
                <WhatsappLogo size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-secondary from-70% to-black md:rounded-[2rem] rounded-xl static gap-5 flex flex-col md:w-2/3 w-full md:p-10 p-5">
          <div className="text-[1.5rem] lg:text-[2rem] leading-tight font-semibold">
            Let's work <span className="text-light-green">together.</span> 
          </div>
          <div className="flex flex-col items-center w-full gap-7 text-white lg:mt-10 mt-5">
            <InputField
              type="text"
              title="Full Name"
              iconName="fi-ss-user"
              placeholder="Full name"
              ref={fullNameRef}
            />
            <InputField
              type="text"
              title="Email"
              iconName="fi-ss-envelopes"
              placeholder="Email"
              ref={emailRef}
            />
            <InputField
              type="text"
              title="Your Subject"
              iconName="fi-ss-books"
              placeholder="Your Subject"
              ref={emailRef}
            />
            <TextArea
              title="Message"
              iconName="fi-ss-books"
              placeholder="Message"
              ref={messageRef}
            />
            
            <div className="rounded-lg mt-4 w-full bg-white p-3 text-center bg-opacity-10">
              Send a message
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
