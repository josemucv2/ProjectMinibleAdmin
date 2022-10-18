import Vue from "vue";

const getAllOperators = (template) => {
    return new Promise((resolve, reject) => {
        Vue.axios
            .get(`/operators`, template)
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const getOperatortById = (template) => {
    return new Promise((resolve, reject) => {
        Vue.axios
            .get(`/operators/${template._id}`, template)
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {
    getOperatortById,
    getAllOperators,
};