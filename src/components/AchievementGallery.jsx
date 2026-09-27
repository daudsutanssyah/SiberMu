import { motion } from "framer-motion";
import {
  HiOutlineTrophy,
  HiOutlineShieldCheck,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineChatBubbleLeftRight,
  HiArrowUpRight, // Ikon panah baru untuk sudut bawah
} from "react-icons/hi2";
import AchievementImg1 from "../assets/prestasi-1.png";
import AchievementImg2 from "../assets/prestasi-2.png";
import AchievementImg3 from "../assets/prestasi-3.png";
import AchievementImg4 from "../assets/prestasi-4.png";

/* ── Mock Data Prestasi Mahasiswa ── */
const ACHIEVEMENTS_DATA = [
  {
    id: "gemastik-1",
    title: "Juara 1 Divisi Keamanan Siber (Cyber Security)",
    competition: "GEMASTIK XVI", // Disingkat agar pas di desain
    year: "2024",
    level: "Tingkat Nasional",
    team: "Tim SiberShield (Informatika & Cyber Security)",
    image: AchievementImg1,
    description:
      "Mengembangkan kerangka mitigasi proaktif terhadap serangan zero-day exploit berbasis AI dan enkripsi kurva eliptik.",
    badgeIcon: HiOutlineShieldCheck,
    badgeText: "Juara 1 Nasional",
  },
  {
    id: "wya-gold",
    title: "Gold Medal - Smart IoT Agricultural Solution",
    competition: "WYIIA", // Disingkat
    year: "2024",
    level: "Tingkat Internasional",
    team: "Muhammadiyah GreenTech Collective",
    image: AchievementImg2,
    description:
      "Inovasi perangkat monitoring irigasi mikro otomatis bertenaga surya untuk lahan pertanian kering presisi tinggi.",
    badgeIcon: HiOutlineGlobeAsiaAustralia,
    badgeText: "Gold Medal Dunia",
  },
  {
    id: "kdmi-debat",
    title: "Juara Harapan 1 & Best Speaker Debat Nasional",
    competition: "KDMI", // Disingkat
    year: "2023",
    level: "Tingkat Nasional",
    team: "Delegasi Debat Sivitas SiberMu",
    image: AchievementImg3,
    description:
      "Argumentasi kritis mengenai etika regulasi data privasi lintas batas dan kedaulatan digital bangsa di era AI.",
    badgeIcon: HiOutlineChatBubbleLeftRight,
    badgeText: "Best Speaker",
  },
  {
    // Menambahkan 1 data ekstra agar layout grid 4 kolom pas seperti di referensi gambar
    id: "robotics-winner",
    title: "Best Design Autonomous Robot Competition",
    competition: "KRI Nasional",
    year: "2023",
    level: "Tingkat Nasional",
    team: "Muhammadiyah Robotics",
    image: AchievementImg4,
    description:
      "Desain sistem pergerakan omni-directional dan penglihatan mesin pada robot penyelamat otonom.",
    badgeIcon: HiOutlineTrophy,
    badgeText: "Best Design",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 75, damping: 16 },
  },
};

const AchievementGallery = () => {
  return (
    <div className="relative mt-20 pt-10">
      {/* ── Sub-header Galeri Prestasi ── */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/15 bg-prussian-blue/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-prussian-blue">
          <span>Hall of Fame &amp; Prestasi</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-prussian-blue-2 sm:text-3xl lg:text-4xl">
          Jejak Prestasi Gemilang Mahasiswa
        </h3>
        <p className="mx-auto mt-2.5 max-w-2xl text-sm leading-relaxed text-prussian-blue-2/70 sm:text-base">
          Bukti nyata dedikasi, daya saing global, dan keunggulan riset sivitas
          akademika Universitas Siber Muhammadiyah di kancah nasional maupun
          dunia.
        </p>
      </div>

      {/* ── Grid Kartu Tall Full-Image (Mengikuti Referensi) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-[1400px] mx-auto"
      >
        {ACHIEVEMENTS_DATA.map((item) => {
          const BadgeIcon = item.badgeIcon;
          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative h-[480px] lg:h-[520px] w-full overflow-hidden rounded-3xl bg-gray-900 cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gambar sebagai Full Background */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
                loading="lazy"
              />

              {/* 
                Gradient Overlays:
                1. Top gradient: Agar teks di atas terbaca 
                2. Bottom gradient: Agar teks bawah dan efek warna brand terlihat saat di-hover
              */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue/90 via-prussian-blue/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* ── Konten Teks di Atas (Top Left) ── */}
              <div className="absolute top-0 left-0 p-6 w-full z-10 flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  {item.competition}
                </p>
                <h4 className="text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white shadow-sm">
                  {item.title}
                </h4>
              </div>

              {/* ── Informasi Tim & Deskripsi (Muncul Halus saat Hover) ── */}
              <div className="absolute bottom-16 left-0 p-6 w-full z-10 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white/90 mb-2">
                  {item.team}
                </p>
                <p className="text-xs leading-relaxed text-white/70 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* ── Elemen Badge & Tombol Panah (Bottom Area) ── */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex items-center justify-between">
                {/* Badge Kiri Bawah */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30">
                  <BadgeIcon className="h-4 w-4" />
                  <span>{item.badgeText}</span>
                </div>

                {/* Tombol Bulat Panah Kanan Bawah (Khas Desain Referensi) */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-prussian-blue shadow-lg transition-transform duration-300 group-hover:bg-prussian-blue group-hover:text-white group-hover:scale-110">
                  <HiArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AchievementGallery;
