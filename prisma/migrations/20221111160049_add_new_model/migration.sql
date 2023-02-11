/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Daerah" (
    "idDaerah" SERIAL NOT NULL,
    "namaDaerah" TEXT NOT NULL,

    CONSTRAINT "Daerah_pkey" PRIMARY KEY ("idDaerah")
);

-- CreateTable
CREATE TABLE "LetakPeta" (
    "idPeta" SERIAL NOT NULL,
    "titikX" INTEGER NOT NULL,
    "titikY" INTEGER NOT NULL,
    "warna" TEXT,
    "idDaerah" INTEGER NOT NULL,

    CONSTRAINT "LetakPeta_pkey" PRIMARY KEY ("idPeta")
);

-- CreateTable
CREATE TABLE "Bahasa" (
    "idBahasa" SERIAL NOT NULL,
    "kalimat" TEXT NOT NULL,
    "voiceOver" BYTEA,
    "idDaerah" INTEGER NOT NULL,

    CONSTRAINT "Bahasa_pkey" PRIMARY KEY ("idBahasa")
);

-- CreateTable
CREATE TABLE "HasilTranslateToDaerah" (
    "id" SERIAL NOT NULL,
    "idDaerah" INTEGER NOT NULL,
    "idHasilTranslate" INTEGER NOT NULL,

    CONSTRAINT "HasilTranslateToDaerah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasilTranslate" (
    "idTranslate" SERIAL NOT NULL,
    "hasilTranslate" TEXT NOT NULL,
    "idBahasa" INTEGER NOT NULL,

    CONSTRAINT "HasilTranslate_pkey" PRIMARY KEY ("idTranslate")
);

-- AddForeignKey
ALTER TABLE "LetakPeta" ADD CONSTRAINT "LetakPeta_idDaerah_fkey" FOREIGN KEY ("idDaerah") REFERENCES "Daerah"("idDaerah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bahasa" ADD CONSTRAINT "Bahasa_idDaerah_fkey" FOREIGN KEY ("idDaerah") REFERENCES "Daerah"("idDaerah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilTranslateToDaerah" ADD CONSTRAINT "HasilTranslateToDaerah_idDaerah_fkey" FOREIGN KEY ("idDaerah") REFERENCES "Daerah"("idDaerah") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilTranslateToDaerah" ADD CONSTRAINT "HasilTranslateToDaerah_idHasilTranslate_fkey" FOREIGN KEY ("idHasilTranslate") REFERENCES "HasilTranslate"("idTranslate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilTranslate" ADD CONSTRAINT "HasilTranslate_idBahasa_fkey" FOREIGN KEY ("idBahasa") REFERENCES "Bahasa"("idBahasa") ON DELETE RESTRICT ON UPDATE CASCADE;
