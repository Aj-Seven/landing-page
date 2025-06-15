"use client";

import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const infoData = [
  {
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non erat id justo eleifend feugiat.",
    image: "/assets/image1.png",
  },
  {
    title: "Consectetur Adipiscing",
    description:
      "Suspendisse potenti. Curabitur convallis justo at ante sodales, nec tempus sapien tincidunt.",
    image: "/assets/image2.png",
  },
  {
    title: "Integer Non Erat",
    description:
      "Sed tincidunt, justo nec porttitor imperdiet, arcu arcu fermentum elit, ac tempor felis purus nec erat.",
    image: "/assets/image3.png",
  },
  {
    title: "Curabitur Convallis",
    description:
      "Aliquam erat volutpat. Pellentesque et libero nec justo tristique ultricies.",
    image: "/assets/image3.png",
  },
];

export default function InfoSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto py-20 px-3 sm:px-6 lg:px-8"
    >
      <div className="mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Lorem Ipsum
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Aliquam erat volutpat. Pellentesque et libero nec justo tristique
          ultricies.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start">
        {/* Left: Textual Data */}
        <div className="w-full lg:w-1/2 space-y-2">
          {infoData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="shrink-0 rounded-lg"
                />
                <div>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    href=""
                    className="text-indigo-600 hover:text-indigo-400 transition-colors duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 ml-4 mt-1 py-3 rounded-lg shadow-md transition-all cursor-pointer space-x-2"
            >
              Lorem Ipsum
            </Link>

            <span className="flex items-center gap-2 ml-4">
              <PhoneCall size={30} />
              1234567890
            </span>
          </div>
        </div>

        {/* Right: Small Fixed Image */}
        <div className="w-full hidden lg:w-2/3 lg:flex justify-center">
          <div className="relative w-130 h-165 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/image.png"
              alt="Decorative side"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
