import Vue from "vue";

const getAllClients = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get(`/clients`, template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getclientById = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get(`/clients/${template._id}`, template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAddCliente = template => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .post(`/clients`, template)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const deleteClient = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .delete(`/clients/${template._id}`, template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const editClient = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .put(`/clients/${template._id}`, template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getAllClients,
  getclientById,
  getAddCliente,
  deleteClient,
  editClient
};