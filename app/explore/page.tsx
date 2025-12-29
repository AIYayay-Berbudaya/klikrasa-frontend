"use client";

import React from "react";
import {
  MapPin,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import Image from "next/image";

interface Product {
  name: string;
  location: string;
  price: string;
  rating: number;
  ciriKhas: string;
}

export default function JajananTradisionalPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const section1Products: Product[] = [
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
  ];

  const section2Products: Product[] = [
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
  ];

  const section3Products: Product[] = [
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
  ];

  const section4Products: Product[] = [
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
    {
      name: "Kue Putu Mayang",
      location: "Kota Bekasi, DKI Jakarta",
      price: "0.0",
      rating: 4.5,
      ciriKhas:
        "Lembut, warna-warni, kuah gula merah, santan gurih, simbol kebersamaan",
    },
  ];

  const allProducts = [
    ...section1Products,
    ...section2Products,
    ...section3Products,
    ...section4Products,
  ];

  const searchResults = searchQuery
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="w-full bg-white font-sans">
      <section
        className="relative bg-amber-900 text-white py-48 flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/batik-bg.png')",
          backgroundColor: "#78350f",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="hero-section"
      >
        <h1 className="text-7xl font-cormorant font-bold italic mb-8 leading-tight">
          Eksplorasi Jajanan Tradisional
        </h1>
        <div className="min-w-4xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
          <div className="w-8 h-8 rounded-full shrink-0 pt-1">
            <Image
              src="/assets/chatbot-float.svg"
              className=""
              width={50}
              height={50}
              alt="chatbot-float"
            />
          </div>
          <input
            type="text"
            placeholder="Cari sesuai yang kamu inginkan mengenai jajanan tradisional..."
            className="flex-1 outline-none text-gray-600 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </section>
      <div className="bg-amber-50 py-12 px-20 min-h-screen">
        {searchQuery ? (
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl text-amber-900 font-serif mb-2">
                Hasil Pencarian untuk &quot;{searchQuery}&quot;
              </h2>
              <p className="text-gray-600">
                Ditemukan {searchResults.length} hasil
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-3 gap-8">
                {searchResults.map((product: Product, i: number) => (
                  <a
                    key={i}
                    className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                    href="/detail"
                  >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-3 p-5 pb-8">
                      <div className="flex justify-between align-middle items-center text-2xl ">
                        <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1 truencate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-[#DFCE49] text-lg"
                            fill="currentColor"
                          />
                          <span className="text-lg pb-0.5">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <span className="flex align-middle items-center gap-2">
                        <Image
                          src="/assets/rumah.svg"
                          alt="rumah"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <p>{product.location}</p>
                      </span>
                      <div className="text-base">
                        <p className="font-bold ">Ciri Khas:</p>
                        <p className="font-medium line-clamp-2">
                          {product.ciriKhas}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  Tidak ada hasil yang ditemukan untuk "{searchQuery}&quot;
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Coba gunakan kata kunci yang berbeda
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl text-amber-900 font-serif">
                  Hasil pencarian untuk kata kunci untuk "Kue And Jawa Tengah"
                </h2>
                <a href="#" className="text-amber-900 text-sm underline">
                  Lihat Semua
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {section1Products.map((product: Product, i: number) => (
                  <a
                    key={i}
                    className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                    href="/detail"
                  >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-3 p-5 pb-8">
                      <div className="flex justify-between align-middle items-center text-2xl ">
                        <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1 truencate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-[#DFCE49] text-lg"
                            fill="currentColor"
                          />
                          <span className="text-lg pb-0.5">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <span className="flex align-middle items-center gap-2">
                        <Image
                          src="/assets/rumah.svg"
                          alt="rumah"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <p>{product.location}</p>
                      </span>
                      <div className="text-base">
                        <p className="font-bold ">Ciri Khas:</p>
                        <p className="font-medium line-clamp-2">
                          {product.ciriKhas}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl text-amber-900 font-serif">
                  Cita Rasa yang Sedang Tren Hari Ini
                </h2>
                <a href="#" className="text-amber-900 text-sm underline">
                  Lihat Semua
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {section2Products.map((product: Product, i: number) => (
                  <a
                    key={i}
                    className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                    href="/detail"
                  >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-3 p-5 pb-8">
                      <div className="flex justify-between align-middle items-center text-2xl ">
                        <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1 truencate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-[#DFCE49] text-lg"
                            fill="currentColor"
                          />
                          <span className="text-lg pb-0.5">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <span className="flex align-middle items-center gap-2">
                        <Image
                          src="/assets/rumah.svg"
                          alt="rumah"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <p>{product.location}</p>
                      </span>
                      <div className="text-base">
                        <p className="font-bold ">Ciri Khas:</p>
                        <p className="font-medium line-clamp-2">
                          {product.ciriKhas}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl text-amber-900 font-serif">
                  Rasa yang Mungkin Jalan Selamat dan Mulut
                </h2>
                <a href="#" className="text-amber-900 text-sm underline">
                  Lihat Semua
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {section3Products.map((product: Product, i: number) => (
                  <a
                    key={i}
                    className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                    href="/detail"
                  >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-3 p-5 pb-8">
                      <div className="flex justify-between align-middle items-center text-2xl ">
                        <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1 truencate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-[#DFCE49] text-lg"
                            fill="currentColor"
                          />
                          <span className="text-lg pb-0.5">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <span className="flex align-middle items-center gap-2">
                        <Image
                          src="/assets/rumah.svg"
                          alt="rumah"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <p>{product.location}</p>
                      </span>
                      <div className="text-base">
                        <p className="font-bold ">Ciri Khas:</p>
                        <p className="font-medium line-clamp-2">
                          {product.ciriKhas}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl text-amber-900 font-serif">
                  Jajanan Anda Asji-asji dari Alam Nusantara
                </h2>
                <a href="#" className="text-amber-900 text-sm underline">
                  Lihat Semua
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {section4Products.map((product: Product, i: number) => (
                  <a
                    key={i}
                    className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                    href="/detail"
                  >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="flex flex-col gap-3 p-5 pb-8">
                      <div className="flex justify-between align-middle items-center text-2xl ">
                        <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1 truencate">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star
                            className="text-[#DFCE49] text-lg"
                            fill="currentColor"
                          />
                          <span className="text-lg pb-0.5">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <span className="flex align-middle items-center gap-2">
                        <Image
                          src="/assets/rumah.svg"
                          alt="rumah"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <p>{product.location}</p>
                      </span>
                      <div className="text-base">
                        <p className="font-bold ">Ciri Khas:</p>
                        <p className="font-medium line-clamp-2">
                          {product.ciriKhas}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
