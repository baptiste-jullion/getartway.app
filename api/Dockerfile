FROM oven/bun:1.1

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json .

COPY prisma .

RUN bun install

COPY . .

RUN bun types

RUN chmod +x entrypoint.*.sh