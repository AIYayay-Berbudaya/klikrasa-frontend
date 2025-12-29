import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  img: string;
  rating: string;
  shop: string;
  price: string;
  link: string;
}
const ProductCard = ({
  title,
  img,
  rating,
  shop,
  price,
  link,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-lg rounded-lg overflow-hidden text-(--Color-Primary-500)">
      <div className="w-full h-55 bg-gray-300 relative">
        <Image
          src={img}
          alt={title}
          fill // Fills the parent container fully
          className="object-cover" // Ensures aspect ratio is maintained without distortion
        />
      </div>

      <div className="flex flex-col gap-3 p-4 pb-5">
        <div className="flex justify-between align-middle items-center text-2xl ">
          <h4 className="font-semibold  mb-1 font-cormorant line-clamp-1">
            {title}
          </h4>
          <div className="flex items-center gap-1">
            <Star className="text-[#DFCE49] text-lg" fill="currentColor" />
            <span className="text-lg pb-0.5">{rating}</span>
          </div>
        </div>

        <span className="flex align-middle gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_473_296)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.856934 6.85718V8.57146C0.856934 9.47096 1.13995 10.3477 1.6659 11.0774C2.19184 11.8071 2.93405 12.3528 3.78739 12.6372C4.64072 12.9217 5.56193 12.9304 6.42051 12.6622C7.27909 12.394 8.03152 11.8625 8.57122 11.1429C9.35293 12.1835 10.5975 12.8572 11.9998 12.8572C13.4021 12.8572 14.6466 12.1835 15.4284 11.1429C15.9681 11.8625 16.7205 12.394 17.5791 12.6622C18.4377 12.9304 19.3589 12.9217 20.2122 12.6372C21.0655 12.3528 21.8077 11.8071 22.3337 11.0774C22.8596 10.3477 23.1426 9.47096 23.1426 8.57146V6.85718C23.1428 6.73288 23.1159 6.61004 23.0638 6.49718L21.1489 2.35032C20.9431 1.90471 20.614 1.52732 20.2006 1.26274C19.7872 0.99815 19.3066 0.857423 18.8158 0.857178H5.18379C4.69294 0.857423 4.21242 0.99815 3.79898 1.26274C3.38555 1.52732 3.05648 1.90471 2.85065 2.35032L0.935791 6.49889C0.883956 6.61123 0.857054 6.73346 0.856934 6.85718ZM2.57122 14.3572C3.16265 14.3572 3.64265 14.8372 3.64265 15.4286V21.2143H8.57122V18.9103C8.57122 18.001 8.93244 17.1289 9.57542 16.486C10.2184 15.843 11.0905 15.4817 11.9998 15.4817C12.9091 15.4817 13.7812 15.843 14.4242 16.486C15.0671 17.1289 15.4284 18.001 15.4284 18.9103V21.2143H20.3569V15.4286C20.3569 15.1444 20.4698 14.8719 20.6707 14.671C20.8717 14.4701 21.1442 14.3572 21.4284 14.3572C21.7125 14.3572 21.985 14.4701 22.186 14.671C22.3869 14.8719 22.4998 15.1444 22.4998 15.4286V21.4286C22.4998 21.9401 22.2966 22.4306 21.9349 22.7923C21.5732 23.154 21.0827 23.3572 20.5712 23.3572H3.42836C2.91687 23.3572 2.42633 23.154 2.06466 22.7923C1.70298 22.4306 1.49979 21.9401 1.49979 21.4286V15.4286C1.49979 14.8372 1.97979 14.3572 2.57122 14.3572Z"
                fill="#702E22"
              />
            </g>
            <defs>
              <clipPath id="clip0_473_296">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[16px]">{shop}</p>
        </span>

        <p className="text-xl font-bold ">Rp {price}</p>

        <a
          href={link}
          className="w-full bg-(--Color-Primary-500) text-center text-white py-2 rounded-full hover:bg-amber-900 transition"
        >
          Beli Sekarang
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
