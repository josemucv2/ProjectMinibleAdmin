import authAPI from "./authAPI";

const LOGIN_TO = (context, payload) => {
  return new Promise((resolve, reject) => {
    authAPI
      .loginAPI(payload)
      .then((data) => {
        context.commit("SET_AUTH_STATE", data.token);
        context.commit("SET_USER_INFO", data.user);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  LOGIN_TO,
};