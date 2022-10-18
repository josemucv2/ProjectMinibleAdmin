<template>
  <div class="add-client-container space-y-6">
    <div class="flex space-x-2 w-full">
      <InputVue
        :label="'Nombre'"
        :placeholder="'Nombre'"
        class="w-1/2"
        @value="name = $event"
      />
      <InputVue
        :label="'Logo'"
        :type="'file'"
        class="w-1/2"
        @value="logo = $event"
      />
    </div>
    <div class="flex space-x-2 w-full">
      <InputVue
        class="w-1/2"
        :label="'URL para autenticación'"
        :placeholder="'URL para autenticación'"
        @value="endpointAuth = $event"
      />
      <InputVue
        class="w-1/2"
        :label="'URL para acción de generar apuesta'"
        :placeholder="'URL para acción de generar apuesta'"
        @value="endpointBet = $event"
      />
    </div>
    <div class="flex space-x-2 w-full">
      <InputVue
        class="w-1/2"
        :label="'URL para acción de ganar'"
        :placeholder="'URL para acción de ganar'"
        @value="endpointWin = $event"
      />
      <InputVue
        class="w-1/2"
        :label="'URL para realizar rollback de una operación'"
        :placeholder="'URL para realizar rollback de una operación'"
        @value="endpointRollback = $event"
      />
    </div>

    <div class="flex space-x-2 w-full">
      <ButtonVue :label="'Guardar'" class="w-1/2" @action="addClient" />
      <ButtonVue
        :label="'Cancelar'"
        :color1="false"
        class="w-1/2"
        @action="canceled"
      />
    </div>
  </div>
</template>

<script>
import ButtonVue from "@/components/Button/Button.vue";
import InputVue from "@/components/Input/Input.vue";
import notification from "@/mixins/notifications";
export default {
  mixins: [notification],
  name: "add-cliente",
  components: {
    InputVue,
    ButtonVue,
  },

  data() {
    return {
      name: "",
      logo: "",
      endpointAuth: "",
      endpointBet: "",
      endpointRollback: "",
      endpointWin: "",
    };
  },

  methods: {
    canceled() {
      this.$emit("canceled");
    },

    validation() {
      if (
        this.name === "" ||
        this.logo === "" ||
        this.endpointAuth === "" ||
        this.endpointBeta === "" ||
        this.endpointWin === "" ||
        this.endpointRollback === "" ||
        this.endpointWin === ""
      ) {
        this.notification("primary", "Faltan campos por llenar");
        return true;
      } else {
        return false;
      }
    },

    addClient() {
      const validation = this.validation();

      if (validation) {
        return;
      }
      const loading = this.$vs.loading({
        text: "Agregando cliente",
      });

      const body = {
        name: this.name,
        logo: this.logo,
        endpointAuth: this.endpointAuth,
        endpointBet: this.endpointBet,
        endpointRollback: this.endpointRollback,
        endpointWin: this.endpointWin,
      };
      this.$store
        .dispatch("clients/GET_ADD_CLIENT", body)
        .then(() => {
          loading.close();
          this.notification("primary", "cliente agregado con exito");
          this.$store.dispatch("clients/GET_CLIENTS");
          this.$emit("canceled");
        })
        .catch(() => {
          loading.close();
          this.$emit("canceled");

          this.$store.dispatch("clients/GET_CLIENTS");
        });
    },
  },
};
</script>

<style scoped lang="scss">
.add-client-container {
  width: 900px;
}
</style>
