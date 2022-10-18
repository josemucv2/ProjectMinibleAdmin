import usersApi from "./usersApi";

const GET_USERS = (context, payload) => {
  return new Promise((resolve, reject) => {
    usersApi
      .getAllUsers(payload)
      .then((data) => {
        context.commit("SET_USERS",data.users)
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default{
    GET_USERS
}
