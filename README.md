# 📚 Sistem Perpustakaan Digital (Remedial UTS PAW)

* **Nama**: **Khansa Qoonitah Paramesti**
* **NIM**: **20230140118**
* **Kelas**:**C**

---

## 🛠️ Deskripsi Proyek
Proyek ini adalah aplikasi Backend berbasis Node.js dan Express untuk manajemen perpustakaan sederhana. Aplikasi ini menggunakan Sequelize ORM untuk berinteraksi dengan database MySQL dan telah mengimplementasikan fiturGeolocation Tracking serta Role-Based Access Control.

### Fitur Utama & Validasi
* **Manajemen Buku (CRUD)**: Admin dapat menambah, mengubah, dan menghapus data buku.
* **Logika Peminjaman**: Setiap peminjaman akan otomatis mengurangi stok buku di database.
* **Geolocation Tracking**: Sistem mencatat koordinat `latitude` dan `longitude` pengguna saat melakukan peminjaman.
* **Keamanan Role**: Menggunakan middleware untuk memvalidasi header `x-user-role` (Admin/User).
* **Validasi Input**: Mencegah penyimpanan data jika kolom `title` atau `author` kosong.

---
### 1. Instalasi Dependencies
Setelah mengunduh atau melakukan *clone* pada repositori ini, buka terminal di direktori utama proyek dan jalankan perintah:



### 2. Konfigurasi Database & Environment
Buatlah file baru bernama **`.env`** di direktori utama (root) proyek, sejajar dengan file `app.js`. File ini digunakan untuk menyimpan kredensial database agar aplikasi dapat terhubung ke MySQL. 

Isi file tersebut dengan format berikut dan sesuaikan dengan pengaturan MySQL
<img width="659" height="251" alt="image" src="https://github.com/user-attachments/assets/4cddba7b-2512-49ad-b68f-3b94ea731f5c" />

### 3. Menjalankan Aplikasi (Scripts)
Proyek ini mendukung dua metode pemanggilan server melalui **NPM Scripts** yang telah dikonfigurasi di `package.json`:

* **Mode Produksi (Standard)**:
    ```bash
    npm start
    ```
    **Fungsi**: Menjalankan aplikasi secara stabil menggunakan perintah dasar `node app.js`. Gunakan perintah ini untuk pengujian akhir atau saat aplikasi sudah siap digunakan.

* **Mode Pengembangan (Development)**:
    ```bash
    npm run dev
    ```
    **Fungsi**: Menjalankan aplikasi menggunakan `nodemon`. Dengan perintah ini, server akan otomatis melakukan *restart* setiap kali Anda menyimpan perubahan pada kode sumber, sehingga mempermudah proses *debugging*.


