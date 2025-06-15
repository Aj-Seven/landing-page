"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="flex flex-col items-center text-center md:text-left space-y-6 mx-auto px-3">
      <div className="max-w-6xl w-full flex flex-col justify-center items-center border bg-gradient-to-r from-gray-500/10 to-gray-700/10 backdrop-blur rounded-xl p-8">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Get started with a free trial
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#222222] sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-xs flex flex-col items-center"
        >
          <Link
            href="/auth/register"
            className="bg-indigo-600 hover:bg-indigo-700 justify-center text-white font-medium px-4 py-3 rounded-lg shadow-md transition-all glow-button cursor-pointer"
          >
            Start Free Trial
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
