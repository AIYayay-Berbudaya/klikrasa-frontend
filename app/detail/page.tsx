"use client";

import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";

export default function DetailJajananPage() {
  const [activeTab, setActiveTab] = useState<"cerita" | "resep">("cerita");

  return (
    <div className="w-full bg-[#f7f2e8] font-sans">

      {/* HEADER */}
      <section
        className="relative bg-amber-900 text-white py-16 px-20"
        style={{
          backgroundImage: "url('/assets/batik-bg.png')",
          backgroundColor: "#78350f",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center z-10 relative">
          <h1 className="text-7xl font-serif font-bold italic mb-8 leading-tight">
            Detail Jajanan Tradisional
          </h1>

          <div className="max-w-2xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <input
              type="text"
              placeholder="Cari sesuai yang kamu inginkan mengenai jajanan tradisional..."
              className="flex-1 outline-none text-gray-600 text-sm"
            />
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <div className="py-16 px-20">

        {/* TITLE */}
        <h2 className="text-center text-4xl font-serif text-amber-900 font-semibold mb-8">
          Kue Putu Mayang
        </h2>

        {/* MAIN IMAGE */}
        <div className="w-full flex justify-center mb-8">
          <img
            src="/placeholder/main-image.jpg"
            alt="Main Food"
            className="w-[600px] h-[350px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* GALLERY */}
        <div className="flex justify-center gap-4 mb-16">
          <img src="/placeholder/thumb1.jpg" className="w-24 h-24 rounded-full object-cover border-2 border-amber-800" />
          <img src="/placeholder/thumb2.jpg" className="w-24 h-24 rounded-full object-cover border-2 border-amber-800" />
          <img src="/placeholder/thumb3.jpg" className="w-24 h-24 rounded-full object-cover border-2 border-amber-800" />
        </div>

        {/* TAB BUTTONS */}
        <div className="flex justify-center gap-10 text-amber-900 mb-12">
          <button
            onClick={() => setActiveTab("cerita")}
            className={`pb-2 text-lg ${
              activeTab === "cerita"
                ? "border-b-2 border-amber-900 font-semibold"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Cerita di Balik Rasa
          </button>

          <button
            onClick={() => setActiveTab("resep")}
            className={`pb-2 text-lg ${
              activeTab === "resep"
                ? "border-b-2 border-amber-900 font-semibold"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            Resep di Balik Rasa
          </button>
        </div>

        {/* CONTENT - SWITCH BASED ON TAB */}
        {activeTab === "cerita" ? (
          <>
            {/* CERITA CONTENT */}
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 text-amber-900 leading-relaxed text-[15px]">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  Cerita di Balik Rasa
                </h3>

                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  fermentum lectus in dolor fringilla, ac consequat mauris vestibulum.
                </p>
                <p className="mb-6">
                  Vivamus vitae nunc ut nisi porta volutpat. Integer pretium sem
                  odio, vel ultricies lorem aliquet id.
                </p>
                <p className="mb-6">
                  Pellentesque facilisis sapien id lacus hendrerit tincidunt. Mauris
                  finibus nulla in turpis ornare maximus.
                </p>
              </div>

              {/* SIDEBAR */}
              <div className="flex flex-col gap-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                  <img
                    src="/placeholder/map.jpg"
                    alt="Map Placeholder"
                    className="rounded-md w-full h-48 object-cover"
                  />
                  <div className="flex items-center gap-2 mt-2 text-sm text-amber-900">
                    <MapPin size={14} />
                    <span>Kota Bekasi, DKI Jakarta</span>
                  </div>
                </div>

                <div className="bg-amber-100 p-5 rounded-lg border border-amber-200">
                  <h4 className="font-serif font-bold text-lg text-amber-900 mb-3">
                    Fun Fact
                  </h4>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* RESEP CONTENT */}
            <div className="grid grid-cols-2 gap-8 mt-10">

              {/* Bahan - Bahan */}
              <div className="border border-amber-300 bg-white p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
                  Bahan - Bahan
                </h3>
                <ul className="list-disc list-inside text-sm text-amber-900 leading-relaxed mb-4">
                  <li>250 gr tepung beras</li>
                  <li>50 gr sagu/singkong</li>
                  <li>200 ml air mendidih</li>
                  <li>200 ml santan encer</li>
                  <li>Pewarna makanan alami: merah, hijau, putih</li>
                </ul>

                <div className="flex gap-3 mt-4">
                  <div className="w-14 h-14 bg-gray-300 rounded"></div>
                  <div className="w-14 h-14 bg-gray-300 rounded"></div>
                  <div className="w-14 h-14 bg-gray-300 rounded"></div>
                  <div className="w-14 h-14 bg-gray-300 rounded"></div>
                </div>
              </div>

              {/* Cara Membuat */}
              <div className="border border-amber-300 bg-white p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold text-amber-900 mb-4">
                  Cara Membuat
                </h3>
                <ul className="list-disc list-inside text-sm text-amber-900 leading-relaxed">
                  <li>Tepung beras diseduh dengan air mendidih.</li>
                  <li>
                    Didinginkan, dicampur sagu lalu diberi santan encer.
                  </li>
                  <li>Adonan dibagi 3 warna.</li>
                </ul>

                <h4 className="font-serif font-semibold mt-5 mb-2">
                  Cara Membuat Kinca (Kuah)
                </h4>
                <ul className="list-disc list-inside text-sm text-amber-900 leading-relaxed">
                  <li>Gula direbus sampai larut.</li>
                  <li>Santan kental, daun pandan, dan garam dimasak.</li>
                  <li>Dididihkan sampai harum.</li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* UMKM SECTION */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif text-amber-900 mb-8">
            Dukang UMKM yang Memasarkan Rasa
          </h3>

          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-40 bg-gray-300" />

                <div className="p-4">
                  <h4 className="font-semibold text-amber-900 text-lg mb-1">
                    Kue Putu Mayang {item}
                  </h4>

                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">4.5</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    Kota Bekasi, DKI Jakarta
                  </p>

                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet.
                  </p>

                  <div className="text-lg font-bold text-amber-900">
                    Rp 20.000
                  </div>

                  <button className="mt-3 w-full bg-amber-800 text-white py-2 rounded-lg hover:bg-amber-900 transition">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#f6e4b8] border border-amber-300 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-serif text-amber-900 mb-4">
            Ayo, Tampilkan Cita Rasa Khas Daerahmu!
          </h3>
          <p className="text-amber-900 text-sm mb-8">
            Daftarkan jajananmu & jadi bagian dari Klik Rasa!
          </p>
          <button className="bg-amber-800 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-900 transition">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
