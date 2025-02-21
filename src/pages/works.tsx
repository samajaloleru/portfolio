import React, { useRef, useState } from "react";

import { Phone, WhatsappLogo, GithubLogo, InstagramLogo, LinkedinLogo, MapPinArea } from "@phosphor-icons/react";
import ExperienceCarousel from "../components/reuseables/experience";
import Skills from "../components/reuseables/skills";
import InputField from "../components/reuseables/Input/input";
import TextArea from "../components/reuseables/Textarea/textarea";
import MasonryIframeGrid from "../components/reuseables/masonryIframeGrid";


export default function Contact(): JSX.Element {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className={`flex flex-col gap-10 items-center w-full z-30 text-white py-10`} >
      <MasonryIframeGrid/>
    </div>
  );
}
