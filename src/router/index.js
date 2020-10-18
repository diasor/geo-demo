import Vue from "vue"
import VueRouter from "vue-router"
import CountryList from "@/views/CountryList.vue"
import ViewCountry from "@/views/ViewCountry.vue"
import CountryMap from "@/components/CountryMap.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "country-list",
    component: CountryList,
  },
  {
    path: "/country/:code",
    name: "view-country",
    component: ViewCountry,
  },
  {
    path: "/map",
    name: "country-map",
    component: CountryMap,
  },
  {
    path: "/covid-overview",
    name: "covid-overview",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewCOVIDOverview.vue"),
  },
  
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
