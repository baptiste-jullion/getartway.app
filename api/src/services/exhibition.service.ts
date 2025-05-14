import { db } from "#database";

export class ExhibitionService {
    static async list() {
        const results = await db.exhibition.findMany({
            select: {
                id: true,
                title: true,
                cover: true,
                location: true,
            },
        });

        return results.map((exhibition) => ({
            ...exhibition,
            cover: `${Bun.env.API_URL}/api/medias/${exhibition.cover}`,
        }));
    }
}
