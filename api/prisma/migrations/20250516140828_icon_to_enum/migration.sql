/*
  Warnings:

  - Changed the type of `icon` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoryIcon" AS ENUM ('Fashion', 'GraphicArt', 'Interactive', 'Photo', 'Sculpture', 'Sound', 'StreetArt', 'Video', 'Virtual');

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "icon",
ADD COLUMN     "icon" "CategoryIcon" NOT NULL;
