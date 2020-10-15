<template>
  <v-card min-width="600" class="ma-0 pa-0">
    <v-card-title class="ma-0 pa-0">{{ country.name }}</v-card-title>
    <v-card-text class="ma-0 pa-0">
      <vl-map data-projection="EPSG:4326" style="height: 400px">
        <vl-view
          :zoom="zoom"
          :center="center"
          :rotation.sync="rotation"
        ></vl-view>

        <vl-layer-tile>
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>

        <vl-layer-vector>
          <vl-source-vector>
            <vl-feature>
              <vl-geom-point
                :coordinates="feature.geometry.coordinates"
              ></vl-geom-point>
            </vl-feature>

            <vl-style-box>
              <vl-style-icon
                src="https://img.icons8.com/office/50/000000/place-marker.png"
              ></vl-style-icon>
            </vl-style-box>
          </vl-source-vector>
        </vl-layer-vector>
      </vl-map>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CountryMap",
  props: {
    country: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    rotation: 0,
    zoom: 3,
    selected: [],
    mapCursor: "default",
  }),

  computed: {
    geolocPosition() {
      return this.country
        ? [this.country.latlng[1], this.country.latlng[0]]
        : [0, 0]
    },

    feature() {
      return {
        type: "Feature",
        id: "marker",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: this.geolocPosition,
        },
      }
    },

    center() {
      return this.geolocPosition
    },
  },
}
</script>
