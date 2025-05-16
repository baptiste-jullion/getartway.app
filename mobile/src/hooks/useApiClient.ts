import { treaty } from "@elysiajs/eden";
import { App } from "@getartway/api";

const client = treaty<App>("http://192.168.1.96:15336");

export default client;
