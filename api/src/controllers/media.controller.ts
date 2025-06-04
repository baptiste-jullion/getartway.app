import Elysia from "elysia";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const MediaController = new Elysia({
    prefix: "/medias",
    tags: ["Medias"],
}).get(
    "/:id/",
    async ({ params, set }) => {
        const { id } = params;

        try {
            const filePath = join(process.cwd(), "medias", `${id}.webp`);
            const file = await readFile(filePath);

            set.headers["Content-Type"] = "image/webp";
            return new Response(new Uint8Array(file));
        } catch (e) {
            set.status = 404;
            console.error(e);
            return {
                error: "File not found",
            };
        }
    },
    {
        detail: {
            summary: "Retrieve a media file by ID",
        },
    },
);
