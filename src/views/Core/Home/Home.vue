<template>
  <ContainerVue :Title="'Inicio'" class="space-y-5">
    <div>
      <div class="flex w-full space-x-3 mt-5">
        <ButtonVue :label="'Filtrar'" @action="filterRoullete" />
        <ButtonVue :label="'Cancelar'" :color1="false" />
      </div>
      <div class="flex w-full space-x-5 mt-5">
        <InputVue class="w-1/2" :type="'date'" :label="'Desde:'" />
        <InputVue class="w-1/2" :type="'date'" :label="'Hasta:'" />
      </div>
      <div class="flex w-full space-x-5 mt-5">
        <InputVue class="w-1/2" :label="'Operador'" />
        <InputVue class="w-1/2" :label="'Ruleta'" />
      </div>
    </div>
  </ContainerVue>
</template>

<script>
import ContainerVue from "@/layouts/Container/Container.vue";
import InputVue from "@/components/Input/Input.vue";

import ButtonVue from "@/components/Button/Button.vue";

import notification from "@/mixins/notifications";
export default {
  mixins: [notification],
  name: "HomeViews",

  components: {
    ContainerVue,
    InputVue,
    ButtonVue,
  },

  methods: {
    filterRoullete() {
      this.notification("primary", "No disponible ");
    },
  },
};
</script>

<style scoped lang="scss"></style>
