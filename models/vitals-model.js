module.exports = function(sequelize, DataTypes) {
  var Vitals = sequelize.define("Vitals", {
    // Define the model
    patient_id: DataTypes.INTEGER,
    blood_type: DataTypes.STRING,
    heart_rate: DataTypes.INTEGER,
    breath_rate: DataTypes.INTEGER,
    blood_pressure: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    notes: DataTypes.STRING
  });

  return Vitals;
};