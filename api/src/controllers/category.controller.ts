import { CategoryReadDTO } from "#dtos/category.dto";
import { CategoryService } from "#services/category.service";
import { Elysia, t } from "elysia";

export const CategoryController = new Elysia({
    prefix: "/categories",
    tags: ["Categories"],
}).get("/", () => CategoryService.list(), {
    detail: {
        summary: "List all Categories",
    },
    response: t.Array(CategoryReadDTO),
});
