import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/vercel.svg" />
        <title>BrandName</title>
        <meta
          name="description"
          content="BrandName - Landing page for your business, offering innovative solutions and services."
        />
        <meta
          name="keywords"
          content="BrandName, Landing page, Business, Next.js, Tailwind CSS, Solutions, Services"
        />
        <meta name="author" content="BrandName" />
        <meta property="og:title" content="BrandName - Innovative Solutions" />
        <meta
          property="og:description"
          content="Discover BrandName's innovative solutions for your business needs."
        />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://brandname.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrandName - Innovative Solutions" />
        <meta
          name="twitter:description"
          content="Explore BrandName's offerings tailored to boost your business."
        />
        <meta name="twitter:image" content="/assets/twitter-image.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
