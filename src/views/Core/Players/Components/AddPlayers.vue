<template>
  <div class="space-y-5">
    <InputVue :label="'Nombre'" :placeholder="'Nombre'" />
    <InputVue
      :label="'Apuesta minima aceptada'"
      :placeholder="'Apuesta minima'"
    />
    <InputVue
      :label="'Apuesta maxima aceptada'"
      :placeholder="'Apuesta Maxima'"
    />

    <div class="flex space-x-2">
      <ButtonVue :label="'Guardar'" />
      <ButtonVue :label="'Cancelar'" :color1="false" />
    </div>
  </div>
</template>

<script>
import InputVue from "@/components/Input/Input.vue";
import ButtonVue from "@/components/Button/Button.vue";
export default {
  name: "add-operator",
  components: {
    InputVue,
    ButtonVue,
  },
};
</script>
