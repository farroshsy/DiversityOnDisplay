# Folder Prisma

## Pengertian

Prisma merupakan sebuah third party library yang berfungsi sebagai ORM (Object Relational Mapping). ORM adalah sebuah metode dimana kita dapat melakukan query dan manipulasi data ke database dengan paradigma Object-Oriented.

Dengan ORM, kita tidak perlu mengetikkan query secara langsung untuk mengambil atau memodifikasi data dari database, melainkan menggunakan syntax bahasa pemrograman yang digunakna di project ini. Karena kita menggunakan prisma dan project ini dibangun dengan bahasa pemrograman TypeScirpt / JavaScript, maka kita gunakan bahasa pemrograman ini untuk melakukan manipulasi data di database.

Sebagai contoh, kita ingin mendapatkan data pengguna pada table `User` di database, dapat dilakukan dengan cara berikut.

```ts
// file javascript
const users = prisma.user.findMany();

console.log(users);
```

## Struktur Folder

![image](https://user-images.githubusercontent.com/49820990/202835533-e0239ed6-d233-4637-9f4e-9a3169e86bd0.png)

### migrations

Folder ini berisi sql untuk menbuat table beserta insert query untuk memasukkan row data ke table. Isi dari folder ini akan bertambah secara otomatis saat kita melakukan migrate database dengan command

```bash
npx prisma migrate
```

### schema.prisma

File ini berisi model-model untuk tiap table dan konfigurasi Database Service yang digunakan

```js
generator client {
  provider = "prisma-client-js"
}

// konfigurasi database
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Model table daerah
model Daerah {
  idDaerah         Int                      @id @default(autoincrement())
  namaDaerah       String
  letakPeta        LetakPeta[]
  bahasa           Bahasa[]
  toHasilTranslate HasilTranslateToDaerah[]
}

// model table LetakPeta
model LetakPeta {
  idPeta   Int    @id @default(autoincrement())
  titikX   Int
  titikY   Int
  warna    String?
  idDaerah Int
  daerah   Daerah @relation(fields: [idDaerah], references: [idDaerah])
}
```

## Aksi

### Menambah table baru

Kita bisa menambahkan table baru ke database dengan mengedit file schema.prisma. Kemudian definisikan model untuk table tersebut berisi nama table, field atau column beserta tipe datanya, primary key, dan foreign key (bila ada).

Berhati-hati ketika memodifikasi file ini. Perubahan yang terjadi dapat mengakibatkan table yang sudah ada pada database di drop dan digantikan dengan table baru. Sehingga data yang sudah tersimpan sebelumnya dapat hilang.
