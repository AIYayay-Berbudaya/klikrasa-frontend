"use client";

import { getAllJajanan } from "@/lib/api";
import { Jajanan } from "@/lib/types";
import {
  Star
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  location: string;
  rating: number;
  ciriKhas: string;
  gambar: string;
}

export default function JajananTradisionalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jajananList, setJajananList] = useState<Jajanan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data dari backend
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getAllJajanan();
        setJajananList(data);
        setError(null);
      } catch (err) {
        setError("Gagal memuat data jajanan");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Convert Jajanan to Product format
  const convertToProduct = (jajanan: Jajanan): Product => ({
    _id: jajanan._id,
    name: jajanan.nama_kue,
    location: jajanan.daerah_kue,
    rating: 4.5, // Default rating karena tidak ada di backend
    ciriKhas: jajanan.deskripsi,
    gambar: jajanan.gambar,
  });

  // Convert all jajanan to products
  const allProducts: Product[] = jajananList.map(convertToProduct);

  // Split into sections (4 items each, or all remaining)
  const section1Products = allProducts.slice(0, 3);
  const section2Products = allProducts.slice(3, 6);
  const section3Products = allProducts.slice(6, 9);
  const section4Products = allProducts.slice(9, 12);

  const searchResults = searchQuery
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.ciriKhas.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="w-full bg-white font-sans">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
          <div className="text-2xl text-amber-900">Memuat data...</div>
        </div>
      ) : error ? (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
          <div className="text-2xl text-red-600">{error}</div>
        </div>
      ) : (
        <>
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
                        key={product._id}
                        className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                        href={`/detail?id=${product._id}`}
                      >
                        <div className="relative w-full h-48 bg-gray-300">
                          <Image
                            src={product.gambar}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
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
                {section1Products.length > 0 && (
                  <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl text-amber-900 font-serif">
                        Jajanan Tradisional Nusantara
                      </h2>
                      <a href="#" className="text-amber-900 text-sm underline">
                        Lihat Semua
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      {section1Products.map((product: Product, i: number) => (
                        <a
                          key={product._id}
                          className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                          href={`/detail?id=${product._id}`}
                        >
                          <div className="relative w-full h-48 bg-gray-300">
                            <Image
                              src={product.gambar}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
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
                )}

                {section2Products.length > 0 && (
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
                          key={product._id}
                          className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                          href={`/detail?id=${product._id}`}
                        >
                          <div className="relative w-full h-48 bg-gray-300">
                            <Image
                              src={product.gambar}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
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
                )}

                {section3Products.length > 0 && (
                  <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl text-amber-900 font-serif">
                        Rasa yang Mungkin Sesuai Selera Anda
                      </h2>
                      <a href="#" className="text-amber-900 text-sm underline">
                        Lihat Semua
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      {section3Products.map((product: Product, i: number) => (
                        <a
                          key={product._id}
                          className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                          href={`/detail?id=${product._id}`}
                        >
                          <div className="relative w-full h-48 bg-gray-300">
                            <Image
                              src={product.gambar}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
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
                )}

                {section4Products.length > 0 && (
                  <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl text-amber-900 font-serif">
                        Jajanan Asli dari Alam Nusantara
                      </h2>
                      <a href="#" className="text-amber-900 text-sm underline">
                        Lihat Semua
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      {section4Products.map((product: Product, i: number) => (
                        <a
                          key={product._id}
                          className=" bg-white rounded-lg shadow-lg overflow-hidden text-(--Color-Primary-500) hover:scale-102 transition-all"
                          href={`/detail?id=${product._id}`}
                        >
                          <div className="relative w-full h-48 bg-gray-300">
                            <Image
                              src={product.gambar}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
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
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
