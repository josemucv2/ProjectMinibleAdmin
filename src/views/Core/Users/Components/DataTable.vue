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
          <vs-td>
            {{ tr.lastName }}
          </vs-td>
          <vs-td>
            {{ tr.userName }}
          </vs-td>
          <vs-td>
            {{ tr.email }}
          </vs-td>
          <vs-td>
            {{ tr.currencies === [] ? tr.currencies : "Sin Currencies" }}
          </vs-td>
          <vs-td>
            {{ tr.client ? tr.client.name : "Sin Informacion" }}
          </vs-td>
          <vs-td>
            {{ tr.createdAt | dateFormat }}
          </vs-td>
          <vs-td>
            {{ tr.updateAt | dateFormat }}
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
