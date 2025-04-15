import { UserReadDTO } from "#dtos/user.dto";
import { UserService } from "#services/user.service";
import { Elysia, t } from "elysia";

export const UserController = new Elysia({
    prefix: "/users",
    tags: ["Users"],
}).get("/", () => UserService.list(), {
    detail: {
        summary: "List all users",
    },
    response: t.Array(UserReadDTO),
});
