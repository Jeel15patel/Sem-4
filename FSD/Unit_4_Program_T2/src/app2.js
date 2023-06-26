const expr = require("express");

const app = expr();

const path = require("path");

const staticPath = path.join(__dirname, "../public");

app.use(expr.static(staticPath));

app.listen(9999, () => {
  console.log("Server Running");
});
