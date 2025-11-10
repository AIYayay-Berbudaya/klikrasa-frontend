import React from "react";
interface TitleProps {
  children: React.ReactNode;
  isBrown?: boolean;
}

const Title = ({ children, isBrown = false }: TitleProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Kiri */}
      <div className="relative flex items-center w-full">
        <span
          className={`absolute h-1 ${
            isBrown ? "bg-[#501D13]" : "bg-white"
          } w-full rounded-full`}
        />
        <span
          className={`absolute right-0 w-4 h-4 ${
            isBrown ? "bg-[#501D13]" : "bg-white"
          } rounded-full`}
        />
      </div>
      {/* Teks */}
      <div
        className={`font-cormorant text-5xl font-bold italic whitespace-nowrap ${
          isBrown ? "text-[#501D13]" : "text-white"
        }`}
      >
        {children}
      </div>
      {/* Kanan */}
      <div className="relative flex items-center w-full">
        <span
          className={`absolute left-0 w-4 h-4 ${
            isBrown ? "bg-[#501D13]" : "bg-white"
          } rounded-full`}
        />
        <span
          className={`absolute h-1 ${
            isBrown ? "bg-[#501D13]" : "bg-white"
          } w-full rounded-full`}
        />
      </div>
    </div>
  );
};

export default Title;
