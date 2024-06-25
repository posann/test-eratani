const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const routeData = require("./routes/data.router");
const controller = require("./controllers/data.controller");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", controller.index);

app.use("/api", routeData);

app.listen(port, () => console.log(`Berjalan pada http://localhost:${port}`));
