#!/bin/sh
bunx prisma migrate deploy
bunx prisma db seed
bun dev
