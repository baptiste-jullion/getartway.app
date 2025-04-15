import swagger from "@elysiajs/swagger";
import { UserController } from "#controllers/user.controller";
import { Elysia } from "elysia";

const app = new Elysia()
    .use(swagger({ path: "/docs" }))
    .get("/", ({ redirect }) => redirect("/docs"), {
        detail: {
            hide: true,
        },
    })
    .group("/api", (app) => app.use(UserController))
    .listen(Bun.env.API_PORT);

console.log(
    `API is running @ ${app.server?.url}\n Docs are available @ ${app.server?.url}docs/`,
);
