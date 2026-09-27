import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";

// 1. IMPORT SEMUA ASSET GAMBAR DI SINI
import ImgPrestasi1 from "../assets/prestasi-1.png";
import ImgPrestasi2 from "../assets/prestasi-2.png";
import ImgPrestasi3 from "../assets/prestasi-3.png";
import ImgPrestasi4 from "../assets/prestasi-4.png";
import ImgUkm1 from "../assets/ukm-1.png";
import ImgUkm2 from "../assets/ukm-2.png";
import ImgUkm3 from "../assets/ukm-3.png";
import ImgUkm4 from "../assets/ukm-4.png";
import ImgHero1 from "../assets/hero-section-1.png";
import ImgHero2 from "../assets/hero-section-2.png";

/* ── Mock Data: Galeri Foto Kegiatan (Dua Baris) ── */
// 2. MASUKKAN NAMA VARIABEL IMPORT KE DALAM ARRAY (Tanpa Tanda Kutip)
const GALLERY_ROW_1 = [
  ImgPrestasi1,
  ImgPrestasi2,
  ImgPrestasi3,
  ImgPrestasi4,
  ImgUkm1,
];

const GALLERY_ROW_2 = [ImgUkm2, ImgUkm3, ImgUkm4, ImgHero1, ImgHero2];

// Menggandakan array untuk ilusi infinite scroll
const MARQUEE_ROW_1 = [...GALLERY_ROW_1, ...GALLERY_ROW_1];
const MARQUEE_ROW_2 = [...GALLERY_ROW_2, ...GALLERY_ROW_2];

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-white-smoke py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Menggunakan grid agar pengaturan lebar kolom lebih presisi di desktop */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ════════════════════════════════════════════════
              KOLOM KIRI: Teks & Tombol CTA (Minimalis)
          ════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 text-center lg:col-span-5 lg:text-left"
          >
            {/* Heading Raksasa */}
            <h2 className="text-3xl font-extrabold tracking-tight text-prussian-blue-2 sm:text-4xl lg:text-5xl">
              Kembangkan <br className="hidden lg:block" />
              <span className="font-serif italic font-light text-prussian-blue">
                Potensimu
              </span>
            </h2>

            {/* Sub-teks (Ala meta data) */}
            <div className="mt-8 space-y-1">
              <p className="text-sm font-medium text-prussian-blue-2/50 sm:text-base">
                SiberMu Student Affairs
              </p>
              <p className="text-sm font-medium text-prussian-blue-2/50 sm:text-base">
                Universitas Siber Muhammadiyah
              </p>
            </div>

            {/* Tombol CTA (Pil Gelap) */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="#portal-layanan"
                className="group flex items-center justify-center gap-3 rounded-full bg-prussian-blue-2 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-twilight-indigo hover:shadow-lg hover:shadow-prussian-blue/20"
              >
                <span>Portal Layanan</span>
                <HiArrowLongRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* ════════════════════════════════════════════════
              KOLOM KANAN: Double Infinite Marquee Gallery
          ════════════════════════════════════════════════ */}
          <div className="col-span-1 relative w-full lg:col-span-7">
            {/* 
              Gradien masking hanya satu, sangat tipis di kiri saja, 
              untuk melembutkan gambar yang muncul dari balik teks. 
              Sisi kanan dibiarkan terbuka (hard edge).
            */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-40 lg:w-56 bg-gradient-to-r from-white-smoke via-white-smoke/80 to-transparent" />

            {/* Container luar untuk memotong (overflow-hidden) pergerakan marquee */}
            <div className="flex w-full flex-col gap-4 overflow-hidden py-4 sm:gap-6">
              {/* ── BARIS PERTAMA (Marquee Atas) ── */}
              <motion.div
                className="flex w-max items-center gap-4 sm:gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 35, // Kecepatan gerak baris pertama
                }}
              >
                {MARQUEE_ROW_1.map((imgSrc, index) => (
                  <div
                    key={`row1-${index}`}
                    // Menggunakan lebar campur (ada yang persegi, ada yang agak lebar) agar terlihat organik
                    className={`relative shrink-0 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gray-200 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-sm
                      ${index % 3 === 0 ? "h-32 w-40 sm:h-48 sm:w-60 lg:h-56 lg:w-72" : "h-32 w-32 sm:h-48 sm:w-48 lg:h-56 lg:w-56"}
                    `}
                  >
                    <img
                      src={imgSrc}
                      alt={`Aktivitas ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>

              {/* ── BARIS KEDUA (Marquee Bawah) ── */}
              <motion.div
                className="flex w-max items-center gap-4 sm:gap-6"
                animate={{ x: ["-10%", "-60%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 28, // Kecepatan gerak baris kedua (lebih cepat dari baris 1)
                }}
              >
                {MARQUEE_ROW_2.map((imgSrc, index) => (
                  <div
                    key={`row2-${index}`}
                    className={`relative shrink-0 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-gray-200 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-sm
                      ${index % 2 === 0 ? "h-32 w-48 sm:h-48 sm:w-72 lg:h-56 lg:w-80" : "h-32 w-32 sm:h-48 sm:w-48 lg:h-56 lg:w-56"}
                    `}
                  >
                    <img
                      src={imgSrc}
                      alt={`Kegiatan ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
