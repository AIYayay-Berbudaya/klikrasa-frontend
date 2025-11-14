'use client'

import React from 'react';
import { MapPin, Star, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

interface Product {
  name: string;
  location: string;
  price: string;
  rating: number;
}

export default function JajananTradisionalPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const section1Products: Product[] = [
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
  ];

  const section2Products: Product[] = [
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
  ];

  const section3Products: Product[] = [
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
  ];

  const section4Products: Product[] = [
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
    { name: 'Kue Putu Mayang', location: 'Kota Bekasi, DKI Jakarta', price: '0.0', rating: 4.5 },
  ];

  // Combine all products and filter based on search query
  const allProducts = [
    ...section1Products,
    ...section2Products,
    ...section3Products,
    ...section4Products
  ];

  const searchResults = searchQuery
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="w-full bg-white font-sans">
      {/* Hero Section */}
      <section 
        className="relative bg-amber-900 text-white py-16 px-20" 
        style={{
          backgroundImage: "url('/assets/batik-bg.png')",
          backgroundColor: '#78350f',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center z-10 relative">
          <h1 className="text-7xl font-serif font-bold italic mb-8 leading-tight">
            Eksplorasi Jajanan Tradisional
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-full py-4 px-6 flex items-center gap-3 shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <input 
              type="text" 
              placeholder="Cari sesuai yang kamu inginkan mengenai jajanan tradisional..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-gray-600 text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-amber-50 py-12 px-20 min-h-screen">
        {searchQuery ? (
          /* Search Results */
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl text-amber-900 font-serif mb-2">
                Hasil Pencarian untuk "{searchQuery}"
              </h2>
              <p className="text-gray-600">
                Ditemukan {searchResults.length} hasil
              </p>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-3 gap-8">
                {searchResults.map((product: Product, i: number) => (
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
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  Tidak ada hasil yang ditemukan untuk "{searchQuery}"
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Coba gunakan kata kunci yang berbeda
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Default Sections */
          <>
        {/* Section 1 */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl text-amber-900 font-serif">
              Hasil pencarian untuk kata kunci untuk "Kue And Jawa Tengah"
            </h2>
            <a href="#" className="text-amber-900 text-sm underline">Lihat Semua</a>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {section1Products.map((product: Product, i: number) => (
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
            {section2Products.map((product: Product, i: number) => (
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
            {section3Products.map((product: Product, i: number) => (
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
            {section4Products.map((product: Product, i: number) => (
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
          </>
        )}
      </div>
    </div>
  );
}