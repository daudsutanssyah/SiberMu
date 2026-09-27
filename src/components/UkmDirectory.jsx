import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineFilm,
  HiOutlinePaintBrush,
  HiOutlineTrophy,
  HiOutlineBuildingStorefront,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import UkmImg1 from "../assets/ukm-1.png";
import UkmImg2 from "../assets/ukm-2.png";
import UkmImg3 from "../assets/ukm-3.png";
import UkmImg4 from "../assets/ukm-4.png";

/* ── Mock Data Organisasi & UKM ── */
const UKM_DATA = [
  {
    id: "tech-ai",
    name: "CyberMU Tech & AI Community",
    category: "Teknologi",
    categoryBadge: "Teknologi & Riset",
    icon: HiOutlineCpuChip,
    description:
      '"Wadah kolaborasi eksplorasi kecerdasan buatan, rekayasa perangkat lunak, cloud computing, dan keamanan siber."',
    members: "140+ Anggota",
    tags: ["Machine Learning", "Cyber Security", "Web3"],
    image: UkmImg1,
  },
  {
    id: "robotics",
    name: "Muhammadiyah Robotics Club",
    category: "Teknologi",
    categoryBadge: "Teknologi & Riset",
    icon: HiOutlineCommandLine,
    description:
      '"Riset dan perancangan robot cerdas, Internet of Things (IoT), serta otomatisasi sistem untuk kompetisi nasional KRI."',
    members: "95+ Anggota",
    tags: ["IoT Hardware", "Microcontroller", "Autonomous"],
    image: UkmImg2,
  },

  {
    id: "siber-press",
    name: "SiberPress Jurnalistik",
    category: "Kreatif",
    categoryBadge: "Media & Komunikasi",
    icon: HiOutlinePaintBrush,
    description:
      '"Penerbitan warta digital kampus, fotografi jurnalistik, editorial opini, podcast mahasiswa, dan majalah web."',
    members: "80+ Anggota",
    tags: ["Digital News", "Photography", "Podcast"],
    image: UkmImg3,
  },

  {
    id: "sec-biz",
    name: "Student Entrepreneur Center",
    category: "Kewirausahaan",
    categoryBadge: "Inkubasi Bisnis",
    icon: HiOutlineBuildingStorefront,
    description:
      '"Akselerator ide bisnis rintisan (startup), inkubasi venture digital, strategi pitching, dan kolaborasi investor muda."',
    members: "125+ Anggota",
    tags: ["Digital Startup", "Pitch Deck", "Business Plan"],
    image: UkmImg4,
  },
];

const CATEGORIES = [
  "Semua",
  "Teknologi",
  "Kreatif",
  "Olahraga",
  "Kewirausahaan",
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const UkmDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter Data
  const filteredData =
    selectedCategory === "Semua"
      ? UKM_DATA
      : UKM_DATA.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredData.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? filteredData.length - 1 : prev - 1,
    );

  const prevIndex =
    currentIndex === 0 ? filteredData.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % filteredData.length;

  const currentUkm = filteredData[currentIndex];

  if (filteredData.length === 0) return null;

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative w-full max-w-7xl mx-auto px-4 py-12 overflow-hidden"
    >
      {/* ── Header & Filter ── */}
      <motion.div
        variants={fadeUpVariants}
        className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end mb-16 relative z-20"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/15 bg-prussian-blue/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-prussian-blue">
            <span>Unit Kegiatan Mahasiswa</span>
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-prussian-blue-2 sm:text-3xl lg:text-4xl">
            Wadah Minat &amp; Komunitas
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-prussian-blue-2/70 sm:text-base">
            Kembangkan *hard skills* dan *soft skills* kepemimpinan Anda melalui
            ragam organisasi mahasiswa yang dinamis dan berprestasi.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-white/60 p-1.5 shadow-sm ring-1 ring-black/5 backdrop-blur-md sm:gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`relative cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "bg-prussian-blue text-white shadow-md shadow-prussian-blue/25"
                    : "text-prussian-blue-2/70 hover:bg-black/5 hover:text-prussian-blue-2"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ── Carousel Section ── */}
      <motion.div
        variants={fadeUpVariants}
        className="relative flex items-center justify-center w-full min-h-[480px] lg:min-h-[520px]"
      >
        {/* Garis Horizontal Penghubung */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-prussian-blue/15 to-transparent -translate-y-1/2 z-0 hidden md:block" />

        {/* ── Gambar Sisi Kiri (Preview Previous) ── */}
        {filteredData.length > 1 && (
          <div
            onClick={prevSlide}
            className="absolute left-0 lg:left-[5%] z-10 cursor-pointer hidden md:flex items-center transform transition-transform duration-300 hover:-translate-x-2 group"
          >
            <div className="w-16 h-40 lg:w-20 lg:h-52 rounded-full overflow-hidden ring-4 ring-white shadow-xl opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-2xl">
              <img
                src={filteredData[prevIndex].image}
                alt="Previous"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        )}

        {/* ── Kartu Utama (Tengah) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-20 w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl shadow-prussian-blue/10 border border-black/5 overflow-hidden flex flex-col-reverse md:flex-row h-auto md:h-[420px]"
          >
            {/* Bagian Teks (Kiri) */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-prussian-blue/10 text-prussian-blue">
                  <currentUkm.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-twilight-indigo uppercase tracking-wider">
                  {currentUkm.categoryBadge}
                </span>
              </div>

              <h4 className="text-3xl lg:text-4xl font-extrabold text-prussian-blue-2 leading-tight mb-6">
                {currentUkm.name}
              </h4>

              <p className="text-base lg:text-lg text-prussian-blue-2/70 italic leading-relaxed mb-8 border-l-4 border-prussian-blue/20 pl-4">
                {currentUkm.description}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-prussian-blue-2">
                  <HiOutlineUserGroup className="h-5 w-5 text-prussian-blue" />
                  {currentUkm.members}
                </div>
                {/* Tombol Navigasi Mobile */}
                <div className="flex gap-2 md:hidden">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-black/5 hover:bg-prussian-blue hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5 rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-black/5 hover:bg-prussian-blue hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bagian Gambar Utama (Kanan) beserta Animasi Hover */}
            <div className="w-full md:w-2/5 lg:w-[45%] h-64 md:h-full relative p-4">
              {/* Tambahan class 'group' dan 'cursor-pointer' pada container */}
              <div className="group w-full h-full rounded-2xl overflow-hidden shadow-inner relative cursor-pointer">
                <img
                  src={currentUkm.image}
                  alt={currentUkm.name}
                  // scale-110 ketika di hover group
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay gradien halus saat di hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue-2/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Gambar Sisi Kanan (Preview Next) ── */}
        {filteredData.length > 1 && (
          <div
            onClick={nextSlide}
            className="absolute right-0 lg:right-[5%] z-10 cursor-pointer hidden md:flex items-center transform transition-transform duration-300 hover:translate-x-2 group"
          >
            <div className="w-16 h-40 lg:w-20 lg:h-52 rounded-full overflow-hidden ring-4 ring-white shadow-xl opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-2xl">
              <img
                src={filteredData[nextIndex].image}
                alt="Next"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* ── Dots Pagination (Bawah) ── */}
      {filteredData.length > 1 && (
        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center items-center gap-2 mt-8 relative z-20"
        >
          {filteredData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-prussian-blue"
                  : "w-2 bg-prussian-blue/20 hover:bg-prussian-blue/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default UkmDirectory;
