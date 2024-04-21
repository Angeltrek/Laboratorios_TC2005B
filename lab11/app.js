const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoutes.js");
const resourcesRoutes = require("./routes/resourcesRoutes.js");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(formRoutes);

app.use(resourcesRoutes);

app.use((request, response, next) => {
  response.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
