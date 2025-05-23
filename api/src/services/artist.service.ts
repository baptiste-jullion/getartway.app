import { db } from "#database";

export class ArtistService {
    static async list() {
        const results = await db.artist.findMany();

        return results.map((artist) => ({
            ...artist,
            image: `${Bun.env.API_URL}/api/medias/${artist.image}`,
        }));
    }
}
