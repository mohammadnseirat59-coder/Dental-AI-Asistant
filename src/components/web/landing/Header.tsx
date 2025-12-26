"use client";

import { useEffect, useState } from "react";

import AuthButtons from "@/components/shared/AuthButtons";
import { ISectionProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { section_LInks } from "@/constant";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  //! useEffect to handle Active Link on Scroll:
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    section_LInks.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    //! Cleanup function
    return () => observer.disconnect();
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-primary/50 bg-gradient-to-r from-background/80 to-primary/10
    px-6 py-2 h-16"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section*/}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="Logo Image"
            height={32}
            width={32}
            className="w-12 md:w-11 "
          />
          <span className="hidden md:inline-block text-lg font-[400] text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
            Dental Assistant
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {section_LInks.map((section: ISectionProps, Idx: number) => (
            <a
              key={`${Idx}_${section.id}`}
              href={`#${section.id}`}
              className={`group text-capitalize relative text-base ${
                activeLink === section.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              } transition-all duration-300`}
            >
              {section.label}
              <span
                className={`absolute left-0 -bottom-2 ${
                  activeLink === section.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                } h-0.5 bg-primary  transition-all duration-300`}
              />
            </a>
          ))}
        </div>
        {/*Buttons */}
        <AuthButtons showUserButton />
      </div>
    </nav>
  );
};

export default Header;
