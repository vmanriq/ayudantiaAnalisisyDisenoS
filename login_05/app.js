const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

//app.use("/category", require("./routes/categoryRoutes"));
app.use("/task", require("./routes/taskRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.listen(3000, console.log("el servidor esta corriendo en el puerto 3000"));
