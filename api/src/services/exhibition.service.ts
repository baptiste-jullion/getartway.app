import { db } from "#database";
import { TExhibition } from "#dtos/exhibition.dto";

export class ExhibitionService {
    static async list() {
        return db.$queryRaw<
            Pick<TExhibition, "id" | "title" | "cover" | "location">[]
        >`SELECT "Exhibition"."id",
                 "Exhibition"."title",
                 "Exhibition"."cover",
                 ARRAY[ST_X(location::geometry),
                 ST_Y(location::geometry)] AS location
          FROM "Exhibition" INNER JOIN "Category" C ON C.id = "Exhibition"."categoryId"`;
    }
}
