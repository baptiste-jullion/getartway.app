import { ArtistController } from "#controllers/artist.controller";
import { CategoryController } from "#controllers/category.controller";
import { ExhibitionController } from "#controllers/exhibition.controller";
import { MediaController } from "#controllers/media.controller";
import { UserController } from "#controllers/user.controller";
import { SwaggerPlugin } from "#plugins/swagger.plugin";
import { Elysia } from "elysia";

const app = new Elysia()
    .use(SwaggerPlugin)
    .get("/", ({ redirect }) => redirect("/docs"), {
        detail: {
            hide: true,
        },
    })
    .get("/health", () => "OK")
    .group("/api", (app) =>
        app
            .use(UserController)
            .use(ExhibitionController)
            .use(CategoryController)
            .use(ArtistController)
            .use(MediaController),
    )
    .listen({
        port: 3000,
        hostname: "0.0.0.0",
    });

console.log(
    `API is running on container @ ${app.server?.url}.\nRunning on host @ ${Bun.env.API_URL}.`,
);

export type App = typeof app;

export { db } from "#database";
