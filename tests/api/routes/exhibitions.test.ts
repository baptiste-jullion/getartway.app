import { treaty } from "@elysiajs/eden";
import type { App } from "@getartway/api";
import { describe, expect, it } from "bun:test";

const client = treaty<App>(Bun.env.API_URL);

describe("GET /api/exhibition", async () => {
    // beforeEach(async () => {
    //     await db.exhibition.deleteMany({});
    //     await db.exhibition.createMany({
    //         data: ExhibitionFactory.buildList(20),
    //     });
    // });

    it("should return a list of exhibitions", async () => {
        const response = await client.api.exhibitions.get();

        expect(response.status).toEqual(200);
    });
});
