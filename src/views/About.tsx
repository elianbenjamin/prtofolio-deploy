// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
/* import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
 */
// components
import { Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import SocialMediaIcon from "../components/SocialMediaIcon";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              I am a passionate Full-Stack Developer in constant evolution and
              collaboration within the development community. My focus is on
              technical excellence, supported by strong skills in JavaScript,
              TypeScript, React, NodeJS, Redux, and SQL, with outstanding
              experience in the successful execution of web projects. In my free
              time, I love exploring new technologies and enjoy creative
              programming.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <NavLink
              to={"https://www.linkedin.com/in/elian-rivera/"}
              target="_blank"
            >
              <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            </NavLink>

            <NavLink
              to={"https://www.instagram.com/elian_rivera18/"}
              target="_blank"
            >
              <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            </NavLink>
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
      </div>
    </div>
  );
};

export default About;
