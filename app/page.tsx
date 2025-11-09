import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function RasaNusantaraLanding() {
  return (
    <div className="w-full bg-white font-sans">
      {/* Header/Navigation */}
      <header className="bg-amber-900 text-white py-4 px-20" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)'
      }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded"></div>
            <span className="text-base font-normal">Klik Rasa, Crispi Budaya</span>
          </div>
          <nav className="flex gap-12 text-sm">
            <a href="#" className="hover:text-amber-200">Home</a>
            <a href="#" className="hover:text-amber-200">Jelajahi</a>
            <a href="#" className="hover:text-amber-200">Jajanan Tradisional</a>
            <a href="#" className="hover:text-amber-200">Tentang Kami</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-24 px-20" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)',
        backgroundColor: '#78350f'
      }}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif italic mb-8 leading-tight">
            Eksplorasi Rasa, Lestarikan Budaya
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <input 
              type="text" 
              placeholder="Cari sesuai yang kamu inginkan mengenai jajanan tradisional..."
              className="flex-1 outline-none text-gray-600 text-sm"
            />
          </div>
          
          {/* Interactive Link */}
          <div className="mt-6">
            <a href="#" className="text-sm text-white border-b border-white hover:text-amber-200">
              Lihat Peta Interaktif
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-20 bg-amber-50">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          Peta Rasa Nusantara
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-green-200 rounded-lg shadow-lg relative overflow-hidden">
            {/* Indonesia Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600">Peta Indonesia dengan Pin Lokasi</p>
              </div>
            </div>
            {/* Pin markers */}
            {[
              { top: '30%', left: '20%' },
              { top: '40%', left: '35%' },
              { top: '50%', left: '50%' },
              { top: '45%', left: '65%' },
              { top: '55%', left: '75%' },
              { top: '35%', left: '80%' }
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
            { title: 'Kue Tradisional', color: 'from-yellow-200 to-yellow-400' },
            { title: 'Camilan Gurih', color: 'from-green-200 to-green-400' },
            { title: 'Manisan dan Dodol', color: 'from-pink-200 to-pink-400' },
            { title: 'Kue Basah', color: 'from-orange-200 to-orange-400' }
          ].map((cat, i) => (
            <div key={i} className="text-center">
              <div className={`w-full h-48 bg-gradient-to-br ${cat.color} rounded-lg shadow-lg mb-4`}></div>
              <h3 className="font-semibold text-amber-900">{cat.title}</h3>
              <p className="text-sm text-gray-600 mt-2">Nikmati berbagai pilihan kue tradisional yang lezat</p>
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
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Kue Lapis Manado</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Kue lapis dengan tekstur lembut dan rasa manis yang pas. Terbuat dari bahan pilihan 
              berkualitas tinggi dengan resep turun temurun yang autentik. Cocok untuk berbagai 
              acara spesial Anda.
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
                Karena setiap kue menyimpan cerita dan warisan budaya yang perlu dijaga 
                untuk generasi mendatang. Kelezatan tradisional adalah identitas bangsa.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-20">
        <div className="grid grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Rasa Nusantara</h4>
            <p className="text-amber-100 text-sm">
              Melestarikan cita rasa tradisional Indonesia dengan kualitas terbaik
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li><a href="#" className="hover:text-white">Beranda</a></li>
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white">Produk</a></li>
              <li><a href="#" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-3 text-sm text-amber-100">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@rasanusantara.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-8 flex justify-between items-center">
          <p className="text-sm text-amber-100">© 2024 Rasa Nusantara. All rights reserved.</p>
          <div className="flex gap-4">
            <Facebook size={20} className="cursor-pointer hover:text-amber-200" />
            <Instagram size={20} className="cursor-pointer hover:text-amber-200" />
            <Twitter size={20} className="cursor-pointer hover:text-amber-200" />
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600">
        <Phone className="text-white" size={28} />
      </div>
    </div>
  );
}