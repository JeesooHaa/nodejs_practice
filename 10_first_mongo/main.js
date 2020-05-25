const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://localhost:27017",
    dbName = "recipe_db";

MongoDB.connect(dbURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
    .find()
    .toArray((error, data) => {
        if (error) throw error;
        console.log(data);
    });
    db.collection("contacts")
    .insert({
        name: "Jeesoo Haa",
        emali: "js@haa.kr"
    }, (error, db) => {
        if (error) throw error;
        console.log(db);
    });
});