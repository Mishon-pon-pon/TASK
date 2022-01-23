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
  const instruction = fs.readFileSync(path.join(__dirname + "/places.json"));
  ctx.body = JSON.parse(instruction);
});

router.get("/instruction", (ctx) => {
  const instruction = fs.readFileSync(
    path.join(__dirname + "/instruction.json")
  );
  ctx.body = JSON.parse(instruction);
});

router.get("/admin", (ctx) => {
  const adminHTML = fs.readFileSync(path.join(__dirname + "/admin.html"));
  ctx.type = "html";
  ctx.body = adminHTML;
});

router.post("/admin/instruction", (ctx) => {
  console.log(ctx.request.body.title);
  const data = JSON.parse(fs.readFileSync(__dirname + "/instruction.json"));
  data.push(ctx.request.body);
  fs.writeFileSync(__dirname + "/instruction.json", JSON.stringify(data));
  ctx.status = 200;
  ctx.body = true;
});

app.use(router.routes());
app.listen(PORT, () => {
  console.log(`Server run on ${PORT} port`);
});
