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

**example:**
```env
DB_NAME=Perpustakaan_db
DB_USER=root
DB_PASS=password_mysql_anda
DB_HOST=127.0.0.1
DB_DIALECT=mysql
PORT=3000
```
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

---
## Bukti Hasil Pengujian (Screenshots)

### 1. Public
#### a. GET
**Penjelasan**: Menampilkan seluruh list buku serta dengan jumlahnya
<img width="1920" height="1128" alt="GET" src="https://github.com/user-attachments/assets/9d0460c3-6afc-402b-bc9c-1ca3bc89351e" />

#### b. GET by id
**Penjelasan**: Menampilkan list buku serta dengan jumlahnya sesuai dengan id yang di berikan
<img width="1920" height="1128" alt="Screenshot 2026-01-30 214137" src="https://github.com/user-attachments/assets/93fce137-38ac-4cb0-bfd3-f23bd0e7d4a5" />

### 2. Admin Mode
**Penjelasan**: Admin memiliki otoritas penuh untuk menambah buku baru (`POST`), mengupdate (`PUT`)serta menghapus buku (`DELETE`) yang sudah tidak tersedia di perpustakaan.
#### a. POST 
<img width="1920" height="1128" alt="POST" src="https://github.com/user-attachments/assets/0475b575-aeb9-4afa-9fb3-305b991b2bcd" />

#### b. PUT
<img width="1920" height="1128" alt="PUT" src="https://github.com/user-attachments/assets/1a528085-7a81-4ad3-8877-117f3c462531" />

#### c. DELETE
<img width="1920" height="1128" alt="DELETE" src="https://github.com/user-attachments/assets/2720cd41-b3d2-41a1-a61c-75a662e1136c" />

### 3. User Mode
#### a. POST
**Penjelasan**: Endpoint `POST /api/borrow` berhasil memproses peminjaman buku dengan mengirimkan data `bookId` serta koordinat lokasi (`latitude` & `longitude`). Respon `201 Created` menunjukkan data berhasil divalidasi dan disimpan ke sistem.
  
<img width="1920" height="1128" alt="POST_Borrow" src="https://github.com/user-attachments/assets/a8c250bd-0ed1-4333-9821-00907dffb730" />


---

## Database
### 1. Tabel Peminjaman
**Penjelasan**: Screenshot ini membuktikan bahwa koordinat Geolocation benar-benar tersimpan di tabel `borrowlogs`. Terlihat data `latitude` (-6.2088) dan `longitude` (106.846) tercatat sesuai dengan input dari pengujian API.
  
<img width="1920" height="1128" alt="Screenshot 2026-01-30 214209" src="https://github.com/user-attachments/assets/b80ca8f6-98ad-4e71-8ecf-6f61f0338d60" />

### 2. Tabel buku
**Penjelasan**: Logika bisnis untuk pengurangan stok berjalan dengan benar. Setiap kali ada transaksi peminjaman di tabel `borrowlogs`, jumlah `stock` pada tabel `books` akan otomatis berkurang secara real-time.

<img width="1920" height="1128" alt="image" src="https://github.com/user-attachments/assets/1b4a9fdd-81b2-49e9-aa9a-4384f2c7e86f" />

---
## Tampilan Web
**Penjelasan**:Karena proyek ini berfokus pada pengembangan REST API (Backend), aplikasi yang dibuat memang tidak memiliki tampilan antarmuka pengguna (UI) berbasis HTML atau CSS.
Server dikonfigurasi untuk mengirimkan data dalam bentuk objek JSON sebagai respons utama.
<img width="1920" height="1128" alt="image" src="https://github.com/user-attachments/assets/3fb4e82e-e960-4ed8-acce-58e1d5e1802d" />







