import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import office from "../assets/office.png";
import traveller from "../assets/traveller.png";
import salesman from "../assets/salesman.png";
import { Link } from "react-router-dom";

export default function GetStarted() {
  const stepsData = [
    {
      header: "Join Our Team",
      text: "Whether you’re a passenger, driver, or business looking for reliable transportation solutions, Drop is here to serve you. We invite you to experience the future of transportation today. Download our app, sign up, and let us take you wherever you need to go, safely, quickly, and comfortably.",
      images: office,
    },
    {
      header: "Join Our Team",
text: "Whether you’re a passenger, driver, or business looking for reliable transportation solutions, Drop is here to serve you. We invite you to experience the future of transportation today. Download our app, sign up, and let us take you wherever you need to go, safely, quickly, and comfortably.",      images: traveller,
    },
    {
      header: "Join Our Team",
text: "Whether you’re a passenger, driver, or business looking for reliable transportation solutions, Drop is here to serve you. We invite you to experience the future of transportation today. Download our app, sign up, and let us take you wherever you need to go, safely, quickly, and comfortably.",      images: salesman,
    },
  ];

  return (
    <div className="bg-[#FBFBFB] py-28 xl:px-20">
      <h3 className="text-center pb-16 text-[#16BA16] lg:text-2xl">
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#16BA16] to-[#FFD700]">
          {" "}
          Network
        </span>
      </h3>
      {stepsData.map((steps, index) => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { once: true });

        return (
          <div
            key={steps.header}
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 lg:items-center md:gap-20 mb-20 md:mb-12 lg:mb-11 text-[#363537] px-4 md:px-0"
          >
            <motion.div
              className={`${index % 2 === 0 && "md:order-2"} md:w-10/12`}
              // Add motion to the image with sliding effect
              initial={{ opacity: 0, x: -200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
              }}
            >
              <img src={steps.images} alt={steps.images} />
            </motion.div>
            <motion.div
              className={`${index % 2 === 0 && "md:order-1"}`}
              // Add motion to the text content with a fade-in and slide-up effect
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <h3 className="text-xl lg:text-3xl mb-6 font-semibold">
                {steps.header}
              </h3>
              <p className="leading-[1.6] lg:text-[18px] mb-5 ">{steps.text}</p>
              <button
                className="bg-gradient-to-r from-[#16BA16] to-[#FFD700] p-2 rounded-[48px] lg:rounded-[32px] text-white py-2 px-4"
                style={{ boxShadow: "2px 2px 4px 0px #00000026" }}
              >
                <Link to="/joinAs">Get started</Link>
              </button>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
