"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/assets/bajaj-auto.png",
    alt: "Bajaj",
    link: "https://www.bajajauto.com/",
  },
  {
    src: "/assets/hero-motor.png",
    alt: "Hero Motors",
    link: "https://www.heromotocorp.com/",
  },
  {
    src: "/assets/honda.png",
    alt: "Honda Motors",
    link: "https://www.honda.com/",
  },
  {
    src: "/assets/revolt.png",
    alt: "Revolt",
    link: "https://www.revoltmotorcycles.com/",
  },
  { src: "/assets/ktm.png", alt: "ktm", link: "https://www.ktm.com/" },
  {
    src: "/assets/ola-electric.png",
    alt: "Ola Electric",
    link: "https://www.olaelectric.com/",
  },
  {
    src: "/assets/royal-enfield.png",
    alt: "Royal Enfield",
    link: "https://www.royalenfield.com/",
  },
  {
    src: "/assets/tork-motors.png",
    alt: "Tork Motors",
    link: "https://www.torkmotors.com/",
  },
  {
    src: "/assets/tvs-motors.png",
    alt: "TVS Motors",
    link: "https://www.tvs.com/",
  },
  {
    src: "/assets/ultraviolette.png",
    alt: "Ultraviolette",
    link: "https://www.ultravioletemotors.com/",
  },
  {
    src: "/assets/yamaha.png",
    alt: "Yamaha Motors",
    link: "https://www.yamaha.com/",
  },
];

export default function LogoCarouselSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto py-16 px-3 sm:px-6 lg:px-8"
    >
      <h2 className="text-center text-3xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      </h2>

      {/* Row 1 */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        className="overflow-hidden"
      >
        {logos.map((logo, i) => (
          <div
            key={`row1-${i}`}
            className="mx-6 flex items-center justify-center"
          >
            <Link href={logo.link}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
              />
            </Link>
          </div>
        ))}
      </Marquee>

      {/* Row 2 (reversed direction) */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        direction="right"
        className="overflow-hidden"
      >
        {logos
          .slice()
          .reverse()
          .map((logo, i) => (
            <div
              key={`row2-${i}`}
              className="mx-6 flex items-center justify-center"
            >
              <Link href={logo.link}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition"
                />
              </Link>
            </div>
          ))}
      </Marquee>
    </motion.section>
  );
}
