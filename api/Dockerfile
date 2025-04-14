FROM oven/bun:1.0

WORKDIR /app

COPY . .
RUN bun install

EXPOSE 15336

CMD ["bun", "start"]