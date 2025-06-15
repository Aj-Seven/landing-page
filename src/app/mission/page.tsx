"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "EcoVision Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur.",
    image: "https://picsum.photos/800/600?random=8",
  },
  {
    id: 2,
    name: "SolarMate X",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    image: "https://picsum.photos/800/600?random=7",
  },
  {
    id: 3,
    name: "GreenTech 3000",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://picsum.photos/800/600?random=6",
  },
  {
    id: 4,
    name: "EcoBoost 500",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/800/600?random=5",
  },
];

export default function MissionPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8"
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

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                className="rounded-md object-cover w-full h-48"
              />
              <CardTitle className="text-xl font-semibold mt-4">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
