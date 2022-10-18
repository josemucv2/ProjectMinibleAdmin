export default {
  methods: {
    filtersData(data, setInfo, value) {
      const info = data.filter((element) => {
        let searchClient = element.name;

        return searchClient.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
      if (info && value != "") {
        this.$store.commit(setInfo, info);
      }
    },
  },
};
