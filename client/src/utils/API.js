import axios from "axios";

export default {

    // Get all EMC records
    getEMCs: function () {
        return axios.get("/api/emcs");
    },

    // Gets a record of EMCs with a given id
    getEMC: function (id) {
        return axios.get("/api/emcs/" + id)
    },

    // Deletes the EMCs with the given id
    deleteEMC: function (id) {
        return axios.delete("/api/emcs/" + id);
    },

    // Saves a EMC to the database
    saveEMC: function (EMCData) {
        return axios.post("/api/emcs", EMCData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` }
        });
    }
}