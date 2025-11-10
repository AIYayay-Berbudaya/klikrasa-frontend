import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/landing/title";
import Map from "@/components/landing/map";
import Image from "next/image";

export default function RasaNusantaraLanding() {
  return (
    <div
      className="relative w-full bg-[#FCF2DF] font-sans"
      style={{
        background: "var(--Color-Scheme-1-Background, #FCF2DF)",
      }}
    >
      <Hero />
      {/* Map Section */}
      <section className="flex bg-amber-50 py-8 gap-12 flex-col justify-center">
        <Title isBrown={true}>Peta Rasa Nusantara</Title>
        <Map />
      </section>

      {/* Product Categories */}
      <section className="py-20 px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          ✦ Jelajahi Keanekaragaman Rasa ✦
        </h2>
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Kue Tradisional",
              color: "from-yellow-200 to-yellow-400",
            },
            { title: "Camilan Gurih", color: "from-green-200 to-green-400" },
            { title: "Manisan dan Dodol", color: "from-pink-200 to-pink-400" },
            { title: "Kue Basah", color: "from-orange-200 to-orange-400" },
          ].map((cat, i) => (
            <div key={i} className="text-center">
              <div
                className={`w-full h-48 bg-linear-to-br ${cat.color} rounded-lg shadow-lg mb-4`}
              ></div>
              <h3 className="font-semibold text-amber-900">{cat.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Nikmati berbagai pilihan kue tradisional yang lezat
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Menu Section */}
      <section className="py-20 px-20 bg-amber-50">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Izinkan Unggulan Hari Ini
        </h2>
        <div className="max-w-4xl mx-auto flex gap-12 items-center">
          <div className="flex-1">
            <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg shadow-xl"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Kue Lapis Manado
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Kue lapis dengan tekstur lembut dan rasa manis yang pas. Terbuat
              dari bahan pilihan berkualitas tinggi dengan resep turun temurun
              yang autentik. Cocok untuk berbagai acara spesial Anda.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 px-20 bg-amber-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Temui Santara, Si AI Pecinta Jajanan Nusantara
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-bold text-xl mb-2">Apa Namamu?</h3>
              <p className="text-amber-100">
                Nama saya adalah Namamu, asisten AI yang siap membantu Anda menemukan 
                kue tradisional favorit!
              </p>
            </div>
          </div>
          {[
            { q: 'Apa keahlianmu?', a: 'Saya dapat membantu Anda menemukan resep, informasi nutrisi, dan rekomendasi kue tradisional.' },
            { q: 'Apa saja?', a: 'Saya mengenal berbagai jenis kue dari Sabang sampai Merauke dengan detail lengkap.' },
            { q: 'Bagaimana cara memesan?', a: 'Anda dapat memesan melalui website, telepon, atau langsung datang ke toko kami!' }
          ].map((item, i) => (
            <div key={i} className="bg-amber-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">{item.q}</h3>
              <p className="text-amber-100 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="flex gap-17 flex-col pt-11 pb-32 bg-(--Color-Scheme-1-Background)">
        <Title isBrown={true}>Bersama Kita Lestarikan Rasa Nusantara</Title>
        <div className="max-w-5xl mx-auto flex gap-21 items-center justify-center">
          <Image
            src={"/assets/mascot-smile.png"}
            alt="mascot smile"
            width={350}
            height={350}
            className="bg-(--Color-Primary-300) rounded-full"
          />

          <div className="relative flex-1">
            <div className="text-(--Color-Primary-500)">
              <h3 className="font-cormorant font-semibold mb-4 text-4xl">
                Kamu jualan jajanan tradisional?
              </h3>
              <p className="mb-6 font-medium text-xl">
                Yuk, tampilkan jualanmu di Klik Rasa, Cicip Budaya supaya lebih
                banyak yang tahu dan jatuh cinta sama jajanan kulinermu.
              </p>
              <button className="bg-(--Color-Primary-500) hover:bg-(--Color-Primary-500)/80 text-white px-22 py-2 font-semibold rounded-3xl cursor-pointer">
                Daftarkan Produkmu
              </button>
            </div>
            <Image
              src={"/assets/batik-leaf.svg"}
              alt="batik leaf"
              height={182}
              width={182}
              className="absolute -right-30 top-30 rotate-3"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 z-10">
        <Phone className="text-white" size={28} />
      </div>
    </div>
  );
}
