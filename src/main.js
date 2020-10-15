import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import {
  Map,
  TileLayer,
  OsmSource,
  Geoloc,
  Feature,
  MultiPointGeom,
  StyleBox,
  IconStyle,
  VectorSource,
  VectorLayer,
  SelectInteraction,
  PointGeom,
} from "vuelayers"
import "vuelayers/lib/style.css"

Vue.use(Map)
Vue.use(TileLayer)
Vue.use(OsmSource)
Vue.use(Geoloc)
Vue.use(Feature)
Vue.use(MultiPointGeom)
Vue.use(StyleBox)
Vue.use(IconStyle)
Vue.use(VectorSource)
Vue.use(VectorLayer)
Vue.use(SelectInteraction)
Vue.use(PointGeom)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
