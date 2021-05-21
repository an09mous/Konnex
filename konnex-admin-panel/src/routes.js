import Dashboard from "views/Dashboard.js";
// import ApplicationNavigation from "views/ApplicationNavigation.js";
// import ApplicationImprovement from "views/ApplicationImprovement.js";
// import Bugs from "views/Bugs.js";
// import Chatbot from "views/Chatbot.js";
// import CollectiveAnnouncements from "views/CollectiveAnnouncements.js";
import Key from "views/Key.js"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/key",
    name: "View key",
    component: Key,
    layout: "/admin",
  }
  // {
  //   path: "/applicationImprovement",
  //   name: "Application Improvement",
  //   component: ApplicationImprovement,
  //   layout: "/admin",
  // },
  // {
  //   path: "/applicationNavigation",
  //   name: "Application Navigation",
  //   component: ApplicationNavigation,
  //   layout: "/admin",
  // },
  // {
  //   path: "/bugs",
  //   name: "Bugs",
  //   component: Bugs,
  //   layout: "/admin",
  // },
  // {
  //   path: "/chatbot",
  //   name: "Chatbot",
  //   component: Chatbot,
  //   layout: "/admin",
  // },
  // {
  //   path: "/collectiveAnnouncements",
  //   name: "Collective Announcements",
  //   component: CollectiveAnnouncements,
  //   layout: "/admin",
  // },
];
export default routes;
