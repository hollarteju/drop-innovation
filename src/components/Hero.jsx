import stars from "../assets/stars.png";
import { motion } from "framer-motion";


const items = [
 
  "Safety First",
  ,
 
  "Customer Focus",
  ,
 
  "Innovation",
  ,
 
  "Integrity",
  ,
];

function Hero() {
  return (
    <div className="w-full overflow-x-hidden mb-10 bg-[#FBFBFB]">
      <div className="xl:grid xl:grid-cols-3 xl:gap-48 xl:px-28 px-6 text-white xl:py-36 py-24 background ">
        <div className="xl:col-span-2 flex flex-col gap-8">
          <div className="font-medium xl:text-[51px] text-[30px]">
            <p>
            Choose Drop, 
              <br />
              Choose Comfort
            </p>
          </div>
          <div className="flex gap-8 font-normal xl:text-[24px] text-[12px]">
            {items.map((item, index) => (
              <div
                className="flex md:flex-row flex-col md:gap-2 relative items-center"
                key={index}
              >
                <img src={stars} alt="" />
                <span className="whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 text-black">
            <input
              type="text"
              className="w-full p-4 rounded-2xl border"
              placeholder="Enter your tracking number"
            />
            <div className="flex gap-8 font-medium xl:text-[17px] text-[12px]">
              <button
                className="rounded-xl bg-[#FFD700] xl:px-14 px-8 py-3 
                            whitespace-nowrap cursor-pointer"
              >
                Contact
              </button>
              <button
                className="rounded-xl border border-[#FFD700] xl:px-14 px-8 py-3 
                            text-white whitespace-nowrap cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 hidden xl:flex relative">
          <div className="absolute left-[-5rem] top-12 z-10">
            <motion.div className="yellow h-[142px] w-[142px] relative" />
            <motion.div
              className="green h-[142px] w-[142px] top-[5rem] right-[-5rem] absolute"
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <motion.div
              className="yellow2 h-[142px] w-[142px] top-[5rem] right-[-5rem] absolute"
              animate={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </div>
          <motion.div
            className="absolute h-full w-full iphone"
            animate={{
              rotateY: [0, 90],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="relative h-full w-full iphone"
            animate={{
              rotateY: [90, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
