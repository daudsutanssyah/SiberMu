import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/Logo-SiberMu.png";

/* ── Data menu navigasi ── */
const NAV_LINKS = [
  { label: "Beranda", to: "hero" },
  { label: "Kemahasiswaan", to: "kemahasiswaan" },
  { label: "AIK", to: "aik" },
];

/* ── Variasi animasi ── */
const navVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.15 },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-4 left-1/2 z-50 w-[92%] max-w-4xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full bg-white-smoke px-5 py-2.5 shadow-lg shadow-prussian-blue/10">
        {/* ── Logo (kiri) ── */}
        <Link
          to="hero"
          smooth
          duration={600}
          className="flex-shrink-0 cursor-pointer"
        >
          <img
            src={Logo}
            alt="SiberMu Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* ── Menu tengah (desktop) ── */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                spy
                smooth
                offset={-80}
                duration={600}
                activeClass="!text-prussian-blue font-semibold"
                className="cursor-pointer text-sm font-medium text-prussian-blue-2/70 transition-colors duration-200 hover:text-prussian-blue"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger (kanan) ── */}
        <div className="flex items-center gap-3">
          {/* Tombol CTA desktop */}
          <a
            href="#"
            className="hidden rounded-full bg-prussian-blue px-5 py-2 text-sm font-semibold text-white-smoke transition-colors duration-200 hover:bg-twilight-indigo md:inline-block"
          >
            Portal Layanan
          </a>

          {/* Hamburger toggle mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full p-2 text-prussian-blue-2 transition-colors hover:bg-prussian-blue/10 md:hidden"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* ── Dropdown menu mobile ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-2 overflow-hidden rounded-2xl bg-white-smoke px-5 py-4 shadow-lg shadow-prussian-blue/10"
          >
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    spy
                    smooth
                    offset={-80}
                    duration={600}
                    activeClass="!text-prussian-blue font-semibold"
                    onClick={() => setMobileOpen(false)}
                    className="block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-prussian-blue-2/70 transition-colors duration-200 hover:bg-prussian-blue/5 hover:text-prussian-blue"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-3 block rounded-full bg-prussian-blue px-5 py-2.5 text-center text-sm font-semibold text-white-smoke transition-colors duration-200 hover:bg-twilight-indigo"
            >
              Portal Layanan
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
