const SET_ROUTES = (state) => {
  const routes = [
    {
      name: "Home",
      label: "Inicio",
      icon: "HomeBorder",
    },
    {
      name: "Clients",
      label: "Clientes",
      icon: "ClientsBorder",
    },
    {
      name: "Operator",
      label: "Operadores",
      icon: "OperatorBorder",
    },
    {
      name: "Players",
      label: "Jugadores",
      icon: "PlayersBorder",
    },
    {
      name: "Roullete",
      label: "Ruletas",
      icon: "RoulleteBorder",
    },
    {
      name: "Reports",
      label: "Reportes",
      icon: "ReportBorder",
    },

    {
      name: "Users",
      label: "Usuarios",
      icon: "ClientsBorder",
    },
  ];

  state.route = routes;
};

export default {
  SET_ROUTES,
};
