"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Empowering Simplicity",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum nulla vitae diam elementum.",
    img: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Innovating Experiences",
    text: "Sed nec augue a lorem egestas pulvinar. Integer vitae justo ut libero tincidunt tristique.",
    img: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Delivering Impact",
    text: "Fusce suscipit, justo eget bibendum congue, sem lacus malesuada sapien, vel ultrices leo lacus a velit.",
    img: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Delivering Impact",
    text: "Fusce suscipit, justo eget bibendum congue, sem lacus malesuada sapien, vel ultrices leo lacus a velit.",
    img: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Delivering Impact",
    text: "Fusce suscipit, justo eget bibendum congue, sem lacus malesuada sapien, vel ultrices leo lacus a velit.",
    img: "https://picsum.photos/800/600?random=3",
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect active slide based on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollX = el.scrollLeft;
      const width = el.clientWidth;
      const index = Math.round(scrollX / width);
      setActiveIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto py-20 px-3 sm:px-6 lg:px-8"
    >
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Lorem Ipsum
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Aliquam erat volutpat. Pellentesque et libero nec justo tristique
          ultricies.
        </p>
      </div>
      {/* Story carousel container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide space-x-6"
      >
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-full md:w-[80%] lg:w-[60%] snap-center rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={story.img}
                alt={story.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{story.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="mt-6 flex justify-center gap-2">
        {stories.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
