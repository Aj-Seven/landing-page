"use client";

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Zod schema
const QuoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phonenumber: z.string().min(2, "Phone number is required"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type QuoteFormData = z.infer<typeof QuoteSchema>;

export default function DemoSection() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phonenumber: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormData, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    const result = QuoteSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof QuoteFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", submitted);
    setSubmitted(true);
    toast.success("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phonenumber: "",
      company: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-3"
      id="request-demo"
    >
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
          Request a Demo
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 p-4 md:p-6 lg:p-8 rounded-xl border"
        >
          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Your Name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "your@email.com",
            },
            {
              label: "Phone Number",
              name: "phonenumber",
              type: "tel",
              placeholder: "(123) 456-7890",
            },
            {
              label: "Company",
              name: "company",
              type: "text",
              placeholder: "Company Name",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                {label}
              </label>
              <input
                name={name}
                type={type}
                value={formData[name as keyof QuoteFormData]}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors[name as keyof QuoteFormData]
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                placeholder={placeholder}
              />
              {errors[name as keyof QuoteFormData] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[name as keyof QuoteFormData]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition-all"
          >
            Submit Request
          </motion.button>
        </form>
      </section>
    </motion.section>
  );
}
