"use client"; // Required only in Next.js App Router
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    const fullText = `\tSoftware Engineer,\n\tExpert google searcher,\n\t3D Modeller,\n\tRigger,\n\tAnimator,\n\tMechanical Engineer`;
    const aboutMeText = `Hi, I'm Filip Heřmánek, A.K.A Kaufko. I am a self-taught programmer, who loves tech. I've been playing around with computers since the age of 7 and right now I'm learning C#, Javascript, Typescript, Tailwind and React`;
    
    const textToType = `ABOUT {${fullText}}`;
    const typingSpeed = 50; // Speed per character (ms)
    const glitchCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/"; 

    const [displayedText, setDisplayedText] = useState("");
    const [glitchChar, setGlitchChar] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < textToType.length) {
            let glitchInterval: NodeJS.Timeout | null = null;
            let typingTimeout: NodeJS.Timeout | null = null;

            glitchInterval = setInterval(() => {
                setGlitchChar(glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)]);
            }, 5); // Fast glitch effect

            // After a short delay, stop glitching and add the correct letter
            typingTimeout = setTimeout(() => {
                clearInterval(glitchInterval); // Stop glitching effect
                setDisplayedText((prev) => prev + textToType[currentIndex]); // Add final letter
                setCurrentIndex((prev) => prev + 1);
                setGlitchChar(""); // Reset glitch char
            }, typingSpeed);

            return () => {
                clearInterval(glitchInterval);
                clearTimeout(typingTimeout);
            };
        }
    }, [currentIndex]);

    return (
        <main>
            <div className="relative">
                {/*Make this ignore the top link bar somehow*/}
                <section className="flex flex-col lg:justify-center max-md:py-5 sm:py-10 items-start lg:min-h-screen ">
                    <h1 className="text-4xl text-[var(--maincolor)] ml-8 inline">
                        {displayedText.includes("ABOUT") && "ABOUT"}
                    </h1>
                    <h1 className="text-4xl text-[var(--maincolor)] ml-8 inline">
                        {displayedText.includes("{") && "{"}
                    </h1>

                    {/* Glitched text rendering */}
                    <div className="whitespace-pre ml-8 text-xl">
                        {displayedText.replace("ABOUT {", "").replace("}", "")}
                        <span className="text-red-600">{glitchChar}</span>
                        <span className="animate-blink">|</span>
                    </div>

                    <h1 className="text-4xl text-[var(--maincolor)] ml-8 inline">
                        {displayedText.includes("}") && "}"}
                    </h1>
                </section>
                
                {/* About Me Section */}
                <motion.div className="text-xl flex lg:justify-center lg:items-center lg:min-h-screen lg:top-1/2 lg:absolute lg:-translate-y-1/2 lg:right-0 sm:w-[100vw] lg:w-[40vw] sm:relative px-8 pb-10"
                    initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }}>
                    <p>{aboutMeText}</p>
                </motion.div>
            </div>
        </main>
    );
};

export default AboutMe;
