import green from "../assets/green_1.png";
import red from "../assets/red_1.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";




export default function Cards(){

    const sectionRef = useRef(null); // Reference to the section
    const isInView = useInView(sectionRef, { once: true });

    const contents = [
        {
            header: "Our Vision",
            body: "Our vision is to bridge the value gap in the mobilization ecosystem globally, especially in Nigeria."
        },
        {
            header: "Our Mission",
            body: "Our vision is to bridge the value gap in the mobilization ecosystem globally, especially in Nigeria."
        },
        {
            header: "Our Values",
            body: "Our vision is to bridge the value gap in the mobilization ecosystem globally, especially in Nigeria."
        },
        {
            header: "Our Team",
            body: "Our vision is to bridge the value gap in the mobilization ecosystem globally, especially in Nigeria."
        },
    ]

    const card = "xl:mt-12 h-full"

    return(
        <div className="xl:px-24 px-8 xl:pb-36">
            <div className="w-full text-center text-3xl py-24 text-bold">
                <h1>Our Services</h1>
            </div>

            <div ref={sectionRef}  className="xl:grid flex flex-col gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
                {contents.map((content, index) => (
                    <motion.div
                        key={index}
                        className={`${
                            index % 2 === 1 && card
                        } bg-white shadow-2xl border rounded-2xl px-6 text-center py-12`}
                        // Add animation with conditional rendering based on `isInView`
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                    >
                        <h2 className="text-xl font-bold mb-2">{content.header}</h2>
                        <div className="py-8">
                            <div className="items-center flex w-full justify-center">
                                <img
                                    src={index % 2 === 1 ? red : green}
                                    width={100}
                                    alt=""
                                />
                            </div>
                        </div>
                        <p className="text-gray-600">{content.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}