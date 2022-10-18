<template>
  <ContainerVue :Title="'Detalles del cliente'">
    <div class="w-full flex justify-between">
      <div class="w-48 flex items-center">
        <ButtonVue :label="'Atras'" class="w-32 my-5" @action="goBack" />
      </div>
      <div class="w-48 flex justify-end">
        <ButtonVue
          :label="'Desactivar cliente'"
          class="w-38 my-5"
          @action="deleteClient"
        />
      </div>
    </div>
    <div class="detail-container space-y-5">
      <InfoVue
        :title="'Nombre:'"
        :detail="name"
        @action="openDialog(1)"
        @value="name = $event"
      />

      <InfoVue
        :title="'Logo:'"
        :detail="logo"
        @action="openDialog(2)"
        @value="logo = $event"
      />

      <InfoVue
        :title="'Token para validación del cliente:'"
        :detail="GET_CLIENT_BY_ID.token"
        :disabled="true"
      />

      <InfoVue
        :title="'URL para autenticación:'"
        :detail="endpointAuth"
        @action="openDialog(4)"
        @value="endpointAuth = $event"
      />

      <InfoVue
        :title="'URL para acción de generar apuesta:'"
        :detail="endpointBet"
        @action="openDialog(5)"
        @value="endpointBet = $event"
      />

      <InfoVue
        :title="'URL para acción de ganar:'"
        :detail="endpointWin"
        @action="openDialog(6)"
        @value="endpointWin = $event"
      />

      <InfoVue
        :title="'URL para realizar rollback de una operación:'"
        :detail="endpointRollback"
        @action="openDialog(7)"
        @value="endpointRollback = $event"
      />

      <InfoVue
        :title="'Fecha de creación:'"
        :detail="GET_CLIENT_BY_ID.createdAt | dateFormat"
        :disabled="true"
      />

      <InfoVue
        :title="'Ultima vez editado:'"
        :detail="GET_CLIENT_BY_ID.updatedAt | dateFormat"
        :disabled="true"
      />
    </div>

    <ModalsVue
      :showDialog="showDialog"
      :title="'Editar'"
      @close="showDialog = false"
    >
      <div class="flex space-x-10 justify-center items-center">
        <InputVue
          :disabled="disabled"
          :label="editLabel"
          :value="editValue"
          :valueTo="editValueTo"
          @value="editValue = $event"
        />
        <ButtonVue
          :label="'Guardar'"
          class="mt-5"
          :disabled="disabled"
          @action="save(editValue)"
        />
      </div>
    </ModalsVue>
  </ContainerVue>
</template>

<script>
import InfoVue from "@/components/Info/Info.vue";
import ContainerVue from "@/layouts/Container/Container.vue";
import ButtonVue from "@/components/Button/Button.vue";
import ModalsVue from "@/components/Modals/Modals.vue";
import InputVue from "@/components/Input/Input.vue";
import notification from "@/mixins/notifications";

import { mapGetters } from "vuex";
export default {
  mixins: [notification],

  name: "details-clients",
  components: {
    InfoVue,
    ContainerVue,
    ButtonVue,
    ModalsVue,
    InputVue,
  },
  data() {
    return {
      showDialog: false,
      editLabel: "",
      editValue: "",
      editValueTo: "",
      disabled: false,
      name: "",
      endpointAuth: "",
      logo: "",
      endpointBet: "",
      endpointWin: "",
      endpointRollback: "",
      keyValue: 0,
    };
  },
  computed: {
    ...mapGetters("clients", ["GET_CLIENT_BY_ID"]),
  },

  mounted() {
    this.assignedVars();
  },
  methods: {
    assignedVars() {
      this.name = this.GET_CLIENT_BY_ID.name ? this.GET_CLIENT_BY_ID.name : "";
      this.logo = this.GET_CLIENT_BY_ID.logo ? this.GET_CLIENT_BY_ID.logo : "";
      this.endpointAuth = this.GET_CLIENT_BY_ID.endpointAuth
        ? this.GET_CLIENT_BY_ID.endpointAuth
        : "";
      this.endpointBet = this.GET_CLIENT_BY_ID.endpointBet
        ? this.GET_CLIENT_BY_ID.endpointBet
        : "";
      this.endpointRollback = this.GET_CLIENT_BY_ID.endpointRollback
        ? this.GET_CLIENT_BY_ID.endpointRollback
        : "";
      this.endpointWin = this.GET_CLIENT_BY_ID.endpointWin
        ? this.GET_CLIENT_BY_ID.endpointWin
        : "";
    },
    save() {
      const body = {
        _id: this.$route.params.id,
      };
      switch (this.keyValue) {
        case 1:
          body.name = this.editValue;
          break;
        case 2:
          body.logo = this.editValue;
          break;
        case 4:
          body.endpointAuth = this.editValue;
          break;
        case 5:
          body.endpointBet = this.editValue;
          break;
        case 6:
          body.endpointWin = this.editValue;
          break;
        case 7:
          body.endpointRollback = this.editValue;
          break;
      }

      this.$store
        .dispatch("clients/GET_EDIT_CLIENT", body)
        .then(() => {
          this.notification("primary", "Editado");
          this.getClient();
          this.showDialog = false;
        })
        .catch(() => {
          this.showDialog = false;
        });
    },

    getClient() {
      const body = {
        _id: this.$route.params.id,
      };

      this.$store.dispatch("clients/GET_CLIENT_BY_ID", body).then(() => {
        this.assignedVars();
      });
    },
    goBack() {
      this.$router.push({ name: "Clients" });
    },

    deleteClient() {
      if (!this.GET_CLIENT_BY_ID.status) {
        this.notification("primary", "Cliente ya se encuentra inactivo");
        return;
      }

      const loading = this.$vs.loading({
        Text: "Eliminando Cliente",
      });
      const body = {
        _id: this.$route.params.id,
      };
      this.$store
        .dispatch("clients/GET_ELIMINATE_CLIENT", body)
        .then(() => {
          loading.close();
          this.notification("primary", "Cliente Eliminado");
          this.$router.push({ name: "Clients" });
        })
        .catch(() => {
          loading.close();
        });
    },

    openDialog(value) {
      this.showDialog = !this.showDialog;

      switch (value) {
        case 1:
          this.editLabel = "Nombre";
          this.editValueTo = this.name;
          this.disabled = false;
          this.keyValue = value;
          break;
        case 2:
          this.editLabel = "Logo";
          this.editValueTo = this.logo;
          this.disabled = false;
          this.keyValue = value;
          break;
        case 4:
          this.editLabel = "URL para autenticación";
          this.editValueTo = this.endpointAuth;
          this.disabled = false;
          this.keyValue = value;
          break;
        case 5:
          this.editLabel = "URL para acción de generar apuesta";
          this.editValueTo = this.endpointBet;
          this.disabled = false;
          this.keyValue = value;
          break;
        case 6:
          this.editLabel = "URL para acción de ganar";
          this.editValueTo = this.endpointWin;
          this.disabled = false;
          this.keyValue = value;
          break;
        case 7:
          this.editLabel = "URL para realizar rollback de una operación";
          this.editValueTo = this.endpointRollback;
          this.disabled = false;
          this.keyValue = value;
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.detail-container {
  width: 100%;
  background: rgba(255, 255, 255, 0.404);
  border-radius: 5px;
  height: calc(100vh - 250px);
  padding: 25px 50px 50px 50px;
  overflow: auto;
}
</style>
