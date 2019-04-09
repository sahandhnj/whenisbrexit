const Koa = require("koa");
const app = new Koa();
const route = require("koa-route");
const serve = require("koa-static");
const render = require("koa-ejs");
const path = require("path");

render(app, {
    root: path.join(__dirname, "../views"),
    layout: "template",
    viewExt: "ejs",
    cache: false,
    debug: false
});
app.use(serve(path.join(__dirname, "../assets")));

app.use(
    route.get("/", async ctx =>{
        await ctx.render("index",  {
            data: {
                brexitDate: "APRIL 12th, 2019"
            }
        });
    })
);

app.listen(3001);
