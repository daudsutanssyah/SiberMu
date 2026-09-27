import { motion } from "framer-motion";
import AikPillars from "./AikPillars";
import AikDigitalSyiar from "./AikDigitalSyiar";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const AikSection = () => {
  return (
    <section
      id="aik"
      className="relative overflow-x-hidden bg-white-smoke py-24 sm:py-28 lg:py-32"
    >
      {/* ── Ambient Glows (Diselaraskan dengan Hero & Kemahasiswaan) ── */}
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
        {/* ════════════════════════════════════════════════
            HEADER UTAMA SEKSI AL-ISLAM & KEMUHAMMADIYAHAN
        ════════════════════════════════════════════════ */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge Kategori */}
          <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/20 bg-prussian-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-prussian-blue shadow-sm backdrop-blur-sm">
            <span>Al-Islam &amp; Kemuhammadiyahan</span>
          </div>

          {/* Heading Utama */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-prussian-blue-2 sm:text-4xl lg:text-5xl">
            Integrasi Nilai AIK &amp;{" "}
            <span className="bg-gradient-to-r from-prussian-blue via-twilight-indigo to-prussian-blue bg-clip-text text-transparent">
              Syiar Digital
            </span>
          </h2>

          {/* Deskripsi Singkat */}
          <p className="mt-4 text-base leading-relaxed text-prussian-blue-2/70 sm:text-lg">
            Pusat informasi kegiatan keagamaan, jadwal kajian rutin, serta
            penanaman pilar-pilar Kemuhammadiyahan. Kami memadukan pembentukan
            karakter dan pemanfaatan teknologi untuk menyebarkan syiar Islam
            Berkemajuan di era siber.
          </p>
        </motion.div>

        {/* ════════════════════════════════════════════════
            SUSUNAN 2 KOMPONEN ANAK AIK
        ════════════════════════════════════════════════ */}
        <div className="mt-20 space-y-28 sm:mt-24 sm:space-y-32 lg:mt-28">
          {/* 1. Komponen Anak 1: Internalisasi Nilai (4 Pilar) */}
          <AikPillars />

          {/* 2. Komponen Anak 2: Syiar Digital & Jadwal Kajian */}
          <AikDigitalSyiar />
        </div>
      </div>
    </section>
  );
};

export default AikSection;