import { t } from "elysia";

export const Timestamps = t.Object({
    createdAt: t.Date({
        examples: [new Date()],
    }),
    updatedAt: t.Date({
        examples: [new Date()],
    }),
});
