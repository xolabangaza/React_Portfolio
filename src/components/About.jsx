import React from "react";
import { FaJs, FaReact, FaNode, FaCss3Alt, FaHtml5, FaBootstrap, FaVuejs } from "react-icons/fa";
import { DiPostgresql, DiWordpress } from "react-icons/di"; // For PostgreSQL, WordPress
import { SiTailwindcss, SiMongodb, SiFigma } from "react-icons/si"; // For NextJS, Tailwind, Express, MongoDB
import { FaCogs } from "react-icons/fa"; // Fallback for C#


export function About() {
    // The techIcons object mapping tech names to corresponding React Icons
    const techIcons = {
        HTML: <FaHtml5 className="text-red-500 text-3xl" />,
        CSS: <FaCss3Alt className="text-blue-500 text-3xl" />,
        Javascript: <FaJs className="text-yellow-400 text-3xl" />,
        Typescript: <FaJs className="text-blue-400 text-3xl" />,
        Tailwind: <SiTailwindcss className="text-teal-400 text-3xl" />,
        React: <FaReact className="text-cyan-400 text-3xl" />,
        NodeJs: <FaNode className="text-green-400 text-3xl" />,
        VueJS: <FaVuejs className="text-green-400 text-3xl" />,
        Postman: <FaReact className="text-red-400 text-3xl" />,
        MongoDB: <SiMongodb className="text-green-600 text-3xl" />,
        PostgreSQL: <DiPostgresql className="text-blue-600 text-3xl" />,
        Bootstrap: <FaBootstrap className="text-purple-600 text-3xl" />,
        Figma: <SiFigma className="text-purple-400 text-3xl" />,
        Csharp: <FaCogs className="text-cyan-600 text-3xl" />,
        WordPress: <DiWordpress className="text-blue-700 text-3xl" />
    };

    return (
        <div id="about" className="min-h-screen text-white flex flex-col items-center mx-auto p-12 md:p-24">
            {/* Heading */}
            <h1 className="text-7xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ec008c] to-[#fc6767] mt-4">
                I craft digital experiences, blending <br />creativity to shape the future.
            </h1>
            {/* Content Section */}
            <div className=" mt-10 flex flex-col md:flex-row gap-3">
                {/* Tech Stack */}
                <div className="animate__animated animate__fadeInLeft bg-gray-950 ml-56 p-6 border border-gray-800 rounded-xl shadow-lg w-full md:w-1/3">
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {["HTML", "CSS", "Javascript", "Typescript", "Tailwind", "React", "NodeJs", "VueJS", "Postman", "MongoDB", "PostgreSQL", "Bootstrap", "Figma", "Csharp", "WordPress"].map((tech) => (
                            <div key={tech} className="flex items-center gap-2">
                                {/* Displaying icon and tech */}
                                <span>{techIcons[tech]}</span> {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* About Me */}
                <div className="animate__animated animate__fadeInRight bg-gray-950 text-gray-400 p-12 rounded-xl border border-gray-800 flex flex-col items-center shadow-lg w-full md:w-2/4">
                    <p className="text-left">
                        My journey into <span className="font-bold text-gray-300">software development</span> began with a passion for creative expression, which naturally led me to the world of technology.
                    </p>
                    <p className="mt-2 text-left">
                        I specialize primarily in <span className="font-bold text-gray-300">frontend</span> development, but I am also experienced in <span className="font-bold text-gray-300">backend</span> development. I thrive on the creativity that coding offers. <span className="italic">For me, coding is not just a profession—it's a space to innovate and unleash my creativity.</span>
                    </p>
                    <p className="mt-2 text-left">
                        Beyond coding, I enjoy playing <span className="font-bold text-gray-300">tennis</span> and exploring, which help me maintain a balanced and inspired approach to my work.
                    </p>
                </div>

            </div>
        </div>
    );
}
