import Image from "next/image";
import React, { useState } from "react";

const Thumbnail = () => {
  const [active, setActive] = useState("");
  return (
    <div>
      {/* MAIN IMAGE CONTAINER */}
      <div className="w-full flex justify-center mb-8">
        {/* Wrapper Div handles the Gradient Border. 
            The padding (p-1) creates the thickness of the border.
        */}
        <div
          className="p-1 rounded-[20px] shadow-md inline-block"
          style={{
            background: `linear-gradient(253deg, #FCDFA9 1.24%, #FFE7B9 47.91%, #FFF 98.76%)`,
          }}
        >
          <Image
            height={350}
            width={600}
            src="/assets/jajanan/jajan8.png"
            alt="Main Food"
            className="w-[700px] h-[400px] object-cover rounded-2xl bg-white"
          />
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-4 ">
        {/* Thumb 1 - Active */}
        <Image
          height={80}
          width={80}
          alt="thumb"
          src="/assets/jajanan/jajan8.png"
          className="w-20 h-20 rounded-2xl object-cover border-4 border-(--Color-Secondary-900)"
        />

        {/* Thumb 2 */}
        <Image
          height={80}
          width={80}
          alt="thumb"
          src="/assets/jajanan/jajan8.png"
          className="w-20 h-20 rounded-2xl object-cover"
        />

        {/* Thumb 3 */}
        <Image
          height={80}
          width={80}
          alt="thumb"
          src="/assets/jajanan/jajan8.png"
          className="w-20 h-20 rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Thumbnail;
