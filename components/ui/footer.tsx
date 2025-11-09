import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  InstagramIcon,
  LucideInstagram,
} from "lucide-react";
import {
  RiInstagramFill,
  RiTiktokFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex bg-[#2F130E] text-white flex-col">
      <div
        className="
          relative grid grid-cols-2 gap-12 pb-36 pt-16 px-36 overflow-hidden
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/assets/batik-segitiga.png')]
          before:bg-[length:30%] before:bg-repeat before:bg-center
          before:opacity-20
        "
        style={{
          backgroundColor: "#2F130E",
        }}
      >
        <h4 className="relative z-10 font-bold font-cormorant text-4xl self-center">
          Klik Rasa, <br />
          Cicip Budaya
        </h4>

        {/* Tambahkan 'relative z-10' di sini juga */}
        <div className="relative z-10 flex gap-32">
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-4 text-sm text-amber-100">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jelajahi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Jajan Tradisional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Sosial Media</h4>
            <div className="flex space-x-6 text-4xl text-amber-100">
              <RiInstagramFill className="text-white" />
              <RiTiktokFill className="text-white" />
              <RiYoutubeFill className="text-white" />
              <RiTwitterXFill className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#2F130E] py-3">
        <p className="text-sm text-amber-100">
          develop by Team AIYayYay with ❤ 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
