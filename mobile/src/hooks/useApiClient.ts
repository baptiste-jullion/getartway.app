import { treaty } from "@elysiajs/eden";
import { App } from "@getartway/api";

const client = treaty<App>("http://192.168.1.96:2346");

export default client;
