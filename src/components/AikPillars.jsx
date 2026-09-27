import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineUserGroup,
  HiOutlineGlobeAlt,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

/* ── Mock Data: 4 Pilar Kemuhammadiyahan ── */
const PILLARS_DATA = [
  {
    id: "aqidah",
    number: "1",
    arabic: "العقيدة",
    title: "Aqidah Murni",
    subtitle: "Kemurnian Tauhid & Rasionalitas",
    description:
      "Menanamkan tauhid murni berlandaskan Al-Qur'an dan As-Sunnah ash-Shahihah. Membebaskan akal budi dari takhayul, bid'ah, dan khurafat dalam kerangka peradaban sains dan teknologi modern.",
    coreValue: "Tauhid Murni & Pemikiran Kritis",
    icon: HiOutlineShieldCheck,
  },
  {
    id: "ibadah",
    number: "2",
    arabic: "العبادة",
    title: "Ibadah Tertib",
    subtitle: "Tuntunan Sunnah & Ketenangan Jiwa",
    description:
      "Mengamalkan ibadah mahdhah sesuai tuntunan Himpunan Putusan Tarjih (HPT) dengan keikhlasan, ketertiban, dan kekhusyukan sebagai kompas spiritual di tengah dinamika kehidupan digital.",
    coreValue: "Ikhlas & Sesuai Tuntunan Rasulullah",
    icon: HiOutlineHeart,
  },
  {
    id: "akhlaq",
    number: "3",
    arabic: "الأخلاق",
    title: "Akhlaq Mulia",
    subtitle: "Integritas & Etika Ruang Siber",
    description:
      "Membentuk karakter luhur dan adab komunikasi digital (netiket Islami). Menjunjung tinggi kejujuran ilmiah, keteladanan budi pekerti, serta kepedulian terhadap martabat kemanusiaan.",
    coreValue: "Integritas Moral & Adab Digital",
    icon: HiOutlineUserGroup,
  },
  {
    id: "muamalah",
    number: "4",
    arabic: "المعاملة",
    title: "Muamalah Duniawiyah",
    subtitle: "Inovasi Sains & Rahmatan lil 'Alamin",
    description:
      "Mendayagunakan ilmu pengetahuan, riset siber, dan amal usaha produktif untuk memajukan kesejahteraan umat. Mengaktualisasikan Islam Berkemajuan sebagai rahmat bagi semesta alam.",
    coreValue: "Inovasi Transformatif & Maslahat Umat",
    icon: HiOutlineGlobeAlt,
  },
];

const AikPillars = () => {
  // State untuk melacak pilar mana yang sedang aktif (default: index 0)
  const [activeIndex, setActiveIndex] = useState(0);
  const activePilar = PILLARS_DATA[activeIndex];
  const ActiveIcon = activePilar.icon;

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
        {/* ════════════════════════════════════════════════
            SISI KIRI: Header & List Navigasi (Mengikuti Referensi)
        ════════════════════════════════════════════════ */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col">
          <div className="mb-10 lg:mb-14">
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-prussian-blue-2 sm:text-3xl lg:text-4xl">
              Empat Pilar <br className="hidden sm:block" />
              Kemuhammadiyahan.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-prussian-blue-2/70">
              Internalisasi ajaran Al-Islam dan Kemuhammadiyahan (AIK) yang
              menjadi landasan hidup civitas akademika SiberMu. Terdiri dari
              empat pilar utama:{" "}
              <strong>Aqidah, Ibadah, Akhlaq, dan Muamalah Duniawiyah</strong>{" "}
              untuk membentuk karakter manusia paripurna.
            </p>
          </div>

          {/* Daftar List Navigasi */}
          <div className="flex flex-col space-y-3">
            {PILLARS_DATA.map((pillar, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex w-full items-center gap-4 rounded-full px-2 py-2 transition-all duration-300 ${
                    isActive
                      ? "border border-prussian-blue bg-white shadow-sm ring-1 ring-black/5"
                      : "border border-transparent hover:bg-black/5"
                  }`}
                >
                  {/* Lingkaran Angka */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                      isActive
                        ? "bg-prussian-blue text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    }`}
                  >
                    {pillar.number}
                  </div>

                  {/* Teks Judul */}
                  <span
                    className={`text-left text-[15px] transition-colors duration-300 ${
                      isActive
                        ? "font-semibold text-prussian-blue-2"
                        : "font-medium text-gray-500 group-hover:text-prussian-blue-2"
                    }`}
                  >
                    {pillar.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            SISI KANAN: Dark Canvas Display Utama (Interaktif)
        ════════════════════════════════════════════════ */}
        <div className="mt-12 w-full lg:mt-0 lg:w-[55%] xl:w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePilar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              // 1. Tambahkan 'group' dan efek angkat/shadow saat di-hover pada kontainer utama
              className="group relative flex min-h-[480px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-transparent bg-prussian-blue-2 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(46,41,78,0.5)] sm:p-12"
            >
              {/* Ornamen Teks Arab Besar Transparan di Background */}
              {/* 2. Tambahkan animasi membesar & bergeser ke kiri saat di-hover */}
              <div
                className="pointer-events-none absolute -right-6 top-10 font-serif text-[10rem] leading-none text-white/[0.03] select-none transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:scale-110 sm:text-[14rem]"
                dir="rtl"
              >
                {activePilar.arabic}
              </div>

              {/* Latar Belakang Gradien Halus */}
              {/* 3. Gradien sedikit menyala saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-twilight-indigo/20 to-transparent mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue-2/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Bagian Atas: Ikon & Subtitle */}
              <div className="relative z-10">
                <h3 className="mt-8 text-3xl font-bold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                  {activePilar.title}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-widest text-cyan-400 transition-transform duration-500 group-hover:translate-x-1">
                  {activePilar.subtitle}
                </p>
              </div>

              {/* Bagian Bawah: Deskripsi & Core Value */}
              <div className="relative z-10 mt-12 border-t border-white/15 pt-8 transition-colors duration-500 group-hover:border-white/25">
                <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                  {activePilar.description}
                </p>

                {/* 5. Box "Nilai Esensial" ikut merespons saat di-hover */}
                <div className="mt-8 flex items-center justify-between rounded-xl bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-white/10 group-hover:ring-white/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 transition-colors duration-300 group-hover:text-white/70">
                      Nilai Esensial
                    </span>
                    <span className="mt-1 text-sm font-semibold text-white">
                      {activePilar.coreValue}
                    </span>
                  </div>
                  {/* 6. Tombol panah berubah warna dan bergerak mengarah ke kanan atas */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-prussian-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-twilight-indigo group-hover:text-white">
                    <HiOutlineArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AikPillars;
