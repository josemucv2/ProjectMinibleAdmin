import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth/auth.js";
import users from "./users/users.js";
import routes from "./routes/routes";
import platform from "./platform/platform.js";
import clients from "./clients/clients"
import operators from "./operators/operators"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    routes,
    users,
    platform,
    clients,
    operators
  },
  plugins: [createPersistedState()],
});