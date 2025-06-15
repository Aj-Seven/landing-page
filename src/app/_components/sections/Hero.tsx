"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("why");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 14 });
  const springY = useSpring(y, { stiffness: 120, damping: 14 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((offsetX - centerX) / centerX) * 60 * -1;
    const moveY = ((offsetY - centerY) / centerY) * 60 * -1;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full flex items-center justify-center px-3 bg-background dark:bg-gray-900/50 backdrop-blur-md overflow-hidden py-6"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 blur-3xl opacity-15 pointer-events-none"></div>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        {/* Text Section*/}
        <div className="flex flex-col md:items-start text-left md:text-left space-y-3">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-gray-900 dark:text-white"
          >
            Lorem ipsum dolor sit amet
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#222222] text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl"
          >
            Consectetur adipiscing elit. Nullam vehicula, nisl vel convallis
            dapibus, lorem risus rutrum enim, a lacinia sem velit at lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-xs"
          >
            <Link
              href="/auth/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-3 rounded-lg shadow-md transition-all glow-button cursor-pointer space-x-2"
            >
              Start Free Trial
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              *No credit card required
            </p>
          </motion.div>
        </div>

        {/* Image Section */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full flex justify-center items-center"
        >
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative w-full sm:w-12/12 md:w-[80%] lg:w-[90%] aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[4/4] overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl backdrop-blur-md dark:border-gray-700/50"
          >
            <Image
              src="/assets/hero-image.png"
              alt="Demo product preview"
              fill
              priority
              className="object-cover rounded-xl pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
