import React, { useState } from "react";
import logo from "../assets/images/background.png";

import { WhatsappLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import ExperienceCarousel from "../components/reuseables/experience";


export default function About(): JSX.Element {
 
  return (
    <div className={`flex flex-col gap-10 items-center w-full z-30 text-white pb-10`} >
      <div className="flex flex-col md:flex-row items-start gap-10 w-full">
        <div className="bg-secondary rounded-[2rem] static gap-5 flex flex-col md:w-1/2 p-7">
          <img className="aspect-square md:h-[25rem] w-full object-cover rounded-[2rem]" alt="logo" src={logo} />
          <div className="flex flex-col items-center w-full gap-3 text-white">
            <div className="md:text-[2rem] text-2xl leading-tight font-semibold">
              Samson Ajaloleru.
            </div>
            <div className="text-sm opacity-45">Software Engineer</div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="rounded-full p-3 shadow-white shadow-sm bg-secondary text-light-green">
                <LinkedinLogo size={24} />
              </div>
              <div className="rounded-full p-3 shadow-white shadow-sm bg-secondary text-light-green">
                <GithubLogo size={24} />
              </div>
              <div className="rounded-full p-3 shadow-white shadow-sm bg-secondary text-light-green">
                <InstagramLogo  size={24} />
              </div>
              <div className="rounded-full p-3 shadow-white shadow-sm bg-secondary text-light-green">
                <WhatsappLogo size={24} />
              </div>
            </div>
            <div className="rounded-xl mt-4 w-full bg-white p-3 text-center bg-opacity-10">
              Contact Me
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 gap-10">
          <div className="flex flex-col w-full gap-10">
            <div className="text-lg font-semibold">ABOUT ME</div>
            <div className="opacity-75 tracking-wide leading-6">
              As a Senior Software Engineer with 7+ years of hands-on experience, I specialize in architecting and delivering high-performance, full-stack web applications that drive business growth and user engagement. Proficient in modern frontend frameworks like React.js, Next.js, Vue.js, Nuxt.js, and TypeScript, I build intuitive, responsive interfaces optimized for performance and accessibility. On the backend, I leverage Node.js, Laravel, and REST/GraphQL APIs to design scalable microservices and cloud-native solutions, with expertise in AWS, Docker, and CI/CD pipelines. My experience spans industries such as fintech, e-commerce, and SaaS, where I’ve successfully led cross-functional teams to deploy solutions handling millions of users, while adhering to Agile methodologies, Test-Driven Development (TDD), and DevOps best practices
            </div>
            <div className="opacity-75 tracking-wide leading-6">
              Beyond technical execution, I thrive in collaborative environments, bridging gaps between product, design, and engineering teams to align technical outcomes with strategic goals. My passion for innovation is matched by a commitment to clean code, robust documentation, and mentoring junior developers. I’ve spearheaded initiatives to migrate legacy systems to modern architectures, optimize application performance by 40%+, and integrate AI-driven features like chatbots and predictive analytics. A lifelong learner, I stay ahead of industry trends through certifications in cloud technologies and contributions to open-source projects, ensuring solutions are both cutting-edge and sustainable.
            </div>
          </div>
          <ExperienceCarousel />
        </div>

      </div>
    </div>
  );
}
