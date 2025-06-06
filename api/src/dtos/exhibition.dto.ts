import { ArtistReadDTO } from "#dtos/artist.dto";
import { CategoryEnum, CategoryReadDTO } from "#dtos/category.dto";
import { LocationReadDTO } from "#dtos/location.dto";
import { t } from "elysia";

const ExhibitionDTO = t.Object({
    id: t.String({ format: "uuid" }),
    title: t.String({ maxLength: 255 }),
    description: t.String(),
    startDate: t.Nullable(
        t.Date({
            examples: [new Date()],
        }),
    ),
    endDate: t.Nullable(
        t.Date({
            examples: [new Date()],
        }),
    ),
    cover: t.String(),
    price: t.Number(),
    location: LocationReadDTO,
    isReviewed: t.Boolean({ default: false }),
    website: t.String(),

    artists: t.Array(ArtistReadDTO),

    category: CategoryReadDTO,

    createdAt: t.Date({
        examples: [new Date()],
    }),
    updatedAt: t.Date({
        examples: [new Date()],
    }),

    medias: t.Array(t.String()),
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

export const ExhibitionFiltersDTO = t.Object({
    keyword: t.Optional(t.String()),
    city: t.Optional(t.String()),
    category: t.Optional(
        t.Union([t.Undefined(), t.Null(), t.Literal(""), CategoryEnum]),
    ),
    price: t.Optional(t.Number()),
});

export type TExhibitionFilters = typeof ExhibitionFiltersDTO.static;
