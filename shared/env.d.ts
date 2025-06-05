declare module "bun" {
    interface Env {
        NODE_ENV: "development" | "production" | "test";

        DB_PORT: number;
        API_PORT: number;
        WEBSITE_PORT: number;

        API_URL: string;

        MAPBOX_PUBLIC_KEY: `pk.${string}`;
        MAPBOX_SECRET_KEY: `sk.${string}`;

        EAS_TOKEN: string;
    }
}
