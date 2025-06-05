FROM oven/bun:1.1

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN bun install

RUN bun types

RUN chmod +x entrypoint.*.sh