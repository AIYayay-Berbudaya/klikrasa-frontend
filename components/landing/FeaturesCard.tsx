import React from "react";
import { Icon } from "@iconify/react";
interface FeaturesCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}
const FeaturesCard = ({ icon, title, desc }: FeaturesCardProps) => {
  return (
    <div
      style={{
        background: `
      linear-gradient(94deg, #501D13 6.15%, #B6422B 84.2%) padding-box,
      linear-gradient(94deg, #501D13 6.12%, #B6422B 53.4%) border-box
    `,
        border: "4px solid transparent",
        borderRadius: "20px",
      }}
      className="flex flex-row gap-5 items-center px-3 py-2"
    >
      <div className="w-14">{icon}</div>
      <div className="flex flex-col gap-2.5">
        <h5 className="text-2xl font-bold">{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
