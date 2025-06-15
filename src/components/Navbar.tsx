"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = {
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    lorem: useRef<HTMLDivElement>(null),
  } as const;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRefs]);

  const navItems = [
    {
      label: "Lorem",
      key: "lorem",
      links: [
        { href: "/ipsum", label: "Ipsum" },
        { href: "/dolor", label: "Dolor" },
        { href: "/amet", label: "Amet" },
      ],
    },
    {
      label: "About",
      key: "about",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/#team", label: "Our Team" },
        { href: "/mission", label: "Our Mission" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press & News" },
      ],
    },
    {
      label: "Contact",
      key: "contact",
      links: [
        { href: "/support", label: "Support" },
        { href: "/#faq", label: "FAQ" },
        { href: "/#request-demo", label: "Request a Demo" },
        { href: "/live-chat", label: "Live Chat" },
        { href: "/request-call", label: "Request a Call" },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-[999] w-full backdrop-blur-md border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="dark:invert"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            BrandName
          </span>
        </Link>

        {/* Hamburger menu (mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <Button
            variant="outline"
            size="default"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="dark:text-white"
          >
            {mobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
          </Button>
        </motion.div>

        {/* Navigation (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ label, key, links }) => (
            <div className="relative" key={key} ref={dropdownRefs[key]}>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === key ? null : key)
                }
                className="flex items-center gap-1 font-medium text-gray-900 hover:text-blue-600 transition cursor-pointer dark:text-white"
                aria-expanded={activeDropdown === key}
              >
                {label}
                {activeDropdown === key ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md border w-56 z-50"
                  >
                    <ul className="flex flex-col text-sm p-2 text-gray-700 dark:text-gray-300">
                      {links.map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link href="/auth/sign-in">
            <Button className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4 overflow-hidden border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col space-y-3 mt-4 text-gray-900 dark:text-gray-300">
              {navItems.map(({ key, label, links }) => (
                <li key={key}>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === key ? null : key)
                    }
                    className="w-full flex justify-between items-center font-medium text-left cursor-pointer dark:text-white"
                  >
                    {label}
                    {activeDropdown === key ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.ul
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="pl-4 mt-2 space-y-2 text-sm dark:text-gray-400"
                      >
                        {links.map(({ href, label }) => (
                          <li key={href}>
                            <Link
                              href={href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 hover:text-blue-600 dark:hover:text-blue-500"
                            >
                              {label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li>
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Sign In
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
