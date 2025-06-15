"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t text-gray-700 dark:text-gray-300 py-2 mt-8 px-3"
    >
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Brand Section with Logo */}
        <motion.div variants={fadeUp}>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain rounded-full"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              BrandName
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </p>
        </motion.div>

        {/* Quick Links*/}
        <motion.div variants={fadeUp} custom={1}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* === Resources === */}
        <motion.div variants={fadeUp} custom={2}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Support
              </a>
            </li>
          </ul>
        </motion.div>

        {/* === Contact & Social === */}
        <motion.div variants={fadeUp} custom={3}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Stay Connected
          </h3>
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>info@brandname.com</span>
          </div>
          <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        custom={4}
        className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 text-sm text-center text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()} BrandName. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
