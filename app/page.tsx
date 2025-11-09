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

export default function RasaNusantaraLanding() {
  return (
    <div className="relative w-full bg-white font-sans">
      <Hero />
      {/* Map Section */}
      <section className="py-20 px-20 bg-amber-50">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Peta Rasa Nusantara
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="w-full h-96 bg-linear-to-br from-blue-200 to-green-200 rounded-lg shadow-lg relative overflow-hidden">
            {/* Indonesia Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">
                  Peta Indonesia dengan Pin Lokasi
                </p>
              </div>
            </div>
            {/* Pin markers */}
            {[
              { top: "30%", left: "20%" },
              { top: "40%", left: "35%" },
              { top: "50%", left: "50%" },
              { top: "45%", left: "65%" },
              { top: "55%", left: "75%" },
              { top: "35%", left: "80%" },
            ].map((pos, i) => (
              <div key={i} className="absolute" style={pos}>
                <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
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
      <section className="py-20 px-20 bg-amber-50">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          ✦ Kenanga Kita Lesatarikan Rasa Nusantara ✦
        </h2>
        <div className="max-w-4xl mx-auto flex gap-12 items-center">
          <div className="flex-1">
            <div className="w-64 h-64 bg-amber-900 rounded-full mx-auto flex items-center justify-center">
              <div className="w-48 h-48 bg-amber-100 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Kenapa paden melestarikan tradisional?
              </h3>
              <p className="text-gray-700 mb-6">
                Karena setiap kue menyimpan cerita dan warisan budaya yang perlu
                dijaga untuk generasi mendatang. Kelezatan tradisional adalah
                identitas bangsa.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </div>
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
