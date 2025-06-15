"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppStores() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto bg-gray-100 dark:bg-gray-900 border rounded-xl py-20 px-3"
    >
      <section className="max-w-6xl mx-auto ">
        <div className="max-w-4xl mx-auto text-center md:flex md:justify-between md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Get our App on your device
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Download the app from your favorite store. We have a lot of
              features waiting for you to try them out. Make sure to check our
              changelog for the latest updates.
            </p>

            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* Google Play Store */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.example"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="transition-all"
              >
                <Image
                  src="/assets/google-store-badge.png"
                  alt="Get it on Google Play"
                  width={100}
                  height={100}
                  className="h-14 w-auto"
                />
              </motion.a>

              {/* Apple App Store */}
              <motion.a
                href="https://apps.apple.com/app/example-app/id000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="transition-all"
              >
                <Image
                  src="/assets/apple-store-badge.png"
                  alt="Download on the App Store"
                  width={100}
                  height={100}
                  className="h-14 w-auto"
                />
              </motion.a>
            </div>
          </div>
          <div className="hidden md:block md:w-2/4">
            <Image
              src="/assets/hand-phone.png"
              alt="Phone"
              className="object-contain"
              height={800}
              width={800}
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
}
