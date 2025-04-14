declare module "bun" {
    interface Env {
        DB_HOST: string;
        DB_PORT: number;
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;

        DB_URL: string;
        SHADOW_DATABASE_URL: string;

        API_PORT: number;
    }
}
