import {
    ExhibitionFiltersDTO,
    ExhibitionListDTO,
    ExhibitionReadDTO,
} from "#dtos/exhibition.dto";
import { ExhibitionService } from "#services/exhibition.service";
import { Elysia, t } from "elysia";

export const ExhibitionController = new Elysia({
    prefix: "/exhibitions",
    tags: ["Exhibitions"],
})
    .get("/", ({ query }) => ExhibitionService.list(query), {
        detail: {
            summary: "List all Exhibitions",
        },
        response: t.Array(ExhibitionListDTO),
        query: ExhibitionFiltersDTO,
    })
    .get("/:id/", ({ params }) => ExhibitionService.retrieve(params.id), {
        detail: {
            summary: "Retrieve an Exhibition by ID",
        },
        response: ExhibitionReadDTO,
        params: t.Pick(ExhibitionReadDTO, ["id"]),
    });
