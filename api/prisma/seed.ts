import { db } from "#database";
import {
    Artist,
    ArtistCategory,
    Category,
    Exhibition,
    Location,
} from "#models";
import * as yaml from "js-yaml";
import * as fs from "node:fs";

interface FakeData {
    locations: Location[];
    artists: Artist[];
    categories: Category[];
    exhibitions: Exhibition[];
    artist_categories: ArtistCategory[];
}

async function main() {
    const file = fs.readFileSync(`${__dirname}/fake-data.yaml`, "utf8");
    const data = yaml.load(file) as FakeData;

    // drop all existing data
    await db.artistCategory.deleteMany({});
    await db.exhibition.deleteMany({});
    await db.artist.deleteMany({});
    await db.location.deleteMany({});
    await db.category.deleteMany({});

    await db.location.createMany({
        data: data.locations,
    });

    await db.artist.createMany({
        data: data.artists,
    });

    await db.category.createMany({
        data: data.categories,
    });

    await db.exhibition.createMany({
        data: data.exhibitions,
    });

    await db.artistCategory.createMany({
        data: data.artist_categories,
    });
}

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });
