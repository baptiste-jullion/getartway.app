import { treaty } from "@elysiajs/eden";
import type { App } from "@getartway/api";
import { describe, expect, it } from "bun:test";

const client = treaty<App>(Bun.env.API_URL);

describe("API connection", () => {
    it("should be able to connect to the API", async () => {
        const response = await client.health.get();
        expect(response.status).toBe(200);
        expect(response.data).toEqual("OK");
    });
});
