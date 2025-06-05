#!/bin/sh
bunx prisma migrate reset --force --skip-seed --skip-generate
bunx prisma db seed
bun dev
