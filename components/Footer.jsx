import mascot from "../assets/mascot.gif";
import productBrochurePdf from "./assets/nsi-product-catalogue.pdf";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v16h-4V8zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.3c0-1.7 0-4-2.5-4s-2.9 1.9-2.9 3.8V24h-4V8z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3.2-3.3.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.5l-.4 2.9H13v7A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#9EDB45] via-[#84C52D] to-[#5DAA18] text-white">
      <div className="absolute left-[-80px] top-[-80px] h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-80px] h-80 w-80 rounded-full bg-green-900/10 blur-3xl" />

      <div className="relative w-full px-8 py-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.9fr_1fr]">
          <div>
            <h2 className="mb-4 whitespace-nowrap text-2xl font-black tracking-wide text-white lg:text-[30px]">
              NutriSource India Pvt. Ltd.
            </h2>

            <div className="space-y-1 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-lime-100">📍</div>
                <p>
                  12, Street Number 692, AA II, Action Area IID, Newtown, New Town
                  <br />
                  Kolkata, West Bengal - 700161, India
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="text-lime-100">📞</div>
                <a href="tel:+919999999999" className="hover:text-lime-100">
                  +91 99999 99999
                </a>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <div className="text-lime-100">✉️</div>
                <a
                  href="mailto:info@nutrisource.in"
                  className="hover:text-lime-100"
                >
                  info@nutrisource.in
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#276B12]"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:-ml-16">
            <div className="relative flex h-[190px] w-[190px] items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="absolute inset-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl" />

              <img
                src={mascot}
                alt="Mascot"
                className="relative z-10 h-[160px] w-[160px] object-contain"
              />
            </div>

            <a
              href={productBrochurePdf}
              download
              className="mt-3 rounded-full bg-white px-10 py-2 text-sm font-bold text-[#276B12] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-lime-100"
            >
              Download
            </a>
          </div>

          <div className="lg:-ml-10">
            <h3 className="mb-5 text-xl font-bold text-white">Newsletter</h3>

            <p className="mb-3 text-sm leading-6 text-white/90">
              Subscribe to receive updates about our products, innovations, and
              agricultural solutions.
            </p>

            <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/15 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none"
              />

              <button className="bg-white px-5 text-sm font-bold text-[#276B12] transition-all duration-300 hover:bg-lime-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/85 md:flex-row">
          <p>
            © {new Date().getFullYear()} NutriSource India Pvt. Ltd. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-lime-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-lime-100">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}