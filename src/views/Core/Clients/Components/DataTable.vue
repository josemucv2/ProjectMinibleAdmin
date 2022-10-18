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
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage(items, page, max)"
          :data="tr"
          class="cursor-pointer"
        >
          <vs-td>
            {{ tr.name }}
          </vs-td>

          <!-- <vs-td>
            <img :src="tr.logo" alt="" width="20px" />
          </vs-td> -->

          <vs-td>
            {{ tr.token }}
          </vs-td>
          <vs-td>
            {{ tr.status | statusData }}
          </vs-td>
          <vs-td class="effectHove">
            <ButtonVue
              :label="'Ver detalles'"
              class="h-10"
              @action="goDetails(tr)"
            />
          </vs-td>
          <vs-td class="effectHove">
            <ButtonVue
              :label="'Agregar'"
              class="h-10"
              @action="addRoullet(tr)"
            />
          </vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination v-model="page" :length="$vs.getLength(items, max)" />
      </template>
    </vs-table>
  </div>
</template>

<script>
import ButtonVue from "@/components/Button/Button.vue";
export default {
  name: "data-table",
  components: {
    ButtonVue,
  },

  props: {
    thead: {
      type: Array,
    },

    items: {
      type: Array,
    },
  },

  data() {
    return {
      page: 1,
      max: 8,
    };
  },
  methods: {
    goDetails(value) {
      this.$emit("details", value);
    },

    addRoullet(value) {
      this.$emit("addRoullet", value);
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
.vs-table__td {
  max-width: 150px;
  height: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.effectHove {
  width: 100px;
}
</style>
