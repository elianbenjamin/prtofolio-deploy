// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { useState } from "react";

const Hero = () => {
  const [whatsappNumber] = useState(3537562542)

  const handleHireMeClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank")
  }


  const pdfUrl = "/CV-EliánRivera.pdf"
  return (
  
  <div 
  id="home" className="min-h-screen flex flex-col items-center justify-center relative" 
  style={{
    background: `url(${homePageImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }} >
    <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
      <div className="w-full xl:w-fit">
        <motion.h1
        variants={fadeIn("down")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false}}
        className="w-full xl:w-fit text-center xl:text-start text-xl sm:text-4xl lg:text-6xl font-bold text-textPrimary">
          I'm Elián Rivera
          <br />
          <span className="text-secondary">
            <Typewriter 
            words={["Full Stack Developer"]} 
            cursor
            cursorStyle="_"
            typeSpeed={250}
            deleteSpeed={150}
            loop
            />
          </span>
        </motion.h1>
        <motion.div 
        variants={fadeIn("up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false}}
        className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
          <Button secondary onClick={handleHireMeClick}>Hire me</Button>
          <Button icon={downloadIcon}>
          <a href={pdfUrl} download="ElianRivera_CV.pdf">
        Download CV
      </a>
            </Button>

        </motion.div>

      </div>
     { <motion.img 
      variants={scale()}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false}}
      src={homePageIllustation} 
      alt="" 
      className="max-w-full sm:max-w-[401px]" />}

    </div>
    
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"/>
  </div>
  )

};

export default Hero;
