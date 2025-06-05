FROM oven/bun:1.1

WORKDIR /app

COPY package.json .

COPY prisma .

RUN bun install

COPY . .

RUN bun types

RUN chmod +x entrypoint.*.sh