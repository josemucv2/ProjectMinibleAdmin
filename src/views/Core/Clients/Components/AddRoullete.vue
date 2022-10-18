<template>
  <div class="add-client-container space-y-6">
    <div class="flex space-x-2 w-full">
      <InputVue :label="'Ruleta'" :placeholder="'Ruleta'" class="w-1/2" />
      <InputVue :label="'Pleno'" :placeholder="'Pleno'" class="w-1/2" />
    </div>

    <div class="flex space-x-2 w-full">
      <InputVue
        class="w-1/2"
        :label="'Semi Pleno'"
        :placeholder="'Semi Pleno'"
      />
      <InputVue class="w-1/2" :label="'calle'" :placeholder="'calle'" />
    </div>

    <div class="flex space-x-2 w-full">
      <InputVue class="w-1/2" :label="'Cuadro'" :placeholder="'Cuadro'" />
      <InputVue class="w-1/2" :label="'Linea'" :placeholder="'Linea'" />
    </div>

    <div class="flex space-x-2 w-full">
      <InputVue class="w-1/2" :label="'Columna'" :placeholder="'Columna'" />
      <InputVue class="w-1/2" :label="'Docena'" :placeholder="'Docena'" />
    </div>

    <div class="flex space-x-2 w-full">
      <InputVue
        class="w-1/2"
        :label="'Chance Simple'"
        :placeholder="'Chance Simple'"
      />
      <InputVue class="w-1/2" :label="'Cubre'" :placeholder="'Cubre'" />
    </div>

    <div class="flex space-x-2 w-full">
      <InputVue
        class="w-1/2"
        :label="'Duracion de ronda'"
        :placeholder="'Duracion de ronda'"
        :disabled="true"
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

  methods: {
    canceled() {
      this.$emit("canceled");
    },

    addClient() {
      this.notification("primary", "No disponible");
      this.$emit("canceled");
    },
  },
};
</script>

<style scoped lang="scss">
.add-client-container {
  width: 800px;
}
</style>
