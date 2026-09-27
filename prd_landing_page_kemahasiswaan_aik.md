**DOKUMEN KEBUTUHAN PRODUK (PRODUCT REQUIREMENT DOCUMENT)**
**Proyek:** Landing Page Biro Kemahasiswaan dan AIK
**Institusi:** Universitas Siber Muhammadiyah
**Format:** Single-Page Application (SPA) / Halaman Tunggal

## 1. Product Overview & User Persona

Tujuan utama dari proyek ini adalah merancang dan mengembangkan sebuah *landing page* (halaman tunggal) yang menyatukan dua pilar informasi esensial Universitas Siber Muhammadiyah: Biro Kemahasiswaan dan Al-Islam & Kemuhammadiyahan (AIK). Produk ini dirancang untuk merepresentasikan wajah digital institusi yang modern, futuristik, dan berkarakter, dengan memanfaatkan elemen visual 3D yang interaktif tanpa mengorbankan fungsionalitas dan kenyamanan pengguna. Dokumen ini menjadi acuan kerja antara Manajer Produk, Lead UI/UX Designer, dan tim pengembang teknis.

**User Persona:**
*   **Mahasiswa Aktif (Siber/PJJ):** Membutuhkan akses cepat ke informasi kegiatan mahasiswa, layanan administrasi, dan jadwal kajian AIK tanpa harus menavigasi struktur situs yang rumit.
*   **Calon Mahasiswa & Masyarakat Umum:** Ingin melihat kultur kampus, fasilitas non-akademik, prestasi mahasiswa, dan nilai-nilai Kemuhammadiyahan yang diterapkan secara digital.

**User Journey (Scroll Flow):**
Pengguna mendarat di area *Hero Banner* yang memukau dengan elemen 3D interaktif yang merespons pergerakan kursor atau sentuhan layar. Saat pengguna menggulir ke bawah (*scroll*), transisi halaman bergerak secara mulus membawa pengguna mengenali kehidupan kemahasiswaan (organisasi, prestasi, layanan). Guliran selanjutnya secara natural mengarahkan pengguna pada ranah AIK (kajian rutin, syiar digital), menciptakan narasi visual bahwa kegiatan akademis dan spiritual berjalan beriringan dalam satu ekosistem.

## 2. Content Structure & Information Architecture

Seluruh muatan informasi wajib diakomodasi dalam satu halaman web (*single-page*). Tidak diperkenankan adanya tautan yang membuka halaman internal baru (*multi-page*). Arsitektur informasi diurutkan secara vertikal dengan navigasi berbasis *anchor link* (tautan jangkar).

*   **Seksi 1: Hero Section (Beranda)**
    *   Judul utama yang merepresentasikan sinergi Kemahasiswaan dan AIK Universitas Siber Muhammadiyah.
    *   Animasi atau ilustrasi 3D interaktif (misalnya, representasi ekosistem digital kampus dan elemen Islami modern).
    *   *Call-to-Action* (CTA) utama untuk mengarahkan pengguna mengeksplorasi halaman.
*   **Seksi 2: Biro Kemahasiswaan**
    *   **Organisasi & UKM:** Direktori interaktif berupa *slider* atau *carousel* yang menampilkan Unit Kegiatan Mahasiswa dan organisasi kampus.
    *   **Galeri Prestasi:** Daftar pencapaian mahasiswa (akademik maupun non-akademik) menggunakan *card layout* dengan efek kedalaman ruang (3D *depth*).
    *   **Layanan Administrasi & Kesejahteraan:** Informasi ringkas mengenai alur pengajuan beasiswa, layanan konseling, dan kesejahteraan mahasiswa.
*   **Seksi 3: Al-Islam & Kemuhammadiyahan (AIK)**
    *   **Syiar Digital & Kajian:** Jadwal kajian rutin, dokumentasi kegiatan keagamaan, dan portal syiar digital dengan antarmuka yang bersih.
    *   **Internalisasi Nilai:** Infografis interaktif atau ikon 3D yang menjelaskan pilar-pilar Kemuhammadiyahan yang dianut institusi.
