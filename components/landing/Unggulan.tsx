import Image from "next/image";
import React from "react";

interface UnggulanProps {
  img: string;
  title: string;
  origin: string;
  desc: string;
}
const Unggulan = ({ img, title, origin, desc }: UnggulanProps) => {
  return (
    <div className="relative flex flex-row bg-white rounded-4xl max-w-6xl justify-center self-center p-8 gap-10">
      <Image
        src={"/assets/batik-leaf.svg"}
        alt="batik leaf"
        height={182}
        width={182}
        className="absolute -right-32 top-50 -rotate-15 z-10"
      />
      <Image
        src={"/assets/batik-leaf.svg"}
        alt="batik leaf"
        height={182}
        width={182}
        className="absolute -left-32 top-50 rotate-15 transform-[scaleX(-1)] z-10"
      />
      <Image
        src={img}
        alt={title}
        height={200}
        width={200}
        className="border-[#702E22] border-4 rounded-xl object-cover w-md"
      />
      <div className="flex flex-col text-[#702E22] justify-center max-w-lg gap-4">
        <div className="flex flex-col text-[#702E22] justify-center gap-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-3xl font-cormorant font-bold">{title}</h5>
            <span className="flex flex-row gap-2 items-center align-middle text-lg">
              <Image
                src="/assets/rumah.svg"
                alt="rumah"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <p>{origin}</p>
            </span>
          </div>
          <p>{desc}</p>
        </div>
        <a
          className="flex self-center bg-[#702E22] text-[#F2F2F2] text-lg rounded-3xl py-3 px-32"
          href={`/detail/${title}`}
        >
          Baca Ceritanya
        </a>
      </div>
    </div>
  );
};

export default Unggulan;
