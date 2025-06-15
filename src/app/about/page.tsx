"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Rocket,
  Lightbulb,
  Settings,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-3"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Lorem Ipsum Dolor Sit Amet
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          <ul className="mt-6 space-y-6 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-4">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <span className="text-base sm:text-lg">
                <strong>Lorem Ipsum:</strong> Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Rocket className="text-blue-500 w-6 h-6 mt-1" />
              <span className="text-base sm:text-lg">
                <strong>Dolor Sit Amet:</strong> Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Lightbulb className="text-yellow-500 w-6 h-6 mt-1" />
              <span className="text-base sm:text-lg">
                <strong>Consectetur Adipiscing:</strong> Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Settings className="text-purple-500 w-6 h-6 mt-1" />
              <span className="text-base sm:text-lg">
                <strong>Eiusmod Tempor:</strong> Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="text-red-500 w-6 h-6 mt-1" />
              <span className="text-base sm:text-lg">
                <strong>Incididunt Ut Labore:</strong> Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full h-auto hidden md:block">
          <Image
            src="/assets/about.png"
            alt="About"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
