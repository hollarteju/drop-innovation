import { motion } from "framer-motion";
import Logo from "../assets/drp-logo.jpg";
import { useState, useEffect } from "react";


export default function Benefit(){

    const [currentList, setCurrentList] = useState(0);

    
  const benefitsLists = [
    [
      "Access to Top Technical Talents",
      "Efficient Project Collaboration",
      "Diverse Skillsets",
      "Time and Cost Savings",
    ],
    [
      "Innovative Problem Solving",
      "Flexible Collaboration Models",
      "Real-time Project Tracking",
      "Iterative Prototyping",
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentList((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

    return(
        <div className="w-full lg:col-span-1 bg-blue-800 lg:flex hidden flex-col justify-center text-white p-8 rounded-t-lg lg:rounded-l-lg xl:h-3/4">
        <div className="flex flex-col px-12">
          <div className="mb-16">
            <div className="p-4 rounded-full flex items-center justify-center">
                <img src={Logo} width={100} height={100} alt="logo" />
            </div>
          </div>
            
          <h2 className="text-lg font-semibold mb-6 text-start lg:text-left">KEY BENEFITS OF JOINING DROP INNOVATION.</h2>
          <motion.ul
                key={currentList} // Ensures Framer Motion detects the list change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                classNameName="space-y-2 w-full"
              >
                {benefitsLists[currentList].map((benefit, index) => (
                  <li 
                  className="text-start w-full p-3 text list-disc" 
                  key={index}>{benefit}</li>
                ))}
              </motion.ul>
        </div>
      </div>
    )
}