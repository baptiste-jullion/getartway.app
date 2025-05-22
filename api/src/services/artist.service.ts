import { db } from "#database";

export class ArtistService {
    static async list() {
        return await db.artist.findMany();
    }
}
