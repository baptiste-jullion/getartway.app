import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia()
    .use(swagger({ path: "/docs" }))
    .get("/", ({ redirect }) => redirect("/docs"), {
        detail: {
            hide: true,
        },
    })
    // fallback to /docs
    .listen(Bun.env.API_PORT);

console.log(
    `API is running @ ${app.server?.url}\n Docs are available @ ${app.server?.url}docs/`,
);
