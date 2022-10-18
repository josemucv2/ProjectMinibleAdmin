import Vue from "vue";

const getAllUsers = (template) => {
  return new Promise((resolve, reject) => {
    Vue.axios
      .get(`/users`, template)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  getAllUsers,
};
