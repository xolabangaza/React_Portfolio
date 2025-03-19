import React from "react";
import { motion } from "framer-motion";
import redAcademyLogo from '../assets/redAcademyLogo.png';
import uctGSBLogo from '../assets/uctGSBLogo.png';
import lcStudioLogo from '../assets/lcStudioLogo.jpg';

export function Resume() {
  // Add a motion.div to each step and animate on scroll into view.
  return (
    <div className="w-full max-w-3xl pt-32 pb-56 mx-auto
">
      <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ec008c] to-[#fc6767] mb-10 pb-16 ">
        Resume
      </h1>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        
        {/* Timeline Item 1 */}
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-28 h-20  group-[.is-active]: text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img src={redAcademyLogo} alt="redAcademy" className="w-full h-full object-contain" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded border border-slate-800 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-red-700">redAcademy</div>
              <time className="font-caveat font-medium text-red-700">Current</time>
            </div>
            <div className="text-slate-500">Developed innovative web-based solutions to address real-world problems.</div>
          </div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center w-25 h-10 rounded-full group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img src={uctGSBLogo} alt="UCT GSB Solution Space" className="w-full h-full object-contain" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded border border-slate-800 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-blue-500">UCT GSB Solution Space</div>
              <time className="font-caveat font-medium text-blue-500">2024 March</time>
            </div>
            <div className="text-slate-500">Created solutions for given problems. Built web applications every sprint (2 weeks), Upskilled in Nodejs for backend development.</div>
          </div>
        </motion.div>

        {/* Timeline Item 3 */}
        <motion.div
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center w-25 h-16 group-[.is-active]: text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img src={lcStudioLogo} alt="LC Studio" className="w-full h-full object-contain" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-4 rounded border border-slate-800 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-red-700">LC Studio</div>
              <time className="font-caveat font-medium text-red-700">2023 October</time>
            </div>
            <div className="text-slate-500">Created web applications using wordpress</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
