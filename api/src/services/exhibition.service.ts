import { db } from "#database";

export class ExhibitionService {
    static async list() {
        return db.exhibition.findMany({
            select: {
                id: true,
                title: true,
                cover: true,
                location: true,
            },
        });
    }
}
