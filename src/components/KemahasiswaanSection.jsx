import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import UkmDirectory from "./UkmDirectory";
import AchievementGallery from "./AchievementGallery";
import StudentServices from "./StudentServices";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const KemahasiswaanSection = () => {
  return (
    <section
      id="kemahasiswaan"
      className="relative min-h-screen overflow-x-hidden bg-white-smoke pt-32 pb-16 md:pt-36 lg:pt-40 xl:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-prussian-blue/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-twilight-indigo/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-prussian-blue/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ═══════════════════════════════════
            HEADER UTAMA SEKSI KEMAHASISWAAN
        ═══════════════════════════════════ */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge Kategori - Teks dikembalikan ke warna gelap/biru */}
          <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/20 bg-prussian-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-prussian-blue shadow-sm">
            <span>Biro Kemahasiswaan &amp; Alumni</span>
          </div>

          {/* Heading Utama - Teks dikembalikan ke prussian-blue-2 yang pekat */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-prussian-blue-2 sm:text-4xl lg:text-5xl">
            Eksplorasi Kehidupan Kampus &amp;{" "}
            <span className="text-prussian-blue">Potensi Diri</span>
          </h2>

          {/* Deskripsi Singkat - Teks dikembalikan ke prussian-blue-2/70 */}
          <p className="mt-4 text-base leading-relaxed text-prussian-blue-2/70 sm:text-lg">
            Temukan ekosistem dinamis untuk mengasah bakat kepemimpinan,
            merengkuh prestasi kompetisi, dan mengakses layanan kesejahteraan
            mahasiswa berbasis teknologi siber modern.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════
            SUSUNAN 3 KOMPONEN ANAK
        ═══════════════════════════════════ */}
        <div className="mt-20 space-y-28 sm:mt-24 sm:space-y-32 lg:mt-28">
          {/* 1. Direktori Organisasi & UKM */}
          <UkmDirectory />
          {/* 2. Galeri Prestasi Mahasiswa */}
          <AchievementGallery />
          {/* 3. Layanan Administrasi & Kesejahteraan (Bento Grid) */}
          <StudentServices />
        </div>
      </div>
    </section>
  );
};

export default KemahasiswaanSection;
