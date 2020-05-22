const homeController = require("./controllers/homeController");

const port = 3000, 
    express = require("express"),
    app = express();

// app.get("/", (req, res) => {
//     res.send("Hello, Universe!");
//     console.log(req.params);
//     console.log(req.body);
//     console.log(req.url);
//     console.log(req.query);
// })
// .listen(port, () => {
//     console.log(`The Express.js server has started and is listening on port number: 
//     ${port}`);
// });

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    console.log(req.query);
    // 호출하지 않으면 흐름이 막혀 blocking 현상이 발생한다. 
    next();
});

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
});

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully.");
})

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});