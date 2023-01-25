import { Application } from "oak/mod.ts";
import * as users from "src/controllers/users.ts";

interface ApplicationState { 
    sub: string;
    name: string;
}

const app = new Application<ApplicationState>();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(users.router.routes());
app.use(users.router.allowedMethods());

await app.listen({ port: 8080 });
