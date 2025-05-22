import { t } from "elysia";

const CategoryDTO = t.Object({
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

    createdAt: t.Date({
        examples: [new Date()],
    }),
    updatedAt: t.Date({
        examples: [new Date()],
    }),
});

export const CategoryReadDTO = CategoryDTO;
export type TCategory = typeof CategoryDTO.static;
