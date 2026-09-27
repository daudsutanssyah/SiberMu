# Landing Page Biro Kemahasiswaan & AIK - SiberMu

Sebuah antarmuka _Single-Page Application_ modern dan interaktif yang dirancang khusus untuk
**Biro Kemahasiswaan dan Al-Islam & Kemuhammadiyahan (AIK) Universitas Siber Muhammadiyah**.

Proyek ini mengedepankan desain UI/UX bergaya _Dribbble-style_ yang bersih (_clean_), elegan, dan responsif, dengan perpaduan warna eksklusif (_Prussian Blue_, _Twilight Indigo_, dan _White Smoke_) serta animasi interaktif untuk memberikan pengalaman pengguna tingkat tinggi.

## Fitur Unggulan

- **Hero Section Dinamis:** Dilengkapi dengan ornamen geometris abstrak, tipografi tebal, dan animasi angka statistik (_counting up_) menggunakan Framer Motion.
- **Direktori UKM Interaktif:** Menggunakan antarmuka _carousel_ modern dengan sistem _filter_ kategori berbasis _pill-buttons_.
- **Galeri Prestasi (Hall of Fame):** Tata letak kartu _full-image_ bergaya _masonry_ vertikal dengan _overlay gradient_ dan efek _hover_ 3D yang elegan.
- **Student Services (Layanan Mahasiswa):** Menampilkan informasi layanan kampus melalui struktur _Bento Grid_ yang rapi dan terorganisir.
- **Seksi AIK Terintegrasi:** Menampilkan 4 Pilar AIK dan jadwal Syiar Digital (Kajian) dengan ornamen mandala Islami yang tipis (_subtle_) di latar belakang.
- **FAQ Bergaya Chat Bubble:** Akordion (_accordion_) interaktif dengan desain gelembung percakapan yang humanis dan ramah pengguna.
- **CTA dengan Infinite Marquee:** Menampilkan galeri foto kegiatan mahasiswa yang berjalan tanpa henti (_infinite horizontal scroll_) di atas dua baris dengan kecepatan berbeda (efek _parallax_).

## Teknologi & Stack

Karya ini dibangun menggunakan _stack front-end_ modern untuk memastikan performa yang maksimal, _rendering_ yang cepat, dan struktur _codebase_ yang bersih:

- **[React.js](https://react.dev/)** - _Library_ inti antarmuka pengguna (UI).
- **[Vite](https://vitejs.dev/)** - _Build tool_ dan _bundler_ berkinerja tinggi.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - _Framework_ CSS _utility-first_ dengan konfigurasi palet kustom (_custom theme_).
- **[Framer Motion](https://www.framer.com/motion/)** - _Library_ animasi tingkat lanjut untuk React (efek _scroll_, _fade-in_, _spring_, dan _marquee_).
- **[React Icons](https://react-icons.github.io/react-icons/)** - Kumpulan ikon vektor beresolusi tinggi.

## Palet Warna Kustom

Desain ini menggunakan skema warna _custom_ yang diimplementasikan langsung pada layer arsitektur Tailwind v4:

- `--color-prussian-blue`: `#0D254E`
- `--color-twilight-indigo`: `#0F2C5E`
- `--color-prussian-blue-2`: `#071631` (Aksen & tipografi utama)
- `--color-white-smoke`: `#F3F1F2` (Latar belakang utama untuk kontras optimal)

## Cara Menjalankan Proyek

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/username-anda/sibermu-landing.git](https://github.com/username-anda/sibermu-landing.git)
   ```

````

2. **Masuk ke direktori:**
```bash
cd sibermu-landing

````

3. **Instal dependensi:**

```bash
npm install

```

4. **Jalankan _server_:**

```bash
npm run dev

```

5. Buka tautan `http://localhost:5173/` di _browser_.

## Live Preview

Situs ini telah di-_deploy_ dan dapat diakses secara langsung pada tautan berikut:

**https://siber-mu.vercel.app/**

## Kreator

**Desain & Pengembangan UI/UX oleh:**

**Muhammad Daud Sutanssyah**
