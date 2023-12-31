import React, { useRef } from "react";
import "./experience2.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const nameSkill = [
  "react",
  "next",
  "javascript",
  "typescript",
  "tailwind",
  "pwa",
  "figma",
];

const Experience = ({experienceRef}) => {
  // justMove
  const baseVelocity = -100;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(1, -30, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (20 / 50000);
    baseX.set(baseX.get() + moveBy);
  });
  // justMove
  return (
    <section ref={experienceRef} className="experiencemain" id="experience">
      {/* <h5 className='experience-titre'>چه مهارت هایی دارم</h5> */}
      <motion.div
        style={{ x, display: "flex", justifyContent: "space-between" , width:'2000px' }}
      >
        <img
          src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/react.png"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/javascript.png"
          style={{ width: "33px", height: "33px" }}
          alt="HTML5"
        />
        <img
          src="https://github.com/MacroPower/MacroPower/raw/master/img/typescript-original.svg"
          style={{ width: "33px", height: "33px" }}
          alt="react"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://w7.pngwing.com/pngs/895/275/png-transparent-solidity-ethereum-smart-contract-blockchain-cryptocurrency-blockchain-angle-triangle-logo.png"
          style={{ width: "33px", height: "33px" }}
          alt="HTML5"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          style={{ width: "33px", height: "33px" }}
          alt="javascript"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
          style={{ width: "33px", height: "33px" }}
          alt="CSS3"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
          style={{ width: "33px", height: "33px" }}
          alt="Sass"
        />
        <img
          src="https://img.icons8.com/color/48/000000/wordpress.png"
          style={{ width: "33px", height: "33px" }}
          alt="wordpress"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
          style={{ width: "33px", height: "33px" }}
          alt="Figma"
        />
          <img
          src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/react.png"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored-dark.svg"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/javascript.png"
          style={{ width: "33px", height: "33px" }}
          alt="HTML5"
        />
        <img
          src="https://github.com/MacroPower/MacroPower/raw/master/img/typescript-original.svg"
          style={{ width: "33px", height: "33px" }}
          alt="react"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
          alt="Alirezas7ss's GitHub stats"
          style={{ width: "33px", height: "33px" }}
        />
        <img
          src="https://w7.pngwing.com/pngs/895/275/png-transparent-solidity-ethereum-smart-contract-blockchain-cryptocurrency-blockchain-angle-triangle-logo.png"
          style={{ width: "33px", height: "33px" }}
          alt="HTML5"
        />
        <img
          src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
          style={{ width: "33px", height: "33px" }}
          alt="javascript"
        />
        
      </motion.div>
      <h2 className="experience-titre2">مهارت های من</h2>
      <div className="routerName">
        {nameSkill.map((name, index) => (
          <div className="hamintori">
            <motion.div
              className="ferris-wheel-techs"
              key={index + 1}
              initial="initial"
              animate={["animate", "initialHide"]}
              variants={{
                initial: {
                  opacity: 0,
                },
                initialHide: {
                  opacity: 1,
                  transition: {
                    delay: index + 1,
                  },
                },
                animate: {
                  rotate: -360,
                  transition: {
                    duration: nameSkill.length,
                    repeat: Infinity,
                    delay: index + 1,
                    ease: "linear",
                  },
                },
              }}
            >
              {name}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="container experience__container">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="experience__frontend"
        >
          <h3>توسعه دهنده فرانت اند</h3>
          <div className="experience__content">
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>NEXTJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>MaterialUI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>FRAMER-MOTION</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>PWA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>figma</h4>
                <small className="text-light">intermediate</small>
              </div>
            </artifact>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="experience__backend"
        >
          <h3>توسعه دهنده بلاکچین</h3>
          <div className="experience__content">
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>SOLIDITY</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Truffle</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Hard hat</h4>
                <small className="text-light">Experienced</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Etherjs</h4>
                <small className="text-light">intermediate</small>
              </div>
            </artifact>
            <artifact className="experience__details">
              <BsPatchCheckFill className="experience__details__icon" />
              <div>
                <h4>Web3js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </artifact>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