*   **Seksi 4: Footer**
    *   Informasi kontak, tautan media sosial kampus, alamat sekretariat, dan informasi hak cipta.

## 3. Functional & Design Requirements

**Kebutuhan Fungsional:**
*   **Navigasi Halaman Tunggal (Sticky Navbar):** Menu navigasi harus tetap terlihat di atas layar saat pengguna menggulir halaman. Mengklik menu akan menggulirkan halaman secara otomatis (smooth scroll) ke seksi yang relevan.
*   **Interaksi Konten Dinamis:** Penggunaan komponen UI seperti *accordion*, *tabs*, atau *carousel* untuk memadatkan informasi (seperti daftar UKM dan jadwal kajian) agar halaman tidak menjadi terlalu panjang dan melelahkan untuk digulir.
*   **Micro-interactions:** Elemen tombol, kartu informasi, dan ikon harus memiliki status *hover* atau *focus* yang memberikan umpan balik visual (misalnya, kartu sedikit terangkat, atau ikon 3D berputar lambat).

**Panduan Desain & Visual:**
*   **Tema Modern & Elemen 3D:** Desain harus mengusung tata letak *clean*, tipografi modern yang sangat terbaca (*legible*), dan ruang negatif (*white space*) yang memadai. Elemen 3D (baik pra-render maupun render waktu nyata) digunakan sebagai titik fokus visual di setiap pergantian seksi, memberikan kesan kedalaman (*spatial depth*).
*   **Estetika Islami Futuristik:** Memasukkan elemen atau pola geometris Islami yang diinterpretasikan ulang dengan gaya desain flat modern atau kaca (*glassmorphism*) yang dipadukan dengan aset 3D.
*   **Kepatuhan Konten & Hak Cipta:** Seluruh aset visual (ikon, ilustrasi, font) wajib memiliki lisensi yang sah (komersial atau *open-source* yang diizinkan). Kredit kreator harus disematkan jika diwajibkan oleh lisensi. Tidak diperkenankan menampilkan elemen visual yang bertentangan dengan nilai institusi, unsur negatif, atau SARA.

## 4. Non-Functional Requirements & Technical Optimization

**Optimasi 3D & Kinerja Pemuatan (Loading Speed):**
*   **Batasan Ukuran Aset:** Untuk memastikan performa yang cepat, total ukuran awal muat (*initial load*) halaman tidak boleh melebihi batas wajar situs modern. Jika menggunakan model 3D yang dirender secara *real-time*, jumlah poligon (*poly count*) harus ditekan seminimal mungkin.
*   **Pre-rendered vs Real-time:** Direkomendasikan menggunakan aset 3D pra-render yang telah diekspor ke dalam format gambar modern berkinerja tinggi (seperti WebP atau AVIF) atau video *loop* singkat, dibandingkan memaksakan *rendering engine* berat di peramban, demi menjaga kecepatan.
*   **Lazy Loading:** Seluruh gambar, video, atau aset 3D yang berada di luar jangkauan pandangan awal (*below the fold*) wajib menggunakan teknik *lazy loading* agar prioritas pemuatan diberikan pada *Hero Section*.

**Responsivitas & Fleksibilitas Lintas Perangkat:**
*   Situs wajib berfungsi 100% dan tampil optimal pada semua ukuran layar (*mobile, tablet, desktop*). 
*   Elemen 3D atau animasi kompleks pada *desktop* harus diadaptasi menjadi versi yang lebih ringan atau statis pada perangkat *mobile* untuk mencegah beban berlebih pada memori dan baterai perangkat pengguna.

**Agnostik Teknologi & Keamanan:**
*   Pengembangan dilakukan dengan pendekatan agnostik teknologi; tim pengembang bebas menggunakan *framework* atau *library* apa pun, selama hasil akhir *rendering* berupa standar web modern (HTML, CSS, JavaScript) yang lulus standar aksesibilitas dan performa.
*   Struktur *markup* harus rapi, semantik, dan terlindungi dari kerentanan injeksi klien standar (seperti XSS), memastikan integritas informasi tetap terjaga.