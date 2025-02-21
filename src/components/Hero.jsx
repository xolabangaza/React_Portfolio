import React from "react";
import SocialIcons from "./SocialIcons"; // Importing SocialIcons component

export function Hero() {
  return (
    // <StarryBackground>
      <section id="/" className="flex flex-col items-center justify-center text-center py-56 text-white relative">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec008c] to-[#fc6767] mt-4">
          Xola Bangaza
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mt-4">
          I'm a <span className="font-bold text-white">Software Developer</span> based in
          <span className="text-pink-400"> Cape Town</span>, specializing in designing
          <span className="font-bold text-white"> aesthetically pleasing UIs</span> and
          <span className="font-bold text-white"> scalable applications</span> that perform efficiently.
        </p>

        {/* Calling SocialIcons Component Here */}
        <div className="mt-6">
          <SocialIcons />
        </div>
      </section>
    // </StarryBackground>
  );
}
