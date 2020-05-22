const  express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express(),
    homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);

app.get("/name/:myName", homeController.respondWithName);

app.listen(app.get("port"));