"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Work", href: "#projects", id: "projects" },
  { name: "Awards", href: "#awards", id: "awards" },
  { name: "Contact", href: "#contact", id: "contact" },
  { name: "Blogs", href: "/blogs", id: "blogs", isPage: true },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.filter((item) => !item.isPage).map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    // If we're not on the homepage, navigate to homepage with hash
    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      // Otherwise, just scroll to the section
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-8">
            {menuItems.slice(1).map((item) => (
              item.isPage ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname?.startsWith(item.href) ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.href)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id && pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
