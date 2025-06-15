"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Tom Benson",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Lily Chan",
    role: "Product Designer",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Jake Arlo",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

export function TeamSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-3"
      id="team"
    >
      <div className="mb-8">
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Lorem Ipsum
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl ">
          Aliquam erat volutpat. Pellentesque et libero nec justo tristique
          ultricies.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, idx) => (
          <Card
            key={idx}
            className="flex flex-col text-center py-4 hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-row items-center space-y-2 p-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>{" "}
              <CardContent className="p-2">
                <h3 className="text-base font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
