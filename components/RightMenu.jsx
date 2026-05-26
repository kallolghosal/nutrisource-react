import { useState } from "react";
import {
  Home,
  Building,
  Heart,
  Cpu,
  Package,
  Leaf,
  Users,
  Megaphone,
  Smile,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

const menu = [
  { name: "Home", icon: Home, target: "home" },
  { name: "Organization We Built", icon: Building, target: "organization" },
  { name: "Passion @ Core", icon: Heart, target: "passion-core" },
  { name: "Capability @ Core", icon: Cpu, target: "capability-core" },
  { name: "Our Inclusive Offerings", icon: Package, target: "inclusive-offerings" },
  { name: "FarmSanta", icon: Leaf, target: "farmsanta" },
  { name: "Team on Mission", icon: Users, target: "team" },
  { name: "Noise We Create", icon: Megaphone, target: "video" },
  { name: "Smiling Moments", icon: Smile, target: "video" },
  { name: "Say Hi", icon: MessageCircle, target: "say-hi" },
  { name: "Grow With Us", icon: TrendingUp, target: "grow-with-us" },
];

export default function RightMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = (target) => {
    window.dispatchEvent(new Event("close-product-showcase"));

    setTimeout(() => {
      const section = document.getElementById(target);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`fixed top-0 right-0 h-screen z-[10000] transition-all duration-500 ${
        open ? "w-72" : "w-20"
      }`}
      style={{
        background:
          "linear-gradient(to left, rgba(15,90,35,1) 0%, rgba(50,145,35,0.95) 35%, rgba(110,190,46,0.7) 65%, rgba(255,255,255,0) 100%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="h-full flex flex-col justify-center gap-2 px-3">
        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleMenuClick(item.target)}
              className="group flex items-center gap-3 text-white cursor-pointer px-3 py-2 rounded-l-2xl rounded-r-none transition-all duration-300 hover:bg-gradient-to-r hover:from-green-900 hover:to-green-600 hover:-translate-x-1 text-left"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white group-hover:text-green-800 transition-all duration-300">
                <Icon size={17} strokeWidth={2.3} />
              </div>

              {open && (
                <span className="text-[13px] font-semibold whitespace-nowrap tracking-wide">
                  {item.name}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}