import { CategoryFactory } from "./category.factory.ts";
import { LocationFactory } from "./location.factory.ts";
import { faker } from "@faker-js/faker";
import type { TExhibition } from "@getartway/api/dist/dtos/exhibition.dto";
import { Factory } from "fishery";

export const ExhibitionFactory = Factory.define<TExhibition>(() => ({
    artists: [],
    category: CategoryFactory.build(),
    cover: faker.string.uuid(),
    createdAt: faker.date.recent(),
    description: faker.lorem.paragraph(2),
    endDate: faker.date.future(),
    id: faker.string.uuid(),
    isReviewed: faker.datatype.boolean(),
    location: LocationFactory.build(),
    medias: [],
    price: faker.number.int({ min: 0, max: 100 }),
    startDate: faker.date.past(),
    title: faker.lorem.sentence({ min: 3, max: 8 }),
    updatedAt: faker.date.recent(),
    website: faker.internet.url(),
}));
