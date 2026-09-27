import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";

/* ── Mock Data: Frequently Asked Questions (Konteks Kemahasiswaan & AIK) ── */
const FAQ_DATA = [
  {
    id: "faq-1",
    question: "Bagaimana cara mendaftar Beasiswa Kader Muhammadiyah?",
    answer:
      "Pendaftaran beasiswa dilakukan secara terpusat melalui portal SIAM (Sistem Informasi Akademik Mahasiswa). Anda perlu menyiapkan berkas berupa surat rekomendasi dari Pimpinan Daerah Muhammadiyah (PDM) setempat dan transkrip nilai terakhir.",
  },
  {
    id: "faq-2",
    question: "Apakah layanan konseling psikologi dipungut biaya?",
    answer:
      "Tidak, seluruh layanan konseling dan pendampingan psikologis difasilitasi penuh oleh kampus (100% gratis) dan dijamin kerahasiaannya bagi seluruh mahasiswa aktif Universitas Siber Muhammadiyah.",
  },
  {
    id: "faq-3",
    question: "Bagaimana alur pengajuan proposal kegiatan UKM?",
    answer:
      "Pengajuan proposal dilakukan secara paperless melalui menu 'E-Proposal' di dashboard kemahasiswaan. Proses review oleh Biro Kemahasiswaan memakan waktu maksimal 3 hari kerja sebelum SK dan dana dicairkan.",
  },
  {
    id: "faq-4",
    question: "Apakah kajian AIK wajib diikuti oleh seluruh mahasiswa?",
    answer:
      "Ya, Kajian Ahad Pagi dan kelas AIK merupakan mata kuliah wajib institusional. Kehadiran akan tercatat otomatis melalui presensi QR Code atau log aktivitas di platform e-learning SiberMu.",
  },
  {
    id: "faq-5",
    question: "Di mana saya bisa mengunduh modul materi AIK?",
    answer:
      "Seluruh modul materi, rekaman kajian, dan podcast pembelajaran AIK dapat diakses dan diunduh secara bebas melalui menu 'Syiar Digital' pada seksi di atas, atau langsung melalui repositori perpustakaan digital kampus.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Menggunakan bg-white-smoke sesuai tema global
    <section id="faq" className="bg-white-smoke py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        {/* ── Header Bagian FAQ ── */}

        {/* ── Header Bagian FAQ ── */}
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Badge Kategori */}
          <div className="inline-flex items-center gap-2 rounded-full border border-prussian-blue/20 bg-prussian-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-prussian-blue shadow-sm backdrop-blur-sm mb-4">
            <span>Pusat Bantuan &amp; FAQ</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-prussian-blue-2 sm:text-4xl lg:text-5xl">
            Pertanyaan Seputar SiberMu
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-prussian-blue-2/70 sm:text-lg">
            Temukan jawaban atas pertanyaan umum seputar layanan administrasi
            kemahasiswaan, program beasiswa, dan kegiatan akademik AIK di
            Universitas Siber Muhammadiyah.
          </p>

          {/* CTA Kontak Tambahan */}
          <p className="mt-4 text-sm font-medium text-prussian-blue-2/80">
            Masih memiliki pertanyaan yang belum terjawab?{" "}
            <a
              href="#"
              className="text-prussian-blue font-bold underline decoration-prussian-blue/40 underline-offset-4 hover:decoration-prussian-blue transition-all"
            >
              Hubungi Biro Kemahasiswaan.
            </a>
          </p>
        </div>

        {/* ── Daftar FAQ (Gaya Chat Bubble Interaktif) ── */}
        <div className="flex flex-col gap-8">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="flex flex-col w-full">
                {/* Baris Pertanyaan (Kiri) */}
                <div
                  className="group flex cursor-pointer items-center gap-4 self-start"
                  onClick={() => toggleFaq(index)}
                >
                  {/* Bubble Pil Pertanyaan: Menggunakan warna tema */}
                  <div className="inline-flex items-center rounded-full bg-white border border-prussian-blue/5 shadow-sm px-6 py-3 transition-colors duration-300 group-hover:bg-prussian-blue/5">
                    <span className="font-medium text-prussian-blue-2 sm:text-base text-sm">
                      {faq.question}
                    </span>
                  </div>

                  {/* Ikon Toggle (+ / -) */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center text-prussian-blue/50 transition-colors duration-300 group-hover:text-prussian-blue-2">
                    {isOpen ? (
                      <HiOutlineMinus className="h-5 w-5" />
                    ) : (
                      <HiOutlinePlus className="h-5 w-5" />
                    )}
                  </div>
                </div>

                {/* Baris Jawaban Animasi (Kanan) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        scale: 0.95,
                        originY: 0,
                      }}
                      animate={{ opacity: 1, height: "auto", scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full overflow-hidden"
                    >
                      {/* 
                        Bubble Jawaban: Menggunakan bg-twilight-indigo 
                        dan warna teks white-smoke agar sangat elegan.
                      */}
                      <div className="mt-4 ml-auto w-[90%] sm:w-[80%] md:w-[75%] rounded-3xl rounded-tr-sm bg-twilight-indigo p-6 sm:p-8 shadow-md">
                        <p className="text-sm leading-relaxed text-white-smoke/90 sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
