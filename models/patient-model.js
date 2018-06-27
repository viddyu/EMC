
module.exports = function(sequelize, DataTypes) {
 
var Patient = sequelize.define("Patient", {
    // Model the patient
    first_name: DataTypes.STRING,
    last_name:  DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.BOOLEAN
  });

  Patient.associate = function(models) {
    // Associating Patient with Vitals
    // When an Patient is deleted, also delete any associated Vitals
    Patient.hasMany(models.Vitals, {
      onDelete: "cascade"
    });
  };

  return Patient;
};




