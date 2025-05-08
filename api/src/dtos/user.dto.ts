import { t } from "elysia";

export const UserReadDTO = t.Object({
    id: t.String({ format: "uuid" }),
    email: t.String({ format: "email" }),
    firstName: t.Optional(t.Nullable(t.String())),
    registeredAt: t.Date({
        examples: [new Date()],
    }),
    avatar: t.Optional(t.Nullable(t.String())),
    role: t.Optional(t.Nullable(t.String())),
    // location: t.String({ nullable: true }),
});
