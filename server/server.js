const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const fs = require("fs");
const path = require("path");

const PORT = 8080;
const app = new Koa();
const router = new Router();

app.use(bodyparser());

router.get("/data", (ctx) => {
  ctx.body = { baz: "baz!", bar: 1234, hello: "world!!" };
});

router.get("/instruction", (ctx) => {
  const instruction = fs.readFileSync(
    path.join(__dirname + "/instruction.json")
  );
  ctx.body = JSON.parse(instruction);
});

app.use(router.routes());
app.listen(PORT, () => {
  console.log(`Server run on ${PORT} port`);
});
