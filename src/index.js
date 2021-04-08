import Koa from "koa";
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "hello koa";
});

// 监听端口
app.listen(3000);
