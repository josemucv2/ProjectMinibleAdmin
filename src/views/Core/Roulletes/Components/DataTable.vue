<template>
  <div class="center examplex">
    <vs-table striped>
      <template #thead>
        <vs-tr class="space-x-5">
          <vs-th v-for="(element, index) in thead" :key="index">
            {{ element }}
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in items" :data="tr">
          <vs-td>
            {{ tr.name }}
          </vs-td>
          <vs-td> sin informacion </vs-td>
          <vs-td> sin informacion </vs-td>
          <vs-td @click="viewsRoullet(tr)" class="cursor-pointer">
            Ver ruletas</vs-td
          >

          <vs-td @click="viewDetails(tr)" class="cursor-pointer">
            Ver Detalles
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: "data-table",

  props: {
    thead: {
      type: Array,
    },

    items: {
      type: Array,
    },
  },

  methods: {
    viewsRoullet(value) {
      this.$emit("viewsRoullet", value);
    },
    viewDetails(value) {
      const loading = this.$vs.loading({
        text: "Cargando...",
      });
      const body = {
        _id: value._id,
      };
      this.$store
        .dispatch("operators/GET_OPERATOR_BY_ID", body)
        .then(() => {
          loading.close();
          this.$router.push({
            name: "RoulleteDetail",
            params: { id: value._id },
          });
        })
        .catch(() => {
          loading.close();
        });
    },
  },
};
</script>

<style lang="scss">
.vs-table__thead {
  border-radius: none;
}

.vs-table__thead .vs-table__th:first-child {
  border-radius: none;
}

.vs-table__td:first-child {
  border-radius: 0px;
}

.vs-table__td:last-child {
  border-radius: 0px;
}
</style>
