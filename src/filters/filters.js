import moment from "moment";

const filters = [{
    name: "dateFormat",
    execute: (value) => {
      return moment(value).format("LLL");
    },
  },

  {
    name: "agoDateFormat",
    execute: (value) => {
      return moment(value).startOf("hour").fromNow();
    },
  },

  {
    name: "statusData",
    execute: (value) => {
      switch (value) {
        case true:
          return 'Activo'
        case false:
          return 'Inactivo'
      }
    }
  }
];

export default filters;