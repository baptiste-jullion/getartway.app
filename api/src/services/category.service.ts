import { db } from "#database";

export class CategoryService {
    static async list() {
        return await db.category.findMany();
    }
}
