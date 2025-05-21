#!/bin/sh
bunx prisma migrate deploy
bun prisma/seed.ts
bun dev
