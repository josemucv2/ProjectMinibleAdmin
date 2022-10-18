<template>
  <div class="side-container flex">
    <div class="side-nav" :class="{ lowWidth: showNav === false }">
      <div class="mt-4 h-5 flex justify-between mx-5">
        <img src="@/assets/image/logo-dark.png" v-if="showNav" />
        <img
          src="@/assets/Icon/LineSideNav.svg"
          @click="changeNav"
          class="cursor-pointer"
        />
      </div>

      <div class="items-nav flex flex-col justify-between">
        <div class="space-y-3 pt-10 pl-4">
          <div v-for="(element, index) in GET_ROUTE" :key="index">
            <div
              class="flex space-x-3 cursor-pointer"
              @click="goToRoute(element)"
            >
              <img
                :src="require(`../../assets/Icon/${element.icon}.svg`)"
                width="20"
                alt=""
              />
              <div v-if="showNav" class="text-label-nav">
                {{ element.label }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex pl-4 cursor-pointer space-x-2 items-center"
          @click="goLogout"
        >
          <img src="@/assets/Icon/Logout.svg" width="20px" />
          <p v-if="showNav" class="text-label-nav">Cerrar sesion</p>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="profile-side flex flex-col">
        <div
          class="flex space-x-3 mr-5 justify-end h-full items-center cursor-pointer"
          @click="goToProfile"
        >
          <img src="@/assets/Icon/UserProfileIcon.svg" width="30" />
          <div class="flex flex-col">
            <div>{{ GET_USER_INFO.name }}</div>
            <span class="text-view">Ver perfil</span>
          </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import notification from "@/mixins/notifications.js";

export default {
  mixins: [notification],

  name: "side-Nav",
  computed: {
    ...mapGetters("routes", ["GET_ROUTE"]),
    ...mapGetters("auth", ["GET_USER_INFO"]),
  },

  data() {
    return {
      showNav: true,
    };
  },
  mounted() {
    this.$store.commit("routes/SET_ROUTES");
  },

  methods: {
    goToRoute(value) {
      this.$router.push({ name: value.name });
    },

    goLogout() {
      this.$router.push({ name: "login" }).then(() => {
        this.notification("primary", "Sesion cerrada");
      });
    },

    changeNav() {
      this.showNav = !this.showNav;
    },

    goToProfile() {
      this.$router.push({ name: "Profile" });
    },
  },
};
</script>

<style scoped lang="scss">
.text-view {
  font-size: 10px;
}
.side-container {
  width: 100%;
}

.text-label-nav {
  font-size: 15px;
  font-weight: 500;
}

.profile-side {
  width: 100%;
  height: 49px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.37);
}

.items-nav {
  width: 100%;
  height: calc(100vh - 50px);
}
.lowWidth {
  width: 4% !important;
}
.side-nav {
  width: 15%;
  height: 100%;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.37);
}
</style>
