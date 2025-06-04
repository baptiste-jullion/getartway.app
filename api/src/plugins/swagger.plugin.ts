import swagger from "@elysiajs/swagger";

export const SwaggerPlugin = swagger({
    path: "/docs",
    documentation: {
        info: {
            title: "Artway API Documentation",
            version: "ALPHA",
            description:
                "API documentation for <a href='https://getartway.app'>Artway</a>. Source code is available on <a href='https://github.com/baptiste-jullion/getartway.app'>GitHub</a>.",
        },
    },
});
