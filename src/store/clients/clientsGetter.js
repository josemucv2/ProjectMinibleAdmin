const GET_CLIENTS = (state) => {
  return state.clients;
};

const GET_CLIENT_BY_ID = (state) => {
  return state.client;
};
export default {
  GET_CLIENTS,
  GET_CLIENT_BY_ID,
};
