// import store from "../store";

import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: () => import("../layouts/Auth/Auth.vue"),
    children: [{
        path: "/",
        name: "login",
        component: () => import("../views/Auth/Login/Login.vue"),
      },
      // {
      //     path: "/register",
      //     name: "register",
      //     component: () => import("../views/pages/account/register"),
      // },
      // {
      //     path: "/forgot-password",
      //     name: "Forgot-password",
      //     component: () => import("../views/pages/account/forgot-password"),
      // },
    ],
  },
  {
    path: "/app",
    component: () => import("../layouts/Core/Core.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [{
        path: "",
        name: "Home",
        component: () => import("@/views/Core/Home/Home.vue"),
      },
      // {
      //     path: "/utility/maintenance",
      //     name: "maintenance",
      //     component: () => import("../views/pages/utility/maintenance"),
      // },
      // {
      //     path: "/utility/comingsoon",
      //     name: "comingsoon",
      //     component: () => import("../views/pages/utility/comingsoon"),
      // },
      // {
      //     path: "/utility/404",
      //     name: "error-404",
      //     component: () => import("../views/pages/utility/404"),
      // },
      // {
      //     path: "/utility/500",
      //     name: "error-500",
      //     component: () => import("../views/pages/utility/500"),
      // },
      // {
      //     path: "/auth/lock-screen",
      //     name: "lock-screen",
      //     component: () => import("../views/pages/auth/lock-screen"),
      // },
      // {
      //     path: "/auth/recoverpwd",
      //     name: "recoverpwd",
      //     component: () => import("../views/pages/auth/recoverpwd"),
      // },

      // /* RUTAS USERS*/
      {
        path: "/users",
        name: "Users",
        component: () => import("../views/Core/Users/Users"),
      },

      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Core/Profile/Profile"),
      },
      // {
      //     path: "/users/:id",
      //     name: "user-show",
      //     component: () => import("../views/pages/users/show"),
      // },
      // /* RUTAS CURRENCIES*/
      // {
      //     path: "/currencies",
      //     name: "currencies-index",

      //     component: () => import("../views/pages/currencies/index"),
      // },
      // {
      //     path: "/currencies/:id",
      //     name: "currencie-show",
      //     component: () => import("../views/pages/currencies/show"),
      // },

      // /* RUTAS CLIENTS  */
      {
        path: "/clients",
        name: "Clients",
        component: () => import("../views/Core/Clients/Clients.vue"),
      },
      {
        path: "/clients/:id",
        name: "detailsClient",
        component: () =>
          import("../views/Core/Clients/Components/DetailsClients"),
      },
      // /* RUTAS JUGADORES  */
      {
        path: "/players",
        name: "Players",
        component: () => import("../views/Core/Players/Players.vue"),
      },
      // /* RUTAS OPERATORS  */
      {
        path: "/operators",
        name: "Operator",
        component: () => import("../views/Core/Operator/Operator.vue"),
      },
      {
        path: "/operators/:id",
        name: "operatorDetail",
        component: () =>
          import("../views/Core/Operator/Components/DetailsOperator.vue"),
      },

      // /* RUTAS ROULETTES  */
      {
        path: "/roulettes",
        name: "Roullete",
        component: () => import("../views/Core/Roulletes/Roulletes.vue"),
      },
      {
        path: "/roulettes/:id",
        name: "RoulleteDetail",
        component: () =>
          import("../views/Core/Roulletes/Components/DetailsRoullet.vue"),
      },
      // /* RUTAS Reportes  */
      {
        path: "/reports",
        name: "Reports",
        component: () => import("../views/Core/Reports/Reports.vue"),
      },
      // {
      //     path: "/reports/histories",
      //     name: "reports-histories",
      //     component: () => import("../views/pages/reports/history/index"),
      // },
      // {
      //     path: "/reports/players",
      //     name: "reports-players",
      //     component: () => import("../views/pages/reports/players/index"),
      // },
      // {
      //     path: "/reports/rounds",
      //     name: "reports-rounds",
      //     component: () => import("../views/pages/reports/rounds/index"),
      // },
      // {
      //     path: "/reports/ggr",
      //     name: "reports-ggr",

      //     component: () => import("../views/pages/reports/ggr/index"),
      // },
      // {
      //     path: "/reports/ggr/detail",
      //     name: "reports-ggr-detail",
      //     component: () => import("../views/pages/reports/ggr/detail"),
      // },
      // {
      //     path: "/reports/detail/players",
      //     name: "reports-detail-players",
      //     component: () => import("../views/pages/reports/players/detail/index"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    Vue.axios.interceptors.request.use(function (config) {
      const token = store.getters["auth/GET_TOKEN"];
      config.headers.Authorization = token;
      return config;
    });

    if (store.getters["auth/GET_TOKEN"]) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }

  window.scrollTo(0, 0);
  next();
});

export default router;