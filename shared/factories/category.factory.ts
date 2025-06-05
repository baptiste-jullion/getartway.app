import { faker } from "@faker-js/faker";
import type { TCategory } from "@getartway/api/dist/dtos/category.dto";
import { Factory } from "fishery";

export const CategoryFactory = Factory.define<TCategory>(() => ({
    id: faker.string.uuid(),
    label: faker.helpers.arrayElement([
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
    description: faker.lorem.paragraph(2),
    fgColor: faker.color.rgb(),
    bgColor: faker.color.rgb(),
    icon: faker.helpers.arrayElement([
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
}));
