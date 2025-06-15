"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background"
    >
      <div className="max-w-md">
        <Image
          src="/404.svg"
          alt="404 Not Foundt"
          width={400}
          height={300}
          className="mx-auto"
        />

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button className="px-6">Go back home</Button>
        </Link>
      </div>
    </motion.section>
  );
}
