const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router");
const pruebaRouter = require("./routers/prueba-router");

const app = express();

app.listen(3001, () => {
  console.log("El sv anda");
});

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);
app.use(pruebaRouter);
