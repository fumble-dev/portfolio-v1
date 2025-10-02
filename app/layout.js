import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Load fonts properly
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Udanth Reddy",
  description:
    "Full-stack developer skilled in building secure, scalable web applications. Experienced in React, Node.js, and databases with a strong focus on efficiency and user-friendly design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
