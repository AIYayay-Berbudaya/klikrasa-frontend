"use client";

import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Thumbnail from "@/components/detail/Thumbnail";
import ProductCard from "@/components/detail/ProductCard";

export default function DetailJajananPage() {
  const [activeTab, setActiveTab] = useState<"cerita" | "resep">("cerita");
  const [kueData, setKueData] = useState({
    title: "Kue Putu Mayang",
    thumbnail: ["1", "2", "3"],
    shop: [
      {
        title: "Kue Putu Mayang Enaknyo",
        img: "/assets/jajanan/jajan2.png",
        rating: "4.9",
        shop: "Toko Mawar Senja",
        price: "15.000",
        link: "#",
      },
      {
        title: "Kue Putu Mayang Barokah",
        img: "/assets/jajanan/jajan2.png",
        rating: "4.9",
        shop: "Toko Lestari Rasa",
        price: "20.000",
        link: "#",
      },
      {
        title: "Kue Putu Mayang Jaya",
        img: "/assets/jajanan/jajan2.png",
        rating: "4.9",
        shop: "Toko Kue Nyiur Manis",
        price: "20.000",
        link: "#",
      },
    ],
  });
  return (
    <div className="w-full bg-[#FCF2DF] pb-20 font-medium">
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
          Detail Jajanan Tradisional
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
          />
        </div>
      </section>

      <div className="flex flex-col gap-11 py-16 px-26">
        <div>
          <h2 className="text-center font-cormorant text-4xl text-[#702E22] font-bold mb-8">
            Kue Putu Mayang
          </h2>
          <Thumbnail />
        </div>

        <div>
          <div className="flex justify-center gap-10 text-[#702E22] mb-12">
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
          {activeTab === "cerita" ? (
            <>
              <div className="grid grid-cols-3 gap-14 text-lg">
                <div className="col-span-2 text-[#702E22] leading-relaxed text-[15px]">
                  <h3 className="font-cormorant text-3xl font-bold mb-6">
                    Cerita di Balik Rasa
                  </h3>
                  <p className="mb-6">
                    Putu Mayang jenis makanan ringan merupakan salah satu
                    kuliner khas yang berasal dari Betawi. banyak referensi
                    sejarah yang mengaitkan keberadaan Putu Mayang dengan
                    cerita-cerita rakyat yang ada di Betawi, salah satunya ialah
                    cerita Rakyat Jampang Mayangsari. Kata “Mayang” konon
                    dikaitkan dengan dengan tokoh “Mayang Sari” yang jelita.
                    Dalam cerita rakyat, kata “Mayang” digambarkan sebagai
                    sesuatu yang berombak, bergelung-gelung, dan indah, seperti
                    bentuk kue putumayang yang berombak dan bergelung-gelung
                    seperti selendang berkibaran ditiup angin. Hal ini
                    direpresentasikan dalam bentuk Putu mayang yang bergelombang
                    dan bergelung. Selain itu, berdasarkan sumber-sumber lisan
                    yang turun-temurun, Putumayang berkaitan erat dengan kue
                    asal India yaitu Kue Mayam yang berasal dari India Selatan.
                  </p>
                  <p className="mb-6">
                    Hal ini disinyalir erat kaitannya dengan posisi Hindia
                    Belanda, khususnya Batavia (Jakarta) pada masa lalu sebagai
                    salah satu pelabuhan dan pusat perdagangan penting dimana
                    terjadi banyak interaksi sosial multibangsa didalamnya.
                    Adanya interaksi antarbangsa yang terjadi membuat masyarakat
                    Betawi membuat kue yang serupa dengan Kue Mayam asal India.
                    Sumber lain juga mengatakan, bahwa Putu Mayang terinspirasi
                    dari kebiasaan masyarakat Tionghoa yang suka mengkonsumsi
                    mie, sehingga bentuk gelombang pada Putu Mayang mirip dengan
                    bentuk mie. Akan tetapi sampai saat ini belum ada bukti
                    pasti apakah memang Putu Mayang yang merupakan kuliner khas
                    Betawi dengan kuliner dari India atau Tionghoa saling
                    mempengaruhi. Namun demikian tidak tertutup kemungkinan
                    bahwa terjadi pertukaran budaya yang saling mempengaruhi
                    satu sama lain.
                  </p>
                  <p className="mb-6">
                    Persebaran Putu Mayang sangat luas, bahkan hingga saat ini
                    masyarakat mengenal beragam jenis Putu Mayang yang ada,
                    diantaranya Putu Mayang yang berwarna-warni (menggunakan
                    pewarna makanan). Akan tetapi Putu Mayang yang asli Betawi
                    adalah yang warnanya putih seperti beras, dengan gumpalan
                    adonan yang tipis dan kecil. Dalam tradisi masyarakat
                    Betawi, Putu Mayang biasa dihidangkan sebagai
                    makanan berbuka puasa atau camilan setelah selesai Shalat
                    Tarawih. Hal ini kemungkinan karena kebiasaan masyarakat
                    untuk tidak mengkonsumsi makanan berat setelah seharian
                    berpuasa, sehingga mengkonsumsi makanan yang padat dan manis
                    untuk mengganti energi yang hilang.
                  </p>
                  <p className="mb-6">
                    Sebagai salah satu kuliner khas masyarakat yang sudah ada
                    sejak dulu, Putu Mayang memiliki andil bagi masyarakat
                    Betawi salah satunya dari sisi ekonomi yaitu sebagai salah
                    satu sumber mata pencaharian masyarakat yang berjualan
                    kue-kue tradisional, selain itu sebagai salah satu hidangan
                    atau camilan yang disajikan kepada masyarakat pada
                    kegiatan-kegiatan umum seperti kerja bakti, rapat warga, dan
                    sebagainya, Putu Mayang secara tidak langsung menjadi media
                    silaturahim ketika warga berkumpul sambil bercengkarama
                    menikmati jamuan.
                  </p>
                  <span className="mb-6">
                    Sumber :{" "}
                    <a href="https://www.kebudayaanbetawi.com/750/putu-mayang-kuliner-khas-yang-berasal-dari-betawi/">
                      https://www.kebudayaanbetawi.com/750/putu-mayang-kuliner-khas-yang-berasal-dari-betawi/
                    </a>
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 mt-2 text-lg text-[#702E22]">
                    <Image
                      src="/assets/rumah.svg"
                      alt="rumah"
                      width={20}
                      height={20}
                      className="w-9 h-9"
                    />
                    <span>Khas Betawi, DKI Jakarta</span>
                  </div>
                  <Image
                    src="/assets/map-lokasi/map-jakarta.png"
                    alt="Map Placeholder"
                    width={192}
                    height={192}
                    className="w-full"
                  />
                  <div
                    style={{
                      background: `
                linear-gradient(94deg, #501D13 6.15%, #B6422B 84.2%) padding-box,
                linear-gradient(94deg, #501D13 6.12%, #B6422B 53.4%) border-box
              `,
                      border: "4px solid transparent",
                      borderRadius: "20px",
                    }}
                    className="flex flex-col items-center px-5 py-4 text-white"
                  >
                    <h4 className="font-cormorant font-bold text-bold mb-3 text-2xl">
                      - Fun Fact -
                    </h4>
                    <p className="text-[16px] leading-normal font-normal text-justify">
                      Pernah nggak kepikiran, bentuk anyaman putu mayang yang
                      lucu itu sebenarnya punya makna kesatuan dan keharmonisan?
                      😲Dan, dulunya kue ini disajikan gurih, bukan manis
                      seperti sekarang! Bahkan warnanya hijau dari pandan
                      dipercaya membawa kesuburan dan harapan baik. Jarang
                      banget orang Betawi tahu fakta unik ini…
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div className="border border-amber-300 bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-cormorant font-semibold text-bold-900 mb-4">
                    Bahan - Bahan
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#702E22] leading-relaxed mb-4">
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
                <div className="border border-amber-300 bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-cormorant font-semibold text-bold-900 mb-4">
                    Cara Membuat
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#702E22] leading-relaxed">
                    <li>Tepung beras diseduh dengan air mendidih.</li>
                    <li>
                      Didinginkan, dicampur sagu lalu diberi santan encer.
                    </li>
                    <li>Adonan dibagi 3 warna.</li>
                  </ul>
                  <h4 className="font-cormorant font-semibold mt-bold mb-2">
                    Cara Membuat Kinca (Kuah)
                  </h4>
                  <ul className="list-disc list-inside text-sm text-[#702E22] leading-relaxed">
                    <li>Gula direbus sampai larut.</li>
                    <li>Santan kental, daun pandan, dan garam dimasak.</li>
                    <li>Dididihkan sampai harum.</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-6 ">
          <h3 className="text-2xl font-cormorant text-[#702E22] font-bold">
            Dukung UMKM yang Memasarkan Rasa
          </h3>

          <div className="grid grid-cols-3 gap-8">
            {kueData.shop.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                rating={item.rating}
                shop={item.shop}
                price={item.price}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-20 bg-(--Color-Accent-200) rounded-lg p-12 text-center mx-10">
        <Image
          src={"/assets/batik-leaf-dark.svg"}
          alt="batik leaf"
          height={182}
          width={182}
          className="absolute right-30 top-10 -rotate-5 z-10 transform-[scaleX(-1)]"
        />
        <Image
          src={"/assets/batik-leaf-dark.svg"}
          alt="batik leaf"
          height={182}
          width={182}
          className="absolute left-30 top-10 rotate-5 z-10"
        />
        <h3 className="text-4xl font-cormorant text-(--Color-Secondary-900) font-bold ">
          Ayo, Tampilkan Cita Rasa Khas Daerahmu! <br />
          Daftarkan Jajananmu & Jadi Bagian dari Klik Rasa!
        </h3>
        <button className="bg-(--Color-Primary-500) text-white px-40 py-3 rounded-[20px] text-lg hover:bg-amber-900 transition">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}
