declare module "bun" {
    interface Env<
        API_PROTOCOL extends "http" | "https",
        API_PORT extends number,
        API_HOST extends `${number}.${number}.${number}.${number}`,
    > {
        DB_HOST: string;
        DB_PORT: number;
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;

        DB_URL: string;
        SHADOW_DATABASE_URL: string;

        API_PROTOCOL: API_PROTOCOL;
        API_PORT: API_PORT;
        API_HOST: API_HOST;
        API_URL: `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

        MAPBOX_PUBLIC_KEY: string;
    }
}
