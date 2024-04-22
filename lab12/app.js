const express = require("express");
const app = express();
const homeRoutes = require("./routes/homeRoutes");
const cartRoutes = require("./routes/cartRoutes");
const loginRoutes = require("./routes/loginRoutes");
const clientRoutes = require("./routes/clientServicesRoutes");
const path = require("path");
const PORT = 3005;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRoutes);
app.use("/cart", cartRoutes);
app.use("/login", loginRoutes);
app.use("/client-services", clientRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
