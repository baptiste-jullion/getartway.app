import { db } from "#database";
import { TExhibitionFilters } from "#dtos/exhibition.dto";

export class ExhibitionService {
    static async list(filters: TExhibitionFilters) {
        const results = await db.exhibition.findMany({
            select: {
                id: true,
                title: true,
                cover: true,
                location: true,
            },
            where: {
                AND: [
                    {
                        OR: [
                            {
                                title: {
                                    contains: filters.keyword ?? "",
                                    mode: "insensitive",
                                },
                            },
                            {
                                description: {
                                    contains: filters.keyword ?? "",
                                    mode: "insensitive",
                                },
                            },
                        ],
                    },
                    filters.city
                        ? {
                              location: {
                                  city: {
                                      equals: filters.city,
                                      mode: "insensitive",
                                  },
                              },
                          }
                        : {},
                    filters.price !== undefined
                        ? {
                              price: {
                                  lte: filters.price,
                              },
                          }
                        : {},
                    filters.category
                        ? {
                              category: {
                                  icon: filters.category,
                              },
                          }
                        : {},
                ],
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
