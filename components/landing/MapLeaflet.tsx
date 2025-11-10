import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Data marker
const markers = [
  {
    position: [-6.2, 106.8],
    icon: "/assets/jajanan-map/Ellipse_1.png",
    label: "Kerak telor",
  },
  {
    position: [-7.8, 110.4],
    icon: "/assets/jajanan-map/Ellipse_2.png",
    label: "Gudeg",
  },
  {
    position: [-6.9, 107.6],
    icon: "/assets/jajanan-map/Ellipse_3.png",
    label: "Surabi",
  },
  // Tambahkan data lain sesuai kebutuhan
];

// Fungsi membuat custom icon
function createDivIcon(iconUrl: string, label: string) {
  return L.divIcon({
    html: `
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="${iconUrl}" style="width:40px;height:40px;border:2px solid #A65B2E;border-radius:50%;" />
        <span style="background: #A65B2E; color: white; font-size: 13px; border-radius: 20px; padding: 2px 8px; margin-top: 4px; font-family: inherit; white-space: nowrap;">
          ${label}
        </span>
      </div>
    `,
    className: "",
    iconSize: [40, 60],
    iconAnchor: [20, 40],
  });
}

export default function MapLeaflet() {
  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      style={{ height: "500px", width: "80%" }}
      className="z-0 mx-auto rounded-2xl"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          icon={createDivIcon(marker.icon, marker.label)}
        />
      ))}
    </MapContainer>
  );
}
