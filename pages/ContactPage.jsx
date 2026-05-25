import { useState } from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const OFFICE_ADDRESS =
  "NutriSource India Private Limited, Kolkata, West Bengal, India";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    OFFICE_ADDRESS
  )}&output=embed`;

  return (
    <section className="relative h-screen overflow-hidden bg-[#f7f7f4]">
      {/* RIGHT GREEN GLOW */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-full w-[90px] bg-gradient-to-l from-[#048300] via-[#9bd55f] to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-8">
        <div
          className="grid items-center"
          style={{
            width: "100%",
            maxWidth: "980px",
            gridTemplateColumns: "520px 360px",
            columnGap: "70px",
            transform: "translateX(-35px)",
          }}
        >
          {/* LEFT MAP + CONTACT INFO */}
          <div>
            {/* MAP */}
            <div className="relative h-[355px] w-[520px] overflow-hidden rounded-[4px] bg-white shadow-sm">
              <iframe
                title="Office Location"
                src={mapUrl}
                className="h-full w-full grayscale"
                loading="lazy"
                allowFullScreen
              />

              <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="rounded-full bg-[#ff7a1a] px-7 py-2 text-[12px] font-bold uppercase text-white shadow-md">
                  Head Office
                </div>
                <MapPin className="mt-2 h-8 w-8 fill-[#ff7a1a] text-[#ff7a1a]" />
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <PhoneCall className="h-9 w-9 text-[#048300]" />
                <div>
                  <h3 className="text-[18px] font-bold text-black">Call</h3>
                  <p className="text-[14px] font-medium text-[#555]">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-9 w-9 text-[#048300]" />
                <div>
                  <h3 className="text-[18px] font-bold text-black">Email</h3>
                  <p className="text-[14px] font-medium text-[#555]">
                    Contact@nutrisource.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h1 className="mb-12 text-[34px] font-black leading-none text-black">
              Say Hi
            </h1>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-[58px] w-full rounded-[14px] border-none bg-white px-5 text-[15px] font-medium text-black shadow-sm outline-none placeholder:text-[#777]"
              />

              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-[58px] w-full rounded-[14px] border-none bg-white px-5 text-[15px] font-medium text-black shadow-sm outline-none placeholder:text-[#777]"
              />

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="h-[112px] w-full resize-none rounded-[14px] border-none bg-white px-5 py-4 text-[15px] font-medium text-black shadow-sm outline-none placeholder:text-[#777]"
              />

              <button
                type="submit"
                className="h-[58px] w-full rounded-[14px] bg-[#048300] text-[18px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#066d03]"
              >
                Send now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}