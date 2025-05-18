import swagger from "@elysiajs/swagger";
import { ExhibitionController } from "#controllers/exhibition.controller";
import { UserController } from "#controllers/user.controller";
import { Elysia } from "elysia";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const app = new Elysia()
    .use(
        swagger({
            path: "/docs",
            documentation: {
                info: {
                    title: "Artway API Documentation",
                    version: "ALPHA",
                    description:
                        "API documentation for <a href='https://getartway.app'>Artway</a>.",
                },
            },
        }),
    )
    .get("/", ({ redirect }) => redirect("/docs"), {
        detail: {
            hide: true,
        },
    })
    .group("/api", (app) =>
        app
            .use(UserController)
            .use(ExhibitionController)
            .group("/medias", (app) =>
                app.get("/:id/", async ({ params, set }) => {
                    const { id } = params;

                    try {
                        const filePath = join(
                            process.cwd(),
                            "medias",
                            `${id}.webp`,
                        );
                        const file = await readFile(filePath);

                        set.headers["Content-Type"] = "image/webp";
                        return new Response(file);
                    } catch (e) {
                        set.status = 404;
                        return {
                            error: "File not found",
                        };
                    }
                }),
            ),
    )
    .listen({
        port: 3000,
        hostname: "0.0.0.0",
    });

console.log(`API is running on container @ ${app.server?.url}`);

export type App = typeof app;
