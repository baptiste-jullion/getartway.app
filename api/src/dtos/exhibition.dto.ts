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
    }),
    isReviewed: t.Boolean({ default: false }),
    website: t.String(),

    category: t.Object({
        id: t.String({ format: "uuid" }),
        label: t.String(),
        description: t.String(),
    }),

    createdAt: t.Date({
        examples: [new Date()],
    }),
    updatedAt: t.Date({
        examples: [new Date()],
    }),
});

export type TExhibition = typeof ExhibitionDTO.static;

export const ExhibitionListDTO = t.Pick(ExhibitionDTO, [
    "id",
    "title",
    "cover",
    "location",
]);

export type TExhibitionList = typeof ExhibitionListDTO.static;
