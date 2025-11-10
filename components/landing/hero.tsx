"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const jajanan = [
  "/assets/jajanan/jajan2.png",
  "/assets/jajanan/jajan3.png",
  "/assets/jajanan/jajan4.png",
  "/assets/jajanan/jajan5.png",
  "/assets/jajanan/jajan6.png",
  "/assets/jajanan/jajan7.png",
  "/assets/jajanan/jajan8.png",
  "/assets/jajanan/jajan9.png",
  "/assets/jajanan/jajan10.png",
  "/assets/jajanan/jajan11.png",
  "/assets/jajanan/jajan12.png",
  "/assets/jajanan/jajan13.png",
  "/assets/jajanan/jajan14.png",
  "/assets/jajanan/jajan15.png",
  "/assets/jajanan/jajan16.png",
  "/assets/jajanan/jajan17.png",
];

const Hero = () => {
  const [scrollSpeed, setScrollSpeed] = useState(10);
  const topX = useMotionValue(0);
  const bottomX = useMotionValue(0);

  useEffect(() => {
    const itemWidth = 359 + 40; // termasuk margin (mx-5)
    const totalImages = 8;
    const totalWidth = itemWidth * totalImages; // panjang 1 set aja
    let animationFrameId: number;
    let lastTime = Date.now();

    // offset awal buat bawah (biar langsung nyambung)

    // bottomX.set(-totalWidth);
    const animateLoop = () => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const movement = (1000 / scrollSpeed) * deltaTime;

      // posisi sekarang
      const currentTopX = topX.get();
      const currentBottomX = bottomX.get();

      // geser
      const newTopX = currentTopX - movement; // kiri
      const newBottomX = currentBottomX + movement; // kanan

      // reset kalau sudah keluar batas
      topX.set(newTopX <= -totalWidth ? 0 : newTopX);
      bottomX.set(newBottomX >= 0 ? -totalWidth : newBottomX);

      animationFrameId = requestAnimationFrame(animateLoop);
    };

    animateLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed, topX, bottomX]);

  useEffect(() => {
    let isScrolling: any;
    const handleScroll = () => {
      setScrollSpeed(10);
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => setScrollSpeed(30), 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);

  return (
    <section
      className="relative bg-amber-900 text-white px-20 min-h-[843px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/batik-bg.png')",
        backgroundColor: "#78350f",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero-section"
    >
      {/* TOP ROW */}
      <div className="absolute top-0 w-full overflow-hidden py-4">
        <motion.div
          className="flex"
          style={{ x: useTransform(topX, (v) => `${v}px`) }}
        >
          {[...jajanan.slice(0, 8), ...jajanan.slice(0, 8)].map((j, index) => (
            <div
              key={`top-${index}`}
              className="shrink-0 w-[359px] h-43 mx-5 opacity-50 rounded-3xl"
              style={{
                background:
                  "linear-gradient(0deg, rgba(191, 69, 46, 0.20) 0%, rgba(191, 69, 46, 0.20) 100%)",
              }}
            >
              <Image
                src={j}
                alt={`Jajanan ${index + 1}`}
                width={359}
                height={169}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM ROW */}
      <div className="absolute bottom-10 w-full overflow-hidden pt-20 py-4">
        <motion.div
          className="flex"
          style={{ x: useTransform(bottomX, (v) => `${v}px`) }}
        >
          {[...jajanan.slice(8), ...jajanan.slice(8)].map((j, index) => (
            <div
              key={`bottom-${index}`}
              className="shrink-0 w-[359px] h-43 mx-5 opacity-50 rounded-3xl"
              style={{
                background:
                  "linear-gradient(0deg, rgba(191, 69, 46, 0.20) 0%, rgba(191, 69, 46, 0.20) 100%)",
              }}
            >
              <Image
                src={j}
                alt={`Jajanan ${index + 8}`}
                width={359}
                height={169}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="text-center mb-12 z-10">
        <h1 className="text-7xl font-cormorant font-bold italic mb-8 leading-tight">
          Eksplorasi Rasa, Lestarikan Budaya
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
          <div className="w-6 h-6 bg-gray-300 rounded-full shrink-0"></div>
          <input
            type="text"
            placeholder="Cari sesuai yang kamu inginkan mengenai jajanan tradisional..."
            className="flex-1 outline-none text-gray-600 text-sm"
          />
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="text-sm text-white border-b border-white hover:text-amber-200"
          >
            Lihat Peta Interaktif
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
