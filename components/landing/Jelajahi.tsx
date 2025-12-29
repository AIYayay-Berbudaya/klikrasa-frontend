import Image from "next/image";
import React from "react";

interface JelajahiProps {
  upPosition?: boolean;
  leftPosition?: boolean;
  img: string;
  caption: string;
}

const Jelajahi = ({
  upPosition,
  leftPosition,
  img,
  caption,
}: JelajahiProps) => {
  return (
    <div
      className={`flex relative z-10 text-white ${
        leftPosition ? "flex-row" : "flex-row-reverse"
      } items-center gap-24 justify-center`}
    >
      <p className="font-inter text-xl text-center max-w-60">{caption}</p>
      <Image
        src={img}
        alt="jajan"
        width={200}
        height={200}
        className={`object-cover w-48 h-48 ${
          upPosition && leftPosition
            ? "rounded-t-2xl rounded-bl-2xl shadow-[-20px_-20px_0px_rgba(226,169,159,0.3)]"
            : upPosition && !leftPosition
            ? "rounded-t-2xl rounded-br-2xl shadow-[20px_-20px_0px_rgba(226,169,159,0.3)]"
            : !upPosition && leftPosition
            ? "rounded-tl-2xl rounded-b-2xl shadow-[-20px_20px_0px_rgba(226,169,159,0.3)]"
            : "rounded-tr-2xl rounded-b-2xl shadow-[20px_20px_0px_rgba(226,169,159,0.3)]"
        }`}
      />
    </div>
  );
};

export default Jelajahi;
