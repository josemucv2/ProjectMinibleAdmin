const SET_CLIENTS = (state, clients) => {
  state.clients = clients;
};

const SET_CLIENT_BY_ID =( state, clientId ) =>{
    state.client = clientId;
}

export default {
  SET_CLIENTS,
  SET_CLIENT_BY_ID
};
