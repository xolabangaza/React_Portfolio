import React from "react";

export function About() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center mx-auto p-12 md:p-24">
            {/* Heading */}
            <h1 className="text-7xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ec008c] to-[#fc6767] mt-4">
                I craft digital experiences, blending <br />creativity to shape the future.
            </h1>
            {/* Content Section */}
            <div className="mt-10 flex flex-col md:flex-row gap-4">
                {/* Tech Stack */}
                <div className="bg-gray-950 ml-56 p-6 rounded-lg shadow-lg w-full md:w-1/4">
                    <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
                    <ul className="space-y-2">
                        {["Javascript", "Typescript", "Tailwind", "React", "NextJs", "NodeJs", "Express", "Postman", "MongoDB", "PostgreSQL"].map((tech) => (
                            <li key={tech} className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Me */}
                <div className="bg-gray-950 text-gray-400 p-20 rounded-lg flex flex-col items-center shadow-lg w-full md:w-2/4">
                    <p className="text-left ">
                        My journey into <span className="font-bold text-gray-300">software engineering</span> began with a passion for artistic
                        creation, honed through drawing and making music. This creative background naturally guided me toward the
                        world of technology.
                    </p>
                    <p className="mt-2 text-left">
                        I specialize in both <span className="font-bold text-gray-300">frontend</span> and <span className="font-bold text-gray-300">backend</span> development, thriving on
                        the creativity coding offers. <span className="italic">"For me, coding is not just a profession, it's a
                            space to innovate and unleash my creativity."</span>
                    </p>
                    <p className="mt-2 text-left">
                        Beyond coding, I enjoy video creation, editing, and watching anime, which inspire my approach to UI/UX
                        design through <span className="font-bold text-gray-300">visual storytelling</span> and <span className="font-bold text-gray-300">aesthetics</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
