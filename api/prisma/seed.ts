import { db } from "#database";
import {
    Artist,
    ArtistCategory,
    ArtistExhibition,
    Category,
    Exhibition,
    Location,
} from "#models";
import * as yaml from "js-yaml";
import * as fs from "node:fs";

interface FakeData {
    locations: Location[];
    artists: Artist[];
    exhibitions: Exhibition[];
    artist_categories: ArtistCategory[];
    artist_exhibitions: ArtistExhibition[];
}

interface InitialData {
    categories: Category[];
}

async function main() {
    const file = fs.readFileSync(`${__dirname}/fake-data.yaml`, "utf8");
    const data = yaml.load(file) as FakeData;
    const initialDataFile = fs.readFileSync(
        `${__dirname}/initial-data.yaml`,
        "utf8",
    );
    const initialData = yaml.load(initialDataFile) as InitialData;

    // drop all existing data
    await db.artistCategory.deleteMany({});
    await db.artistExhibition.deleteMany({});
    await db.exhibition.deleteMany({});
    await db.category.deleteMany({});
    await db.artist.deleteMany({});
    await db.location.deleteMany({});

    await db.category.createMany({
        data: initialData.categories,
    });

    await db.location.createMany({
        data: data.locations,
    });

    // await db.artist.createMany({
    // data: data.artists,
    // });

    await db.exhibition.createMany({
        data: data.exhibitions,
    });

    // await db.artistCategory.createMany({
    // data: data.artist_categories,
    // });

    // await db.artistExhibition.createMany({
    // data: data.artist_exhibitions,
    // });
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
