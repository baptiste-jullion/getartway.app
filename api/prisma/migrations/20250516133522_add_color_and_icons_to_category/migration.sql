/*
  Warnings:

  - Added the required column `bg_color` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fg_color` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "bg_color" VARCHAR(7) NOT NULL,
ADD COLUMN     "fg_color" VARCHAR(7) NOT NULL,
ADD COLUMN     "icon" VARCHAR(255) NOT NULL;

