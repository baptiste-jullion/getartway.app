import { faker } from "@faker-js/faker";
import type { TLocation } from "@getartway/api/dist/dtos/location.dto";
import { Factory } from "fishery";

export const LocationFactory = Factory.define<TLocation>(() => ({
    id: faker.string.uuid(),
    lat: faker.location.latitude(),
    lng: faker.location.longitude(),
    city: faker.location.city(),
    address: faker.location.streetAddress(),
}));
