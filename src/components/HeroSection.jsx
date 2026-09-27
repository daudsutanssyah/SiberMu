import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import {
  HiOutlineUserGroup,
  HiOutlineTrophy,
  HiOutlineBookOpen,
} from "react-icons/hi2";
import { useEffect, useRef } from "react";
import HeroImg1 from "../assets/hero-section-1.png";
import HeroImg2 from "../assets/hero-section-2.png";
import HeroImg3 from "../assets/hero-section-3.png";

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = String(value).match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest) + (match ? suffix : ""),
  );

  useEffect(() => {
    if (isInView && match) {
      const animation = animate(count, targetNumber, {
        duration: 2,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, targetNumber, match, count]);

  if (!match) return <span ref={ref}>{value}</span>;

  return <motion.span ref={ref}>{rounded}</motion.span>;
};
const IMAGES = [
  {
    src: HeroImg1,
    alt: "Mahasiswa berdiskusi dalam kelompok belajar",
  },
  {
    src: HeroImg2,
    alt: "Kegiatan kemahasiswaan di kampus",
  },
  {
    src: HeroImg3,
    alt: "Mahasiswa berkolaborasi dalam proyek",
  },
];

/* ── Data statistik ── */
const STATS = [
  { icon: HiOutlineUserGroup, value: "50+", label: "UKM Aktif" },
  { icon: HiOutlineTrophy, value: "100+", label: "Prestasi" },
  { icon: HiOutlineBookOpen, value: "50+", label: "Kajian Rutin" },
];

/* ── Variasi animasi Framer Motion ── */
const containerLeft = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

const containerRight = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-x-hidden bg-white-smoke pt-32 pb-16 md:pt-36 lg:pt-40 xl:pt-44"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* ═══════════════════════════════════
              SISI KIRI — Teks, CTA & Statistik Animasi
          ═══════════════════════════════════ */}
          <motion.div
            variants={containerLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={slideInLeft}
              className="text-4xl font-extrabold leading-[1.15] tracking-tight text-prussian-blue-2 sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]"
            >
              Sinergi Akademik
              <br />
              <span className="text-prussian-blue">&amp; Karakter</span> di Era
              Digital
            </motion.h1>

            {/* Deskripsi */}
            <motion.p
              variants={slideInLeft}
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-prussian-blue-2/70 sm:text-lg lg:mx-0 lg:mt-6 lg:max-w-md xl:max-w-lg"
            >
              Pusat informasi terpadu kegiatan kemahasiswaan, pengembangan
              karakter, dan penanaman nilai-nilai Al-Islam &amp;
              Kemuhammadiyahan (AIK) Universitas Siber Muhammadiyah.
            </motion.p>

            {/* Tombol CTA */}
            <motion.div
              variants={slideInLeft}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            >
              <a
                href="#kemahasiswaan"
                className="inline-flex items-center justify-center rounded-full bg-prussian-blue px-6 py-3 text-sm font-semibold text-white-smoke shadow-lg shadow-prussian-blue/25 transition-all duration-300 hover:bg-twilight-indigo hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Eksplorasi Kemahasiswaan
              </a>
              <a
                href="#aik"
                className="inline-flex items-center justify-center rounded-full border-2 border-twilight-indigo px-6 py-3 text-sm font-semibold text-twilight-indigo transition-all duration-300 hover:bg-twilight-indigo hover:text-white-smoke hover:-translate-y-0.5 active:translate-y-0"
              >
                Jadwal Kajian AIK
              </a>
            </motion.div>

            {/* Statistik dengan Efek Counting Up */}
            <motion.div
              variants={slideInLeft}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:mt-12 lg:justify-start"
            >
              {STATS.map(({ icon: Icon, value, label }, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {/* Ikon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-prussian-blue/10">
                    <Icon className="h-5 w-5 text-prussian-blue" />
                  </div>
                  {/* Teks Angka & Label */}
                  <div>
                    <p className="text-xl font-bold leading-none text-prussian-blue-2">
                      <AnimatedCounter value={value} />
                    </p>
                    <p className="mt-0.5 text-xs text-prussian-blue-2/60">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════
              SISI KANAN
          ═══════════════════════════════════ */}
          <motion.div
            variants={containerRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-4 w-full flex-1 lg:mt-0"
          >
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none lg:h-[460px] xl:h-[490px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 left-1/4 h-32 w-32 rounded-full bg-prussian-blue/15 blur-3xl sm:h-36 sm:w-36 lg:-top-6"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 right-1/4 h-28 w-28 rounded-full bg-twilight-indigo/20 blur-3xl sm:h-32 sm:w-32 lg:-bottom-6"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/3 right-0 h-20 w-20 rounded-full bg-prussian-blue/10 blur-2xl sm:h-24 sm:w-24 lg:top-1/4 lg:-right-4"
              />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-1 -top-3 z-0 h-20 w-20 opacity-30 sm:right-0 sm:-top-5 sm:h-24 sm:w-24 lg:-right-10 lg:-top-8 xl:-right-14 xl:-top-10"
                style={{
                  backgroundImage:
                    "radial-gradient(#0F2C5E 2px, transparent 2px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="pointer-events-none absolute left-1 -top-4 z-10 h-12 w-12 rounded-full border-2 border-dashed border-prussian-blue/30 sm:left-0 sm:-top-6 sm:h-14 sm:w-14 lg:-left-10 lg:-top-8 xl:-left-12 xl:-top-10 lg:h-16 lg:w-16"
              />
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  x: [0, -6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="pointer-events-none absolute bottom-1 right-2 z-10 h-8 w-8 rounded-full bg-twilight-indigo/20 backdrop-blur-sm ring-1 ring-white/50 sm:bottom-0 sm:right-1 sm:h-9 sm:w-9 lg:-bottom-8 lg:-right-4 xl:-bottom-10 xl:-right-6 lg:h-10 lg:w-10"
              />

              <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:block">
                <motion.div
                  variants={fadeInUp}
                  className="relative col-span-1 lg:absolute lg:top-0 lg:left-0 lg:z-20 lg:w-[48%] xl:w-[46%]"
                >
                  <div className="group relative cursor-pointer overflow-hidden rounded-t-[3.5rem] rounded-b-xl bg-white shadow-lg shadow-prussian-blue/10 ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-prussian-blue/30 sm:rounded-t-[4.5rem] sm:rounded-b-2xl lg:rounded-t-[5rem]">
                    <img
                      src={IMAGES[0].src}
                      alt={IMAGES[0].alt}
                      className="h-36 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-44 md:h-52 lg:h-52 xl:h-56"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative col-span-1 row-span-2 h-full min-h-0 lg:absolute lg:top-8 xl:top-10 lg:right-0 lg:z-30 lg:w-[45%] xl:w-[44%] lg:h-auto"
                >
                  <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl bg-white shadow-xl shadow-prussian-blue/15 ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-twilight-indigo/40 sm:rounded-tr-[3.5rem] sm:rounded-bl-[3.5rem] lg:rounded-tr-[4rem] lg:rounded-bl-[4rem]">
                    <img
                      src={IMAGES[1].src}
                      alt={IMAGES[1].alt}
                      className="h-full min-h-[280px] sm:min-h-[350px] md:min-h-[410px] lg:min-h-0 lg:h-60 xl:h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-twilight-indigo/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="relative col-span-1 lg:absolute lg:bottom-2 lg:left-[6%] lg:z-20 lg:w-[46%] xl:w-[45%]"
                >
                  <div className="group relative cursor-pointer overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg bg-white shadow-lg shadow-prussian-blue/10 ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-prussian-blue/30 sm:rounded-tl-[3rem] sm:rounded-br-[3rem] lg:rounded-tl-[3.5rem] lg:rounded-br-[3.5rem]">
                    <img
                      src={IMAGES[2].src}
                      alt={IMAGES[2].alt}
                      className="h-32 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-38 md:h-44 lg:h-44 xl:h-48"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue-2/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
