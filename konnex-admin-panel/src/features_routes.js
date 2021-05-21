import ApplicationNavigation from "views/ApplicationNavigation.js";
import ApplicationImprovement from "views/ApplicationImprovement.js";
import Bugs from "views/Bugs.js";
import Chatbot from "views/Chatbot.js";
import UsageAndPerfromance from "views/UsageAndPerformance.js";
import CollectiveAnnouncements from "views/CollectiveAnnouncements.js";

var features_routes = [
  {
    path: "/applicationImprovement",
    name: "Application Improvement",
    component: ApplicationImprovement,
    layout: "/admin",
  },
  {
    path: "/applicationNavigation",
    name: "Application Navigation",
    component: ApplicationNavigation,
    layout: "/admin",
  },
  {
    path: "/bugs",
    name: "Bugs",
    component: Bugs,
    layout: "/admin",
  },
  {
    path: "/chatbot",
    name: "Chatbot",
    component: Chatbot,
    layout: "/admin",
  },
  {
    path: "/collectiveAnnouncements",
    name: "Collective Announcements",
    component: CollectiveAnnouncements,
    layout: "/admin"
  },
  {
    path: "/usageAndPerformance",
    name: "Usage and Performance",
    component: UsageAndPerfromance,
    layout: "/admin"
  }
];
export default features_routes;
