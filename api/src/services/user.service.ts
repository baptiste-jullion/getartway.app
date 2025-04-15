import { db } from "#database";

export class UserService {
    static async list() {
        return db.user.findMany();
    }
}
