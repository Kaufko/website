"use client"; // Required only in Next.js App Router
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    const fullText = `\tSoftware Engineer,\n\tExpert google searcher,\n\t3D Modeller,\n\tAnimator,\n\tRigger,\n\tMechanical Engineer`;
    const aboutMeText = `Hi, I'm Filip Heřmánek, A.K.A Kaufko. I love tech both in the computer and mechanical world. I've been playing around with computers since the age of 7. Right now I'm learning C#, Javascript, Typescript, Windtail and React`;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const typingSpeed = 25; // Speed of typing (ms per letter)

    useEffect(() => {
        const textToType = "ABOUT {" + fullText + "}";

        // If currentIndex is less than the length of the textToType, continue typing
        if (currentIndex < textToType.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + textToType[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <main className="relative">
            


            <section className="flex flex-col justify-center items-start min-h-screen text-white font-mono ">
                {/* Dynamically typed "ABOUT" */}
                <h1 className="text-4xl text-yellow-300 ml-8 inline">
                    {displayedText.includes("ABOUT") && "ABOUT"}
                </h1>

                {/* Dynamically typed "{}" */}
                <h1 className="text-4xl text-green-400 ml-8 inline">
                    {displayedText.includes("{") && "{"}
                </h1>

                {/* Dynamically typed content inside the brackets */}
                <div className="whitespace-pre text-lg ml-8">
                    {displayedText.replace("ABOUT {", "").replace("}", "")} {/* Remove brackets from dynamic text */}
                    <span className="animate-blink">|</span> {/* Blinking cursor */}
                </div>

                <h1 className="text-4xl text-green-400 ml-8 inline">
                    {displayedText.includes("}") && "}"}
                </h1>
            </section>
            <motion.div className="absolute text-lg overflow-visible font-mono flex justify-center items-center min-h-screen sm:left-1/2 lg:left-2/3 text-white top-1/2 -translate-y-1/2 sm:w-[45vw] lg:sm:w-[30vw]">
                <p className="">{aboutMeText}</p>
            </motion.div>
            

        </main>

    );
};

export default AboutMe;
