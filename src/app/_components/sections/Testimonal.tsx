"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Lorem Ipsum",
    avatar: "https://i.pravatar.cc/100?img=1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    name: "John Smith",
    title: "Consectetur Adipiscing",
    avatar: "https://i.pravatar.cc/100?img=12",
    quote:
      "Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    name: "Alice Johnson",
    title: "Lorem Ipsum",
    avatar: "https://i.pravatar.cc/100?img=8",
    quote:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet.",
  },
  {
    name: "Alice Johnson",
    title: "Lorem Ipsum",
    avatar: "https://i.pravatar.cc/100?img=14",
    quote:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet.",
  },
  {
    name: "Alice Johnson",
    title: "Lorem Ipsum",
    avatar: "https://i.pravatar.cc/100?img=11",
    quote:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet.",
  },
];

export default function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto py-20 px-3"
    >
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
          Lorem Ipsum
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-gray-600 dark:text-gray-300"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          ligula nec erat tristique dignissim.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-col items-center gap-3 pt-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>

              <CardContent className="text-center px-6 pb-6">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-sm">
                  “{testimonial.quote}”
                </p>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
