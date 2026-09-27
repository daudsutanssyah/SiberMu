import { HiOutlineGlobeAlt } from "react-icons/hi2";
// Menggunakan Font Awesome (fa) yang lebih stabil
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import LogoPutih from "../assets/Logo-SiberMu-Putih.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prussian-blue-2 pt-20 pb-8 text-white-smoke">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Grid Layout Utama ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ════ KOLOM 1: Brand & Deskripsi (Lebar 4/12) ════ */}
          <div className="flex flex-col lg:col-span-4">
            {/* Logo Universitas Siber Muhammadiyah */}
            <div className="mb-6 flex items-center">
              <img
                src={LogoPutih}
                alt="Logo Universitas Siber Muhammadiyah"
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white-smoke/70 sm:text-base">
              Mendampingi perjalanan akademik dan pengembangan karakter
              mahasiswa melalui integrasi nilai Al-Islam dan Kemuhammadiyahan.
              Mari tumbuh bersama kami.
            </p>

            {/* Ikon Media Sosial (Telah Direvisi) */}
            <div className="mt-8 flex items-center gap-5 text-white-smoke/60">
              <a
                href="#"
                aria-label="X (Twitter)"
                className="transition-colors hover:text-white-smoke"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white-smoke"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="transition-colors hover:text-white-smoke"
              >
                <HiOutlineGlobeAlt className="h-6 w-6 -mt-0.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-white-smoke"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ════ KOLOM 2: Sitemap (Lebar 2/12) ════ */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mb-6 text-base font-semibold text-white-smoke">
              Peta Situs
            </h4>
            <ul className="flex flex-col space-y-4 text-sm text-white-smoke/70 sm:text-base">
              <li>
                <a
                  href="#beranda"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Layanan Mahasiswa
                </a>
              </li>
              <li>
                <a
                  href="#ukm"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Direktori UKM
                </a>
              </li>
              <li>
                <a
                  href="#aik"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Pusat AIK
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Pusat Bantuan (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* ════ KOLOM 3: Other Pages (Lebar 2/12) ════ */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-white-smoke">
              Tautan Terkait
            </h4>
            <ul className="flex flex-col space-y-4 text-sm text-white-smoke/70 sm:text-base">
              <li>
                <a
                  href="https://siam.sibermu.ac.id"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Portal SIAM
                </a>
              </li>
              <li>
                <a
                  href="https://elearning.sibermu.ac.id"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  E-Learning SiberMu
                </a>
              </li>
              <li>
                <a
                  href="#syarat"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#privasi"
                  className="transition-colors hover:text-white-smoke hover:underline hover:underline-offset-4"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* ════ KOLOM 4: Contact Details (Lebar 3/12) ════ */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-base font-semibold text-white-smoke">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col space-y-4 text-sm text-white-smoke/70 sm:text-base">
              <li className="leading-relaxed">
                Gedung Rektorat Universitas Siber Muhammadiyah, D.I. Yogyakarta,
                Indonesia
              </li>
              <li>
                <a
                  href="mailto:kemahasiswaan@sibermu.ac.id"
                  className="transition-colors hover:text-white-smoke"
                >
                  kemahasiswaan@sibermu.ac.id
                </a>
              </li>
              <li>
                <a
                  href="tel:+622741234567"
                  className="transition-colors hover:text-white-smoke"
                >
                  +62 274 1234 567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Garis Bawah & Hak Cipta ── */}
        <div className="mt-16 flex w-full flex-col items-center justify-center border-t border-white-smoke/10 pt-8 sm:mt-24">
          <div className="flex flex-col text-center">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white-smoke/60 sm:text-sm">
              Desain &amp; Pengembangan UI/UX
            </span>
            <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white-smoke/40 sm:text-xs">
              Hak Cipta &copy; {currentYear} Muhammad Daud Sutanssyah.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
