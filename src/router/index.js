import { createRouter, createMemoryHistory } from "vue-router";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import ProjectSettings from "../views/ProjectSettings.vue";
import Users from "../views/Users.vue";
import Quotes from "../views/Quotes.vue";
import MapBookings from "../views/MapBookings.vue";
import DashboardView from "../views/DashboardView.vue";
import Bookings from "../views/Bookings.vue";
import Accounts from "../views/Accounts.vue";
import Reports from "../views/Reports.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "project-settings",
        name: "dashboard.project-settings",
        component: ProjectSettings,
      },
      {
        path: "users",
        name: "dashboard.users",
        component: Users,
      },
      {
        path: "quotes",
        name: "dashboard.quotes",
        component: Quotes,
      },
      {
        path: "map-booking",
        name: "dashboard.map-booking",
        component: MapBookings,
      },

      {
        path: "dashboard-view",
        name: "dashboard.dashboard-view",
        component: DashboardView,
      },
      {
        path: "bookings",
        name: "dashboard.bookings",
        component: Bookings,
      },
      {
        path: "accounts",
        name: "dashboard.accounts",
        component: Accounts,
      },
      {
        path: "reports",
        name: "dashboard.reports",
        component: Reports,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
