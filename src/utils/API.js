import axios from "axios";

export default {

    // Get all vital records
    getVitals: function () {
        return axios.get("/api/vitals")
    },

    // Gets a record of vitals with a given id
    getVital: function () {
        return axios.get("/api/vitals")
    },

    // Deletes the vitals with the given id
    deleteVital: function (id) {
        return axios.delete("/api/vitals/" + id);
    },

    // Saves a vital to the database
    saveVital: function (vitalData) {
        return axios.post("/api/vitals", vitalData);
    }

}