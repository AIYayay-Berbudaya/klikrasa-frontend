import Hero from "@/components/landing/hero";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/landing/title";
import Map from "@/components/landing/map";
import Image from "next/image";
import Jelajahi from "@/components/landing/Jelajahi";
import Unggulan from "@/components/landing/Unggulan";
import FeaturesCard from "@/components/landing/FeaturesCard";
import LightBulbIcon from "@/components/landing/icon/LightBulbIcon";
import BookIcon from "@/components/landing/icon/BookIcon";
import BrainIcon from "@/components/landing/icon/BrainIcon";
import ChatIcon from "@/components/landing/icon/ChatIcon";

export default function RasaNusantaraLanding() {
  return (
    <div
      className="relative w-full bg-[#FCF2DF] font-sans font-medium overflow-clip"
      style={{
        background: "var(--Color-Scheme-1-Background, #FCF2DF)",
      }}
    >
      <Hero />
      {/* Map Section */}
      <section
        className="flex bg-[#FCF2DF] pb-8 gap-12 flex-col justify-center min-h-screen"
        id="peta-rasa"
      >
        <Title isBrown={true}>Peta Rasa Nusantara</Title>
        <Map />
      </section>

      <section
        className="
          relative flex pt-12 pb-36 gap-16 min-h-screen flex-col align-middle overflow-clip
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/assets/batik-segitiga.png')]
          before:bg-size-[20%] before:bg-repeat before:bg-center
          before:opacity-20
          text-white
                  "
        style={{
          backgroundColor: "#2F130E",
        }}
      >
        <div className="flex gap-4 flex-col">
          <Title isBrown={false}>Jelajahi Berdasarkan Rasa</Title>
          <p className="flex self-center text-xl">
            Temukan jajanan sesuai suasana hatimu
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-row gap-4">
            <Jelajahi
              upPosition
              leftPosition
              img="/assets/jajanan/jajan2.png"
              caption="Cocok untuk pecinta cita rasa lembut dan lembut di lidah."
            />
            <Jelajahi
              upPosition
              img="/assets/jajanan/jajan3.png"
              caption="Nikmati sensasi khas jajanan berbumbu nusantara."
            />
          </div>
          <div className="flex flex-row gap-4">
            <Jelajahi
              leftPosition
              img="/assets/jajanan/jajan4.png"
              caption="Eksplorasi cita rasa yang sudah jarang ditemukan."
            />
            <Jelajahi
              img="/assets/jajanan/jajan5.png"
              caption="Teman sempurna untuk waktu santai."
            />
          </div>
        </div>
      </section>

      <section className="flex pt-12 pb-36 gap-16 min-h-screen flex-col align-middle bg-[#FCF2DF]">
        <div className="flex gap-4 flex-col">
          <Title isBrown={true}>Jajanan Unggulan Hari Ini</Title>
          <p className="flex self-center text-xl text-[#702E22]">
            Setiap rasa punya cerita hari ini, kenalan yuk dengan “
            <span className="font-semibold">Kue Putu Mayang</span>”
          </p>
        </div>
        <Unggulan
          img="/assets/jajanan/jajan8.png"
          title="Kue Putu Mayang"
          origin="Khas Betawi, DKI Jakarta"
          desc="Putu Mayang adalah kue tradisional Betawi yang terbuat dari tepung beras dan santan, dibentuk seperti mi berwarna-warni, lalu disajikan dengan saus gula merah. Kue ini melambangkan kebersamaan dan keceriaan dalam setiap acara keluarga atau hajatan."
        />
      </section>

      <section
        className="
          relative flex pt-12 pb-26 gap-16 min-h-screen flex-col align-middle overflow-clip
          before:content-[''] before:absolute before:inset-0
          before:bg-[url('/assets/batik-segitiga.png')]
          before:bg-size-[20%] before:bg-repeat before:bg-center
          before:opacity-20
          text-white
                  "
        style={{
          backgroundColor: "#2F130E",
        }}
      >
        <div className="flex gap-4 flex-col">
          <Title isBrown={false}>
            Temui Santara, Si AI Pecinta Jajanan Nusantara
          </Title>
          <p className="flex self-center text-xl">
            Teman digitalmu yang siap bantu eksplorasi rasa, cerita, dan makna
            di balik jajanan tradisional Indonesia.
          </p>
        </div>

        <div className="z-10 max-w-6xl mx-auto flex gap-32 items-center justify-center">
          <div className="flex flex-col gap-20 items-center">
            <div className="flex flex-col relative items-center ">
              <span className="bg-white rounded-4xl text-(--Color-Scheme-1-Text-bglight) p-10">
                Hai! Mau aku bantu cari jajanan favoritmu?
              </span>
              <div className="absolute -bottom-10">
                <svg
                  width="62"
                  height="42"
                  viewBox="0 0 62 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.8176 41.6224L1.08722e-05 7.46611e-05L61.2362 1.195L29.8176 41.6224Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <Image
              src={"/assets/chatbot.svg"}
              alt="mascot smile"
              width={300}
              height={300}
              className="mr-8"
            />
          </div>

          <div className="flex flex-col gap-6 relative flex-1 z-10">
            <FeaturesCard
              icon={<LightBulbIcon />}
              title="AI Suggestion"
              desc="Cari jajanan pakai deskripsi alami cukup ketik “kue dari Sulawesi yang gurih” dan biarkan Santara bantu temukan jawabannya."
            />
            <FeaturesCard
              icon={<BookIcon />}
              title="AI Story"
              desc="Nikmati versi modern dari kisah jajanan tradisional dengan gaya ringan, dekat dengan generasi masa kini."
            />
            <FeaturesCard
              icon={<BrainIcon />}
              title="AI Summarizer"
              desc="Baca versi singkat dari cerita panjang tanpa kehilangan nilai budayanya."
            />
            <FeaturesCard
              icon={<ChatIcon />}
              title="AI Helper (Chat Assistant)"
              desc="Tanya langsung ke Santara tentang jajanan yang kamu lihat. Contoh: “Apa bedanya klepon Jawa dan Bali?”"
            />
          </div>
        </div>
      </section>

      <section className="flex gap-17 flex-col pt-11 pb-32 bg-(--Color-Scheme-1-Background)">
        <Title isBrown={true}>Bersama Kita Lestarikan Rasa Nusantara</Title>
        <div className="max-w-5xl mx-auto flex gap-21 items-center justify-center">
          <Image
            src={"/assets/mascot-smile.png"}
            alt="mascot smile"
            width={350}
            height={350}
            className="bg-(--Color-Primary-300) rounded-full"
          />

          <div className="relative flex-1">
            <div className="text-(--Color-Primary-500)">
              <h3 className="font-cormorant font-semibold mb-4 text-4xl">
                Kamu jualan jajanan tradisional?
              </h3>
              <p className="mb-6 font-medium text-xl">
                Yuk, tampilkan jualanmu di Klik Rasa, Cicip Budaya supaya lebih
                banyak yang tahu dan jatuh cinta sama jajanan kulinermu.
              </p>
              <button className="bg-(--Color-Primary-500) hover:bg-(--Color-Primary-500)/80 text-white px-22 py-2 font-semibold rounded-3xl cursor-pointer">
                Daftarkan Produkmu
              </button>
            </div>
            <Image
              src={"/assets/batik-leaf.svg"}
              alt="batik leaf"
              height={182}
              width={182}
              className="absolute -right-30 top-30 rotate-3"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 w-16 h-16 bg-(--Color-Primary-500) rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-(--Color-Primary-800) z-10 transition-all">
        <Image
          src="/assets/chatbot-float.svg"
          className=""
          width={50}
          height={50}
          alt="chatbot-float"
        />
      </div>
    </div>
  );
}
