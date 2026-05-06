# 📖 PANDUAN EDITING WEBSITE
## Parulian Siahaan & Partners

---

## 📁 Struktur File Website

```
├── index.html          (Halaman Utama)
├── about.html          (Tentang Kami)
├── services.html       (Layanan)
├── contact.html        (Kontak)
├── blog/
│   ├── blog.html      (Daftar Blog)
│   ├── artikel-6-alasan-menyewa-pengacara.html
│   └── artikel-manfaat-retainer.html
├── css/
│   └── style.css      (Styling Website)
├── js/
│   └── script.js      (Interaksi/JavaScript)
└── Assets/            (Gambar)
```

---

## 🎨 CARA MENGEDIT WEBSITE

### 1. Mengubah Warna Tema
Buka `css/style.css` dan cari bagian `:root`:
```css
:root {
    --primary-color: #1a365d;      /* Biru utama */
    --accent-color: #c9a227;        /* Emas/Kuning */
    --text-dark: #1a202c;           /* Teks gelap */
    --text-medium: #4a5568;        /* Teks sedang */
}
```
**Cara edit:** Ubah kode warna hex sesuai keinginan.

### 2. Mengubah Teks di Halaman
Buka file HTML yang ingin diubah (contoh: `index.html`), lalu cari teks yang ingin diubah.

**Contoh:**
```html
<h1 class="hero-title">Setiap Kasus Butuh <span class="highlight">Keadilan</span></h1>
```
Ubah teks "Setiap Kasus Butuh Keadilan" sesuai kebutuhan.

### 3. Mengubah Gambar
Di setiap file HTML, cari tag `<img>`:
```html
<img src="Assets/Logo.png" alt="Logo">
```
**Cara edit:**
- Pastikan gambar baru di folder `Assets/`
- Ubah `src="Assets/Logo.png"` menjadi nama file gambar baru

### 4. Mengubah Link Sosial Media
Di setiap file HTML, cari bagian footer sosial:
```html
<a href="https://wa.me/628118168500" aria-label="WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
```
Ubah link `https://wa.me/628118168500` dengan link yang diinginkan.

### 5. Menambah/Mengurangi Menu Navbar
Buka file HTML, cari bagian `<ul class="nav-menu">`:
```html
<ul class="nav-menu">
    <li><a href="index.html" class="nav-link">Beranda</a></li>
    <li><a href="about.html" class="nav-link">Tentang Kami</a></li>
    <!-- Tambah menu di sini -->
</ul>
```

### 6. Mengubah Font
Di `css/style.css` bagian `:root`:
```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```
**Catatan:** Font sudah dari Google Fonts, jangan sembarangan ubah kecuali sudah import font baru.

### 7. Mengubah Ukuran Gambar di CSS
```css
.logo img {
    height: 90px;      /* Tinggi logo */
    width: auto;
}

.team-image img {
    height: 300px;    /* Tinggi foto tim */
    object-fit: cover;
}
```

---

## 📱 RESPONSIVITAS (Mobile)

### Breakpoints yang tersedia:
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** 480px - 768px
- **Small Mobile:** 380px - 480px
- **Very Small:** < 380px

### Cara Mengubah Ukuran Mobile
Di `css/style.css` bagian `@media (max-width: 380px)`:
```css
@media (max-width: 380px) {
    .hero-title {
        font-size: 24px !important;  /* Ukuran judul di mobile */
    }
    .container {
        padding: 0 12px;  /* Padding container mobile */
    }
}
```

---

## ✍️ MENAMBAH KONTEN BLOG BARU

### 1. Salin file artikel contoh:
```bash
copy blog\artikel-6-alasan-menyewa-pengacara.html blog\artikel-baru.html
```

### 2. Edit file baru:
- Ubah `<title>` di bagian `<head>`
- Ubah konten artikel di bagian `<article class="article-body">`
- Ubah gambar dengan mengubah `src="../Assets/nama-gambar.jpg"`

### 3. Tambah link di blog.html:
```html
<div class="blog-card">
    <div class="blog-card-image">
        <img src="../Assets/gambar.jpg" alt="Judul">
    </div>
    <div class="blog-card-content">
        <h3 class="blog-card-title">
            <a href="artikel-baru.html">Judul Artikel</a>
        </h3>
        <p class="blog-card-excerpt">Deskripsi singkat...</p>
        <a href="artikel baru.html" class="blog-card-link">Baca Selengkapnya</a>
    </div>
</div>
```

---

## 🔧 TROUBLESHOOTING

### Masalah: Gambar tidak muncul
**Solusi:** 
1. Pastikan gambar ada di folder `Assets/`
2. Periksa nama file sama persis (case-sensitive)
3. Pastikan path benar: `Assets/bukan assets/`

### Masalah: Font tidak muncul
**Solusi:** Cek koneksi internet, karena font dari Google Fonts

### Masalah: Mobile responsive bermasalah
**Solusi:** 
- Cek CSS di bagian `@media`
- Tambahkan `!important` jika perlu
- Contoh: `font-size: 20px !important;`

### Masalah: Menu hamburger tidak berfungsi
**Solusi:** Pastikan file `js/script.js` terhubung dengan benar di bagian bawah HTML:
```html
<script src="js/script.js"></script>
```

---

## 📞 INFORMASI KONTAK

- **Telepon:** 0811-8168-500
- **Email:** info@paruliansiaahanpartners.com
- **Alamat:** Jl. Pelopor No.15-16 Blok O 5, RT.7/RW.11, Tegal Alur, Kec. Kalideres, Kota Jakarta Barat, DKI Jakarta 11820

---

## ✅ Checklist Sebelum Upload ke Hosting

1. ✅ Semua gambar sudah di folder Assets
2. ✅ Semua link sudah benar
3. ✅ Sudah diuji di berbagai ukuran layar
4. ✅ Font dan warna sudah sesuai keinginan
5. ✅ CTA (Call to Action) sudah aktif

---

**Dibuat:** Mei 2026
**Untuk:** Parulian Siahaan & Partners
