/*
  Warnings:

  - The primary key for the `Bahasa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idBahasa` on the `Bahasa` table. All the data in the column will be lost.
  - You are about to drop the column `voiceOver` on the `Bahasa` table. All the data in the column will be lost.
  - The primary key for the `Daerah` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idDaerah` on the `Daerah` table. All the data in the column will be lost.
  - You are about to drop the column `namaDaerah` on the `Daerah` table. All the data in the column will be lost.
  - You are about to drop the `HasilTranslate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HasilTranslateToDaerah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LetakPeta` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `Bahasa` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idTipeBahasa` to the `Bahasa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voice` to the `Bahasa` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Daerah` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `nama` to the `Daerah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bahasa" DROP CONSTRAINT "Bahasa_idDaerah_fkey";

-- DropForeignKey
ALTER TABLE "HasilTranslate" DROP CONSTRAINT "HasilTranslate_idBahasa_fkey";

-- DropForeignKey
ALTER TABLE "HasilTranslateToDaerah" DROP CONSTRAINT "HasilTranslateToDaerah_idDaerah_fkey";

-- DropForeignKey
ALTER TABLE "HasilTranslateToDaerah" DROP CONSTRAINT "HasilTranslateToDaerah_idHasilTranslate_fkey";

-- DropForeignKey
ALTER TABLE "LetakPeta" DROP CONSTRAINT "LetakPeta_idDaerah_fkey";

-- AlterTable
ALTER TABLE "Bahasa" DROP CONSTRAINT "Bahasa_pkey",
DROP COLUMN "idBahasa",
DROP COLUMN "voiceOver",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "idTipeBahasa" INTEGER NOT NULL,
ADD COLUMN     "voice" TEXT NOT NULL,
ALTER COLUMN "idDaerah" SET DATA TYPE TEXT,
ADD CONSTRAINT "Bahasa_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Daerah" DROP CONSTRAINT "Daerah_pkey",
DROP COLUMN "idDaerah",
DROP COLUMN "namaDaerah",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD CONSTRAINT "Daerah_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "HasilTranslate";

-- DropTable
DROP TABLE "HasilTranslateToDaerah";

-- DropTable
DROP TABLE "LetakPeta";

-- CreateTable
CREATE TABLE "Kota" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "idDaerah" TEXT NOT NULL,

    CONSTRAINT "Kota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipeBahasa" (
    "id" SERIAL NOT NULL,
    "tipe" TEXT NOT NULL,

    CONSTRAINT "TipeBahasa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaerahToDaerah" (
    "id" TEXT NOT NULL,
    "idBahasa1" TEXT NOT NULL,
    "idBahasa2" TEXT NOT NULL,

    CONSTRAINT "DaerahToDaerah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BahasaIndonesia" (
    "id" TEXT NOT NULL,
    "kalimat" TEXT NOT NULL,
    "voice" TEXT NOT NULL,
    "idTipeBahasa" INTEGER NOT NULL,

    CONSTRAINT "BahasaIndonesia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaerahToIndonesia" (
    "id" TEXT NOT NULL,
    "idBahasaDaerah" TEXT NOT NULL,
    "idBahasaIndonesia" TEXT NOT NULL,

    CONSTRAINT "DaerahToIndonesia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Kota" ADD CONSTRAINT "Kota_idDaerah_fkey" FOREIGN KEY ("idDaerah") REFERENCES "Daerah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bahasa" ADD CONSTRAINT "Bahasa_idTipeBahasa_fkey" FOREIGN KEY ("idTipeBahasa") REFERENCES "TipeBahasa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bahasa" ADD CONSTRAINT "Bahasa_idDaerah_fkey" FOREIGN KEY ("idDaerah") REFERENCES "Daerah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BahasaIndonesia" ADD CONSTRAINT "BahasaIndonesia_idTipeBahasa_fkey" FOREIGN KEY ("idTipeBahasa") REFERENCES "TipeBahasa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
