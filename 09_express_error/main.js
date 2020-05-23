const  express = require("express"),
    layouts = require("express-ejs-layouts"),
    app = express(),
    homeController = require("./controllers/homeController"),
    errorContorller = require("./controllers/errorController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

// 정적 파일에 접근할 수 있게 한다. 
app.use(express.static("public"));
app.use(layouts);

app.get("/name/:myName", homeController.respondWithName);

// if-else 와 비슷하게 작동하기 때문에 라우트 뒤에 위치해야 한다. 
app.use(errorContorller.logErrors);
app.use(errorContorller.respondNoResourceFound);
app.use(errorContorller.respondInternalError);

app.listen(app.get("port"));