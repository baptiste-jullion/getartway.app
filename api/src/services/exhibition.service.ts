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

    static async retrieve(exhibitionId: string) {
        const results = await db.exhibition.findUnique({
            where: {
                id: exhibitionId,
            },
            include: {
                artists: {
                    include: {
                        artist: true,
                    },
                },
                location: true,
                category: true,
            },
        });

        if (!results) {
            throw new Error("Exhibition not found");
        }

        return {
            ...results,
            cover: `${Bun.env.API_URL}/api/medias/${results.cover}`,
            artists: results.artists.map((artist) => {
                return {
                    ...artist.artist,
                    image: `${Bun.env.API_URL}/api/medias/${artist.artist.image}`,
                };
            }),
            medias: results.medias.map((media) => {
                return `${Bun.env.API_URL}/api/medias/${media}`;
            }),
        };
    }
}
