declare module "bun" {
    interface Env {
        ENV: "development" | "production";
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;
        API_PROTOCOL: "http" | "https";
        API_HOST: string;
        API_URL: string;
        MAPBOX_PUBLIC_KEY: string;
        MAPBOX_SECRET_KEY: string;
        DB_PORT_ON_HOST: number;
        API_PORT_ON_HOST: number;
    }
}
