import { treaty } from "@elysiajs/eden";
import { App } from "@getartway/api";
import Constants from "expo-constants";

const client = treaty<App>(Constants.expoConfig?.extra?.API_URL);

export default client;
