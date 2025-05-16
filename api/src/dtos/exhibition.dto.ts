import { t } from "elysia";

const ExhibitionDTO = t.Object({
    id: t.String({ format: "uuid" }),
    title: t.String({ maxLength: 255 }),
    description: t.String(),
    startDate: t.Date({
        examples: [new Date()],
    }),
    endDate: t.Date({
        examples: [new Date()],
    }),
    cover: t.String(),
    price: t.Number(),
    location: t.Object({
        id: t.String({ format: "uuid" }),
        lat: t.Number({ format: "float", examples: [45.900002] }),
        lng: t.Number({ format: "float", examples: [6.1252859] }),
        city: t.String({ maxLength: 255, examples: ["Annecy"] }),
    }),
    isReviewed: t.Boolean({ default: false }),
    website: t.String(),

    artists: t.Array(
        t.Object({
            id: t.String({ format: "uuid" }),
            name: t.String({ maxLength: 255 }),
            image: t.String(),
        }),
    ),

    category: t.Object({
        id: t.String({ format: "uuid" }),
        label: t.String(),
        description: t.String(),
        fgColor: t.String(),
        bgColor: t.String(),
        icon: t.UnionEnum([
            "Fashion",
            "GraphicArt",
            "Interactive",
            "Photo",
            "Sculpture",
            "Sound",
            "StreetArt",
            "Video",
            "Virtual",
        ]),
    }),

    createdAt: t.Date({
        examples: [new Date()],
    }),
    updatedAt: t.Date({
        examples: [new Date()],
    }),
});

export const ExhibitionReadDTO = ExhibitionDTO;

export type TExhibition = typeof ExhibitionDTO.static;

export const ExhibitionListDTO = t.Pick(ExhibitionDTO, [
    "id",
    "title",
    "cover",
    "location",
]);

export type TExhibitionList = typeof ExhibitionListDTO.static;
