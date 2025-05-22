import { t } from "elysia";

const ArtistDTO = t.Object({
    id: t.String({ format: "uuid" }),
    name: t.String({ maxLength: 255 }),
    image: t.String({ format: "uri" }),
});

export const ArtistReadDTO = ArtistDTO;
export type TArtist = typeof ArtistDTO.static;
