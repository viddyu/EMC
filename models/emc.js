const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emcSchema = new Schema({
    eMT: { type: String },
    shiftDate: { type: String },
    serviceName: { type: String },
    timeIn: { type: String },
    timeOut: { type: String },
    dispatch: { type: String },
    dispositionOutcome: { type: String },
    chiefComplaint: { type: String },
    medical: { type: String },
    trauma: { type: String },
    medication: { type: String },
    pastHistory: { type: String },
    allergies: { type: String },
    locAVPU: { type: String },
    eyesOpen: { type: String },
    bestVerbal: { type: String },
    bestMotor: { type: String },
    airway: { type: String },
    ivIoAccess: { type: String },
    drug: { type: String },
    dose: { type: String },
    route: { type: String },
    mechanismOfInjury: { type: String },
    medicalTrauma: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: false },
    race: { type: String },
    bloodType: String,
    heartRate: { type: String, required: true },
    breathRate: { type: String, required: true },
    bloodPressure: { type: String, required: true },
    medicalCondition: { type: String },
    notes: String,
    date: { type: Date, default: Date.now }
});

const EMC = mongoose.model("EMC", emcSchema);

module.exports = EMC;