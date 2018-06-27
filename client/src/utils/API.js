import axios from "axios";

export default {

    // Get all EMC records
    getEMCs: function () {
        return axios.get("/api/EMCs")
    },

    // Gets a record of EMCs with a given id
    getEMC: function (id) {
        return axios.get("/api/EMCs/" + id)
    },

    // Deletes the EMCs with the given id
    deleteEMC: function (id) {
        return axios.delete("/api/EMCs/" + id);
    },

    // Saves a EMC to the database
    saveEMC: function (EMCData) {
        return axios.post("/api/EMCs", EMCData);
    }

}