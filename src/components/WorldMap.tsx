import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface VisitedCountry {
  name: string;
  details: string;
  coords: [number, number];
}

const visitedCountries: VisitedCountry[] = [
  { name: "USA", details: "Road trip across California & NYC", coords: [39.8, -98.5] },
  { name: "Brazil", details: "Rio de Janeiro & Amazon rainforest", coords: [-14.2, -51.9] },
  { name: "UK", details: "London, Edinburgh & the Cotswolds", coords: [55.3, -3.4] },
  { name: "France", details: "Paris, Lyon & the French Riviera", coords: [46.6, 1.9] },
  { name: "Italy", details: "Rome, Florence & Amalfi Coast", coords: [41.9, 12.5] },
  { name: "Japan", details: "Tokyo, Kyoto & Osaka", coords: [36.2, 138.2] },
  { name: "Australia", details: "Sydney, Great Barrier Reef", coords: [-25.3, 133.7] },
  { name: "Canada", details: "Vancouver & Banff National Park", coords: [56.1, -106.3] },
  { name: "Germany", details: "Berlin & Munich", coords: [51.1, 10.4] },
  { name: "Mexico", details: "Cancún & Mexico City", coords: [23.6, -102.5] },
];

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    visitedCountries.forEach((country) => {
      L.circleMarker(country.coords, {
        radius: 8,
        color: "hsl(38, 92%, 55%)",
        fillColor: "hsl(38, 92%, 55%)",
        fillOpacity: 0.7,
        weight: 2,
      })
        .bindPopup(
          `<div><strong style="font-size:14px">${country.name}</strong><br/><span style="font-size:12px;opacity:0.7">${country.details}</span></div>`
        )
        .addTo(map);
    });

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="relative">
      <div className="glass-card overflow-hidden rounded-xl">
        <div ref={mapRef} style={{ height: 420, width: "100%" }} />
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-primary" /> Visited
        </span>
      </div>
    </div>
  );
};

export default WorldMap;
