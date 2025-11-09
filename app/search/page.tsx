import React from 'react';
import { MapPin, Star, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export default function JajananTradisionalPage() {
  const products = [
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
  ];

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
      <section className="relative bg-amber-900 text-white py-16 px-20" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)',
        backgroundColor: '#78350f'
      }}>
        <div className="text-center">
          <h1 className="text-4xl font-serif italic mb-8 leading-tight">
            Eksplorasi Jajanan Tradisional
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <input 
              type="text" 
              placeholder=""
              className="flex-1 outline-none text-gray-600 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-amber-50 py-12 px-20 min-h-screen">
        {/* Section 1 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-amber-900 font-serif">
              Hasil pencarian untuk kata kunci untuk "Kue And Jawa Tengah"
            </h2>
            <a href="#" className="text-amber-900 text-sm underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span>{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="text-lg font-bold text-amber-900">Rp {product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-amber-900 font-serif">
              Cita Rasa yang Sedang Tren Hari Ini
            </h2>
            <a href="#" className="text-amber-900 text-sm underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span>{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="text-lg font-bold text-amber-900">Rp {product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-amber-900 font-serif">
              Rasa yang Mungkin Jalan Selamat dan Mulut
            </h2>
            <a href="#" className="text-amber-900 text-sm underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span>{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="text-lg font-bold text-amber-900">Rp {product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-amber-900 font-serif">
              Jajanan Anda Asji-asji dari Alam Nusantara
            </h2>
            <a href="#" className="text-amber-900 text-sm underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin size={14} />
                    <span>{product.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <div className="text-lg font-bold text-amber-900">Rp {product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-20">
        <div className="grid grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="font-bold text-xl mb-4">Klik Rasa,<br/>Crispi Budaya</h4>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li><a href="#" className="hover:text-white">Jelajahi</a></li>
              <li><a href="#" className="hover:text-white">Jajanan Tradisional</a></li>
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Sosial Media</h4>
            <div className="flex gap-4">
              <Instagram size={24} className="cursor-pointer hover:text-amber-200" />
              <Facebook size={24} className="cursor-pointer hover:text-amber-200" />
              <Youtube size={24} className="cursor-pointer hover:text-amber-200" />
              <Twitter size={24} className="cursor-pointer hover:text-amber-200" />
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-6 text-center">
          <p className="text-sm text-amber-100">
            Hak Cipta © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}