"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`w-[80%] fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-[#2F130E]/80 ${
        isHeroVisible ? "opacity-100" : "opacity-20"
      } hover:opacity-100 text-white py-4 px-12 rounded-4xl shadow-lg flex justify-between items-center backdrop-blur-xl hover:backdrop-blur-md transition-all duration-300`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded"></div>
        <span className="text-xl font-bold font-cormorant">
          Klik Rasa, Cicip Budaya
        </span>
      </div>
      <nav className="flex gap-12 text-sm">
        <Link href="/" className="hover:text-amber-200">
          Home
        </Link>
        <Link href="#peta-rasa" className="hover:text-amber-200">
          Jelajahi
        </Link>
        <Link href="/explore" className="hover:text-amber-200">
          Jajanan Tradisional
        </Link>
        <Link href="/about-us" className="hover:text-amber-200">
          Tentang Kami
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
