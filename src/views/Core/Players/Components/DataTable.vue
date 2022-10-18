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
          <vs-td class="w-10"> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>
          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>

          <vs-td> sin informacion </vs-td>
          <vs-td> sin informacion </vs-td>
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
