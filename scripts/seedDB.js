const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/EMCdb",
    {
        useMongoClient: true
    }
);

const emcSeed = [
    {
        firstName: "Test",
        lastName: "Test",
        age: "0",
        bloodType: "0",
        heartRate: "0",
        breathRate: "0",
        bloodPressure: "0",
        notes: "Test"
    }, {
        firstName: "Test 2",
        lastName: "Test 2",
        age: "1",
        bloodType: "1",
        heartRate: "1",
        breathRate: "1",
        bloodPressure: "1",
        notes: "Test 2"
    }
];

db.EMC
    .remove({})
    .then(() => db.EMC.collection.insertMany(emcSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });