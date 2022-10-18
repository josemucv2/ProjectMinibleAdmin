import clientsApi from "./clientsApi";

const GET_CLIENTS = (context, payload) => {
  return new Promise((resolve, reject) => {
    clientsApi
      .getAllClients(payload)
      .then((data) => {
        context.commit("SET_CLIENTS", data.clients);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const GET_CLIENT_BY_ID = (context, payload) => {
  return new Promise((resolve, reject) => {
    clientsApi
      .getclientById(payload)
      .then((data) => {
        context.commit("SET_CLIENT_BY_ID", data.client);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const GET_ADD_CLIENT = (context, payload) => {
  return new Promise((resolve, reject) => {
    clientsApi
      .getAddCliente(payload)
      .then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
  })
}
const GET_ELIMINATE_CLIENT = (context, payload) => {
  return new Promise((resolve, reject) => {
    clientsApi
      .deleteClient(payload)
      .then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
  })
}

const GET_EDIT_CLIENT = (context, payload) => {
  return new Promise((resolve, reject) => {
    clientsApi
      .editClient(payload)
      .then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
  })
}

export default {
  GET_CLIENTS,
  GET_CLIENT_BY_ID,
  GET_ADD_CLIENT,
  GET_ELIMINATE_CLIENT,
  GET_EDIT_CLIENT
};