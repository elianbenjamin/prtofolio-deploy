// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "only" | "team";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("only");

  const filteredProjects = () => {
    if (activeCategory === "only") {
      return projects.filter((item) => item.category === "only");
    } else {
      return projects.filter((item) => item.category === "team");
    }
  };
  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>


          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            My recent <span className="text-secondary"> projects</span>
          </h2>

          </Reveal>
          <motion.div 
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false}}
          className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row">
            <Button
              secondary={activeCategory === "only" ? true : false}
              onClick={() => setActiveCategory("only")}
            >
              Personal
            </Button>
            <Button
              secondary={activeCategory === "team" ? true : false}
              onClick={() => setActiveCategory("team")}
            >
              Group
            </Button>

          </motion.div>

          <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false}}
          className="flex gap-12 mt-12 flex-wrap justify-center">
            {
              filteredProjects().map((item, index)=> (
                <Card key={index} imgSrc={item.img} title={item.title} />
              ))
            }

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
