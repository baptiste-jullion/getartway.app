/*
  Warnings:

  - You are about to drop the column `bg_color` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `fg_color` on the `Category` table. All the data in the column will be lost.
  - Added the required column `bgColor` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fgColor` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "bg_color",
DROP COLUMN "fg_color",
ADD COLUMN     "bgColor" VARCHAR(7) NOT NULL,
ADD COLUMN     "fgColor" VARCHAR(7) NOT NULL;
