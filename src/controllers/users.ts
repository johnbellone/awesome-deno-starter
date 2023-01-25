import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const router = new Router();

router.get("/users", (ctx) => {
    ctx.response.status = 501;
});

router.post("/users", (ctx) => {
    ctx.response.status = 501;
});

router.get("/users/:id", (ctx) => {
    ctx.response.status = 501;
});

router.delete("/users/:id", (ctx) => {
    ctx.response.status = 501;
});

router.put("/users/:id", (ctx) => {
    ctx.response.status = 501;
});

router.patch("/users/:id", (ctx) => {
    ctx.response.status = 501;
});

export { router }
