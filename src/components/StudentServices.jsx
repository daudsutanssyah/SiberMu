import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import LayananImg1 from "../assets/layanan.png";

/* ── Mock Data Layanan Administrasi & Kesejahteraan Mahasiswa ── */
const SERVICES_DATA = [
  {
    id: "beasiswa",
    title: "Program Beasiswa & Bantuan Studi untuk Mahasiswa",
    subtitle:
      "Akses pembiayaan pendidikan terpadu untuk talenta berprestasi. Dapatkan kemudahan informasi untuk Beasiswa Kader Muhammadiyah, KIP-Kuliah, hingga dana hibah bantuan riset dan publikasi ilmiah mahasiswa secara digital.",
    badge: "BEASISWA",
    date: "PENDAFTARAN DIBUKA",
    image: LayananImg1,
    ctaText: "Panduan & Formulir",
    ctaLink: "#beasiswa",
  },
  {
    id: "konseling",
    title: "Konseling & Kesejahteraan Mental",
    subtitle:
      "Ruang aman bimbingan psikologis bersama konselor profesional. Kami melayani konsultasi daring maupun luring, serta program pendampingan sebaya (peer counselor) untuk menjaga motivasi belajar Anda.",
    badge: "LAYANAN",
    date: "PRIVAT & RAHASIA",
    ctaText: "Jadwalkan Konsultasi",
    ctaLink: "#konseling",
  },
  {
    id: "karir-magang",
    title: "Pusat Karier & Magang Industri",
    subtitle:
      "Jembatan strategis menuju dunia kerja profesional. Dapatkan akses ke penyaluran magang MBKM bersertifikat, klinik review CV ATS, simulasi wawancara, dan bursa kerja khusus alumni SiberMu.",
    badge: "KARIR",
    date: "50+ MITRA INDUSTRI",
    ctaText: "Portal Karier",
    ctaLink: "#karir",
  },
  {
    id: "e-proposal",
    title: "Portal E-Proposal & Administrasi",
    subtitle:
      "Layanan administrasi paperless untuk perizinan dan legalitas kegiatan. Ajukan proposal dana hibah, permohonan surat dispensasi, hingga penerbitan SK kepengurusan UKM dengan cepat.",
    badge: "ADMINISTRASI",
    date: "24/7 DIGITAL",
    ctaText: "Akses E-Proposal",
    ctaLink: "#e-proposal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StudentServices = () => {
  const featuredService = SERVICES_DATA[0];
  const gridServices = SERVICES_DATA.slice(1);

  return (
    <div className="relative mt-20 pt-10">
      {/* ── Sub-header Layanan ── */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/15 bg-prussian-blue/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-prussian-blue">
          <span>Layanan Terpadu &amp; Kesejahteraan</span>
        </div>
        <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-prussian-blue-2 lg:text-4xl">
          Dukungan Lengkap Perjalanan Studi Anda
        </h3>
        <p className="mt-4 text-base leading-relaxed text-prussian-blue-2/70">
          Mulai dari fasilitas beasiswa, pendampingan kesehatan mental, hingga
          administrasi legalitas organisasi, semuanya terintegrasi secara
          digital untuk kemudahan Anda.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-6"
      >
        {/* ── Featured Card (Atas - Horizontal) ── */}
        <motion.div
          variants={itemVariants}
          className="group flex flex-col lg:flex-row overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          {/* Sisi Kiri: Gambar (DIREVISI: Menjadi 60% agar lebih dominan) */}
          <div className="relative h-64 w-full lg:h-auto lg:w-[60%] overflow-hidden">
            <img
              src={featuredService.image}
              alt={featuredService.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Sisi Kanan: Konten Teks (DIREVISI: Menjadi 40%) */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-[40%] lg:p-10 xl:p-12">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider">
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-700">
                {featuredService.badge}
              </span>
              <span className="text-gray-400">{featuredService.date}</span>
            </div>

            {/* Judul: Animasi Underline Per Baris (Multiline Inline) */}
            <h4 className="mt-5 text-2xl font-extrabold leading-[1.4] text-prussian-blue-2 lg:text-[1.75rem]">
              <span className="bg-gradient-to-r from-prussian-blue-2 to-prussian-blue-2 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_2px]">
                {featuredService.title}
              </span>
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-gray-500 lg:text-base">
              {featuredService.subtitle}
            </p>

            <a
              href={featuredService.ctaLink}
              className="mt-8 flex w-max items-center gap-2 rounded-lg bg-prussian-blue-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-prussian-blue"
            >
              {featuredService.ctaText}
              <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* ── Grid Cards (Bawah - 3 Kolom) ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {gridServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group flex flex-col rounded-[1.5rem] border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider">
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-gray-700">
                  {service.badge}
                </span>
                <span className="text-gray-400">{service.date}</span>
              </div>

              {/* Judul Grid Bawah dengan Animasi Underline Per Baris */}
              <h4 className="mt-5 text-lg font-bold leading-[1.4] text-prussian-blue-2">
                <span className="bg-gradient-to-r from-prussian-blue-2 to-prussian-blue-2 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  {service.title}
                </span>
              </h4>

              <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-500">
                {service.subtitle}
              </p>

              <a
                href={service.ctaLink}
                className="mt-6 flex items-center gap-1.5 text-sm font-bold text-prussian-blue-2 transition-colors group-hover:text-prussian-blue"
              >
                {service.ctaText}
                <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StudentServices;
