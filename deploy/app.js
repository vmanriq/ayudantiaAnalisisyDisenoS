const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

//app.use("/category", require("./routes/categoryRoutes"));
app.use("/task", require("./routes/taskRoutes"));
app.use("/category", require("./routes/categoryRoutes"));
app.use("/auth", require("./routes/authRoutes"));

app.listen(
  process.env.PORT || 3000,
  console.log("el servidor esta corriendo en el puerto 3000")
);
