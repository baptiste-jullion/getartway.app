import { db } from "#database";
import { Artist, ArtistCategory, Category, Exhibition } from "#models";
import * as yaml from "js-yaml";
import * as fs from "node:fs";

interface FakeData {
    artists: Artist[];
    categories: Category[];
    exhibitions: (Exhibition & { location: [number, number] })[];
    artist_categories: ArtistCategory[];
}

async function main() {
    const file = fs.readFileSync(`${__dirname}/fake-data.yaml`, "utf8");
    const data = yaml.load(file) as FakeData;

    // drop all existing data
    await db.artistCategory.deleteMany({});
    await db.exhibition.deleteMany({});
    await db.artist.deleteMany({});
    await db.category.deleteMany({});

    const locations: Record<string, [number, number]> = {};
    for (const exhibition of data.exhibitions) {
        exhibition.startDate = new Date(exhibition.startDate);
        exhibition.endDate = new Date(exhibition.endDate);

        locations[exhibition.id] = exhibition.location;
        // @ts-expect-error Location will be set later cause Prisma doesn't support this type
        delete exhibition.location;
    }

    await db.artist.createMany({
        data: data.artists,
    });

    await db.category.createMany({
        data: data.categories,
    });

    await db.exhibition.createMany({
        data: data.exhibitions,
    });

    for (const exhibitionId of Object.keys(locations)) {
        await db.$executeRaw`
            UPDATE "Exhibition"
            SET location = ST_SetSRID(
                    ST_MakePoint(${locations[exhibitionId][0]}, ${locations[exhibitionId][1]}),
                    4326
                           )
            WHERE id = ${exhibitionId}::uuid
        `;
    }

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
