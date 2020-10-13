const express = require("express");
const router = require("./routes/routerCatalogo");

const app = express();

const routerCatalogo = require("./routes/routerCatalogo");

//Middleware

app.use(express.json());
app.use("/catalogo", routerCatalogo);

//rutas
app.get("/", (req, resp) => {
  resp.send("Hola");
});

//servidor
app.listen(3000, () => {
  console.log("El servidor esta arriba ");
});
