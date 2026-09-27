import { motion } from "framer-motion";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineMicrophone,
  HiOutlineArrowDownTray,
  HiOutlinePlayCircle,
  HiArrowLongRight,
} from "react-icons/hi2";
import { SiZoom, SiYoutube } from "react-icons/si";

/* ── Mock Data: Jadwal Kajian Rutin & Syiar Digital ── */
const KAJIAN_DATA = [
  {
    id: "kajian-ahad-pagi",
    title: "Kajian Ahad Pagi: Meneguhkan Karakter Islam Berkemajuan",
    category: "Kajian Akademik & Spiritual",
    speaker: "Prof. Dr. H. Haedar Nashir, M.Si.",
    role: "Pimpinan Pusat Muhammadiyah / Guru Besar",
    schedule: "Setiap Ahad Pagi",
    time: "06.00 – 07.30 WIB",
    primaryPlatform: "youtube",
    linkText: "Tonton Live Streaming",
    linkUrl: "https://youtube.com",
  },
  {
    id: "tahsin-al-quran",
    title: "Klinik Tahsin Al-Qur'an & Bimbingan Tartil Digital",
    category: "Bimbingan Tartil & Tajwid",
    speaker: "Ustadz H. Ahmad Farhan, M.Ag.",
    role: "Lembaga Pengembangan AIK SiberMu",
    schedule: "Selasa & Kamis",
    time: "19.30 – 21.00 WIB",
    primaryPlatform: "zoom",
    linkText: "Masuk Ruang Zoom",
    linkUrl: "https://zoom.us",
  },
  {
    id: "fiqih-kontemporer",
    title: "Diskusi Tematik: Fiqih Kontemporer & Muamalah Siber",
    category: "Bedah HPT & Tarjih",
    speaker: "Dr. Hj. Siti Syamsiyatun, M.A., Ph.D.",
    role: "Pakar Kajian Islam & Majelis Tarjih",
    schedule: "Setiap Jumat Sore",
    time: "16.00 – 17.30 WIB",
    primaryPlatform: "youtube",
    linkText: "Ikuti Diskusi Interaktif",
    linkUrl: "https://youtube.com",
  },
];

/* ── Framer Motion Animation Variants ── */
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

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AikDigitalSyiar = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ── Sub-header Bagian Syiar & Jadwal Kajian ── */}
      <div className="mb-12 max-w-2xl sm:mb-16">
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-prussian-blue-2 sm:text-3xl lg:text-4xl">
          Syiar &amp; Jadwal Kajian.
        </h3>
        <p className="mt-4 text-base leading-relaxed text-prussian-blue-2/70 sm:text-lg">
          Akses penguatan ruhani dan diskursus pemikiran Islam berkemajuan kapan
          saja dan di mana saja melalui kanal siaran digital resmi kampus.
        </p>
      </div>

      {/* ── Premium Event Roster (List Baris) ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col border-t border-prussian-blue/15"
      >
        {KAJIAN_DATA.map((kajian) => (
          <motion.div
            key={kajian.id}
            variants={rowVariants}
            className="group relative flex flex-col items-start justify-between gap-6 border-b border-prussian-blue/15 py-8 transition-colors duration-500 hover:bg-prussian-blue/[0.02] lg:flex-row lg:items-center lg:gap-12 lg:py-10 lg:px-6 lg:-mx-6"
          >
            {/* Kolom 1: Waktu & Tanggal (Kiri) */}
            <div className="flex w-full shrink-0 flex-row items-center gap-6 lg:w-48 lg:flex-col lg:items-start lg:gap-1">
              <div className="flex items-center gap-2 font-mono text-sm font-semibold uppercase text-prussian-blue/50">
                <HiOutlineCalendarDays className="h-4 w-4 lg:hidden" />
                <span>{kajian.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-lg font-light tracking-tight text-prussian-blue-2 sm:text-xl">
                <HiOutlineClock className="h-5 w-5 lg:hidden text-prussian-blue/40" />
                <span>{kajian.time}</span>
              </div>
            </div>

            {/* Kolom 2: Detail Kajian (Tengah) */}
            <div className="flex flex-1 flex-col">
              <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-prussian-blue/60">
                {kajian.category}
              </span>
              <h4 className="text-2xl font-bold leading-tight text-prussian-blue-2 transition-colors duration-300 group-hover:text-prussian-blue sm:text-3xl">
                {kajian.title}
              </h4>
              <div className="mt-3 flex items-center gap-2 text-sm text-prussian-blue-2/70 sm:text-base">
                <HiOutlineUser className="h-4 w-4 text-prussian-blue/40" />
                <span>
                  Bersama:{" "}
                  <span className="font-semibold text-prussian-blue-2">
                    {kajian.speaker}
                  </span>
                </span>
                <span className="hidden text-prussian-blue-2/40 sm:inline">
                  — {kajian.role}
                </span>
              </div>
            </div>

            {/* Kolom 3: Platform Badge & Action (Kanan) */}
            <div className="flex w-full shrink-0 items-center justify-between gap-6 lg:w-auto lg:flex-col lg:items-end lg:justify-center">
              {/* Badge Platform */}
              {kajian.primaryPlatform === "zoom" ? (
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  <SiZoom className="h-4 w-4" />
                  <span>Zoom Meeting</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
                  <SiYoutube className="h-4 w-4" />
                  <span>YouTube Live</span>
                </div>
              )}

              {/* Action Link (Text + Arrow instead of blocky button) */}
              <a
                href={kajian.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-prussian-blue transition-colors hover:text-twilight-indigo"
              >
                <span className="hidden sm:inline">{kajian.linkText}</span>
                <span className="sm:hidden">Ikuti</span>
                <HiArrowLongRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Additional Islamic Futuristic Multimedia Bar (Tetap Dipertahankan) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-prussian-blue/10 bg-gradient-to-r from-prussian-blue via-twilight-indigo to-prussian-blue-2 p-6 text-white shadow-lg sm:flex-row sm:p-8 lg:mt-24"
      >
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md sm:flex">
            <HiOutlinePlayCircle className="h-8 w-8 text-white" />
          </div>
          <div>
            <h5 className="text-lg font-bold sm:text-xl">
              Arsip Rekaman Kajian &amp; Podcast AIK SiberMu
            </h5>
            <p className="mt-1 text-sm text-white/75">
              Tertinggal siaran langsung? Dengarkan rekaman kajian tematik dan
              unduh modul materi secara mandiri.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#arsip-kajian"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-prussian-blue transition-all duration-200 hover:bg-white-smoke hover:shadow-md"
          >
            <HiOutlineMicrophone className="h-4 w-4" />
            <span>Kanal Podcast</span>
          </a>
          <a
            href="#modul-aik"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20"
          >
            <HiOutlineArrowDownTray className="h-4 w-4" />
            <span>Unduh Modul</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AikDigitalSyiar;
