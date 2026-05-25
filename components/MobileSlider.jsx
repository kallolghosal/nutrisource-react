import { useEffect, useState } from "react";
import app1 from "../assets/app1.png";
import app2 from "../assets/app2.png";
import app3 from "../assets/app3.png";

const screens = [app1, app2, app3];

export default function MobileSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={screens[index]}
      className="absolute top-10 left-6 w-[120px] rounded-xl"
    />
  );
}