"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
  const foods = [
    { title: "Kue Lapis", desc: "Cita rasa manis berlapis tradisi.", img: "/placeholder/tes.jpg" },
    { title: "Lemper", desc: "Harum daun pisang dan legitnya ketan.", img: "/placeholder/tes.jpg" },
    { title: "Serabi", desc: "Kelezatan klasik dari tepian Nusantara.", img: "/placeholder/tes.jpg" },
  ];

  return (
    <main
      className="w-full min-h-screen flex flex-col items-center justify-start"
      style={{ backgroundColor: "#fff8ee", fontFamily: "sans-serif" }}
    >
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between shadow-md"
        style={{
          backgroundColor: "#4b1d0b",
          color: "white",
          height: "60px",
          padding: "0 100px",
          zIndex: 50,
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "18px" }}>
          Eksplorasi Rasa Nusantara
        </h1>
        <Button
          variant="secondary"
          className="text-[#4b1d0b] font-semibold"
          style={{ backgroundColor: "white", color: "#4b1d0b", padding: "8px 18px" }}
        >
          Jelajahi
        </Button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#4b1d0b",
          color: "white",
          width: "100%",
          textAlign: "center",
          paddingTop: "180px",
          paddingBottom: "120px",
          marginTop: "60px",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "20px" }}>
          Eksplorasi Rasa, Lestarikan Budaya
        </h2>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "600px",
            margin: "0 auto",
            padding: "6px 10px",
          }}
        >
          <Input
            placeholder="Cari jajanan khas daerah..."
            className="border-none focus:ring-0"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              color: "#4b1d0b",
              padding: "8px 14px",
            }}
          />
          <Button
            style={{
              backgroundColor: "#4b1d0b",
              color: "white",
              borderRadius: "50px",
              padding: "8px 20px",
            }}
          >
            Cari
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section
        style={{
          backgroundColor: "#fff8ee",
          width: "100%",
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <h3
          style={{
            color: "#4b1d0b",
            fontWeight: 600,
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          Peta Rasa Nusantara
        </h3>
        <img
          src="/placeholder/tes.jpg"
          alt="Peta Rasa"
          style={{
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
            width: "800px",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </section>

      {/* Explore Section */}
      <section
        style={{
          backgroundColor: "#4b1d0b",
          color: "white",
          textAlign: "center",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "50px" }}>
          Jelajahi Berdasarkan Rasa
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {foods.map((f, i) => (
            <Card
              key={i}
              style={{
                backgroundColor: "#6b2a12",
                width: "240px",
                border: "none",
                overflow: "hidden",
                color: "white",
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: "100%", height: "140px", objectFit: "cover" }}
              />
              <CardContent style={{ padding: "16px" }}>
                <h4 style={{ fontWeight: "bold", fontSize: "16px" }}>{f.title}</h4>
                <p style={{ fontSize: "13px", marginTop: "4px" }}>{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section
        style={{
          backgroundColor: "#fff8ee",
          textAlign: "center",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "#4b1d0b",
            marginBottom: "40px",
          }}
        >
          Jajanan Unggulan Hari Ini
        </h3>
        <Card
          style={{
            backgroundColor: "white",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            width: "600px",
            margin: "0 auto",
            border: "none",
          }}
        >
          <img
            src="/placeholder/tes.jpg"
            alt="Kue Putu"
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
            }}
          />
          <CardContent style={{ padding: "28px" }}>
            <h4 style={{ fontWeight: "bold", fontSize: "20px", color: "#4b1d0b" }}>
              Kue Putu
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#444",
                margin: "12px 0 20px",
              }}
            >
              Nikmati aroma pandan dan rasa gula merah dalam setiap gigitan.
            </p>
            <Button
              style={{
                backgroundColor: "#4b1d0b",
                color: "white",
                borderRadius: "30px",
                padding: "8px 20px",
              }}
            >
              Lihat Detail
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Community Section */}
      <section
        style={{
          backgroundColor: "#4b1d0b",
          color: "white",
          textAlign: "center",
          padding: "80px 0",
          width: "100%",
        }}
      >
        <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "40px" }}>
          Temui Sesama Pecinta Jajanan Nusantara
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {["Berbagi Resep", "Ulasan Jajanan", "Komunitas Kuliner"].map((item, i) => (
            <Card
              key={i}
              style={{
                backgroundColor: "#6b2a12",
                width: "240px",
                border: "none",
                color: "white",
              }}
            >
              <CardContent style={{ padding: "40px 20px" }}>
                <h4 style={{ fontWeight: "bold", fontSize: "16px" }}>{item}</h4>
                <p style={{ fontSize: "13px", marginTop: "6px" }}>
                  Bergabung dan nikmati cerita kuliner bersama.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#fff8ee",
          color: "#4b1d0b",
          textAlign: "center",
          padding: "60px 0 40px",
          width: "100%",
        }}
      >
        <h4 style={{ fontWeight: 600, fontSize: "18px", marginBottom: "10px" }}>
          Bersama Kita Lestarikan Rasa Nusantara
        </h4>
        <p
          style={{
            fontSize: "14px",
            maxWidth: "500px",
            margin: "0 auto 20px",
          }}
        >
          Karena jajanan tradisional bukan sekadar makanan, tetapi warisan budaya yang hidup.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
          <a href="#" style={{ textDecoration: "underline" }}>Instagram</a>
          <a href="#" style={{ textDecoration: "underline" }}>Twitter</a>
          <a href="#" style={{ textDecoration: "underline" }}>YouTube</a>
        </div>
        <p style={{ fontSize: "12px", opacity: 0.7 }}>© 2025 Rasa Nusantara</p>
      </footer>
    </main>
  );
}
