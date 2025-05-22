import { ArtistReadDTO } from "#dtos/artist.dto";
import { ArtistService } from "#services/artist.service";
import { Elysia, t } from "elysia";

export const ArtistController = new Elysia({
    prefix: "/artists",
    tags: ["Artists"],
}).get("/", () => ArtistService.list(), {
    detail: {
        summary: "List all Artists",
    },
    response: t.Array(ArtistReadDTO),
});
