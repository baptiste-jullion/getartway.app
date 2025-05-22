import { t } from "elysia";

const LocationDTO = t.Object({
    id: t.String({ format: "uuid" }),
    lat: t.Number({ format: "float", examples: [45.900002] }),
    lng: t.Number({ format: "float", examples: [6.1252859] }),
    city: t.String({ maxLength: 255, examples: ["Annecy"] }),
});

export const LocationReadDTO = LocationDTO;
export type TLocation = typeof LocationDTO.static;
