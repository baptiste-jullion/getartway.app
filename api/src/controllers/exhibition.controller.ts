import { ExhibitionListDTO } from "#dtos/exhibition.dto";
import { ExhibitionService } from "#services/exhibition.service";
import { Elysia, t } from "elysia";

export const ExhibitionController = new Elysia({
    prefix: "/exhibitions",
    tags: ["Exhibitions"],
}).get("/", () => ExhibitionService.list(), {
    detail: {
        summary: "List all Exhibitions",
    },
    response: t.Array(ExhibitionListDTO),
});
