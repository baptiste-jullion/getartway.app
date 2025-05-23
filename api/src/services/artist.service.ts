import { db } from "#database";

export class ArtistService {
    static async list() {
        const results = await db.artist.findMany();

        return results.map((artist) => ({
            ...artist,
            cover: `${Bun.env.API_URL}/api/medias/${artist.image}`,
        }));
    }
}
