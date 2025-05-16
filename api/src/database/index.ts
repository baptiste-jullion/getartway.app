import EnrichLocationMiddleware from "./middlewares/EnrichLocationMiddleware";
import { PrismaClient } from "#models";

export const db = new PrismaClient();

db.$use(EnrichLocationMiddleware);
