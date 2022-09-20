import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobview from "../views/jobs/JobsView.vue";
import Jobdetails from "../views/jobs/JobDetails.vue";
import NotFoundPage from "../views/404Page.vue";
//alt + shift + down key to duplicate

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobview,
    },
    {
      path: "/jobs/:id",
      name: "jobDetails",
      component: Jobdetails,
      props: true,
    },
    //redirect
    {
      path: "/all-jobs",
      redirect: "/jobs",
    },
    //catchall 404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

export default router;
