const express = require("express"),
    app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    {useNewUrlParser: true}
);
const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// const subscribeSchema = mongoose.Schema({
//     name: String,
//     email: String, 
//     zipCode: Number
// });

// let Subscirber = mongoose.model("Subscriber", subscribeSchema);

const Subscirber = require("./models/subscriber");
const subscribersController = require("./controllers/subscribersController");

// let subscriber1 = new Subscirber({
//     name: "Jon Wexler",
//     email: "jon@wexler.com"
// });

// subscriber1.save((error, savedDocument) => {
//     if (error) console.log(error);
//     console.log(savedDocument);
// });

// Subscirber.create(
//     {
//         name: "Jon W",
//         email: "jon@jon.com"
//     },
//     function (error, savedDocument) {
//         if (error) console.log(error);
//         console.log(savedDocument);
//     }
// );

let myQuery = Subscirber.findOne({
    name: "Jon Wexler"
})
.where("email", /wexler/);
myQuery.exec((error, data) => {
    if (data) console.log(data.name);
}); 

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    // res.send(req.data);
    res.render("subscribers", {subscribers: req.data});
});

app.listen(app.get("port"));