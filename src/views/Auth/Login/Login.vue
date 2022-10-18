<template>
  <div class="login-container p-2">
    <img src="@/assets/image/logo-dark.png" width="150px" />

    <div class="section-login mt-5 p-10">
      <p class="text-welcome mb-5">¡Bienvenido!</p>
      <div class="box-inputs space-y-5">
        <InputVue
          :label="'Nombre de usuario'"
          :placeholder="'Ingrese su usuario'"
          :type="'text'"
          @value="userName = $event"
        />
        <InputVue
          :label="'Contraseña'"
          :placeholder="'Ingrese su contraseña'"
          :type="'password'"
          @value="password = $event"
        />
        <ChecBoxVue :label="'Recuerdame'" />
        <ButtonVue :label="'Ingresar'" @action="Login" />
      </div>
    </div>
  </div>
</template>

<script>
import InputVue from "@/components/Input/Input.vue";
import ButtonVue from "@/components/Button/Button.vue";
import notification from "@/mixins/notifications.js";
import ChecBoxVue from "@/components/CheckBox/ChecBox.vue";
export default {
  mixins: [notification],
  name: "LoginView",

  components: {
    InputVue,
    ButtonVue,
    ChecBoxVue,
  },

  data() {
    return {
      userName: "",
      password: "",
    };
  },

  methods: {
    Login() {
      if (this.validation()) {
        return;
      }

      const loading = this.$vs.loading({
        text: "Cargando..",
      });

      const body = {
        userName: this.userName,
        password: this.password,
      };

      this.$store
        .dispatch("auth/LOGIN_TO", body)
        .then(() => {
          this.$router.push({ name: "Home" });
          loading.close();
          this.notification("primary", "Bienvenido a MINIBLE");
        })
        .catch(() => {
          loading.close();
        });
    },

    validation() {
      if (this.userName == "" || this.password === "") {
        this.notification("primary", "Faltan campos por llenar");
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: calc(100vh - 75px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-login {
  width: 20%;
  height: 380px;
  background: white;
  border-radius: 9px;
}

.text-welcome {
  text-align: center;
  color: #5b3cc4;
  font-size: 1.125rem;
  font-weight: bold;
}
</style>
