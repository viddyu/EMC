const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emcSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: {type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: false },
    bloodType: String,
    heartRate: { type: String, required: true },
    breathRate: { type: String, required: true },
    bloodPressure: { type: String, required: true },
    notes: String,
    date: { type: Date, default: Date.now }
});

const EMC = mongoose.model("EMC", emcSchema);

module.exports = EMC;