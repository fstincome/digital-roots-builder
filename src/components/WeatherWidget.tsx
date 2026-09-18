import { useEffect, useState } from "react";
import { Thermometer } from "lucide-react";

// Gitega, Burundi
const LAT = -3.4271;
const LON = 29.9246;

const WeatherWidget = () => {
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m&timezone=Africa%2FBujumbura`
    )
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && typeof data?.current?.temperature_2m === "number") {
          setTemp(Math.round(data.current.temperature_2m));
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (temp === null) return null;

  return (
    <div
      className="fixed bottom-[5.75rem] right-6 z-40 flex items-center gap-2 bg-card/90 backdrop-blur border border-border px-4 py-2 rounded-full shadow-lg"
      title="Gitega, Burundi"
    >
      <Thermometer size={20} className="text-primary" />
      <span className="text-sm font-medium text-foreground">{temp}°C</span>
      <span className="hidden sm:inline text-xs text-muted-foreground">Gitega</span>
    </div>
  );
};

export default WeatherWidget;
