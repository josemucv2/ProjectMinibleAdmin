import Vue from "vue";
import notification from "@/mixins/notifications.js";

export default {
  mixins: [notification],
  methods: {
    handleError() {
      Vue.axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          const { response = {} } = error;

          this.notification("primary", response.data.msg);

          return Promise.reject(error);
        }
      );
    },
  },
};
