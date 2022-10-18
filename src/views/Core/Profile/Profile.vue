<template>
  <ContainerVue :Title="'Perfil'">
    <div class="flex space-x-5">
      <div class="info-user space-y-6 mt-5">
        <div class="flex flex-col items-center">
          <img src="@/assets/image/IconProfile.png" width="125px" />
        </div>
        <hr />
        <InfoVue
          :title="'Nombre:'"
          :detail="GET_USER_INFO.name"
          :button="false"
        />
        <InfoVue
          :title="'Apellido:'"
          :detail="GET_USER_INFO.lastName"
          :button="false"
        />
        <InfoVue
          :title="'email:'"
          :detail="GET_USER_INFO.email"
          :button="false"
        />
        <InfoVue
          :title="'Fecha de creacion:'"
          :detail="GET_USER_INFO.createdAt | dateFormat"
          :button="false"
        />
      </div>
      <div class="info-user space-y-6 mt-5">
        <div class="flex flex-col items-center">
          <img src="@/assets/image/IconProfile.png" width="125px" />
        </div>
        <hr />
        <div class="space-y-6 flex flex-col justify-center items-center">
          <InputVue
            :type="'password'"
            :label="'Ingrese nueva contraseña'"
            class="w-4/5"
          />
          <InputVue
            :type="'password'"
            :label="'Repita su contraseña'"
            class="w-4/5"
          />
        </div>

        <div class="w-full flex justify-center">
          <ButtonVue
            :label="'Actualizar'"
            class="w-4/5"
            @action="updatePassword"
          />
        </div>
      </div>
    </div>
  </ContainerVue>
</template>

<script>
import ContainerVue from "@/layouts/Container/Container.vue";
import InfoVue from "@/components/Info/Info.vue";
import InputVue from "@/components/Input/Input.vue";
import ButtonVue from "@/components/Button/Button.vue";
import notification from "@/mixins/notifications";

import { mapGetters } from "vuex";
export default {
  mixins: [notification],

  name: "Profile-admin",
  components: {
    ContainerVue,
    InfoVue,
    InputVue,
    ButtonVue,
  },

  computed: {
    ...mapGetters("auth", ["GET_USER_INFO"]),
  },

  methods: {
    updatePassword() {
      this.notification("primary", "No se puede actualizar...");
    },
  },
};
</script>
<style scoped lang="scss">
.info-user {
  width: 50%;
  background: rgba(255, 255, 255, 0.404);
  border-radius: 5px;
  padding: 10px;
}
</style>
