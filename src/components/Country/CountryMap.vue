<template>
  <div class="country-map-container">
    <country-header
      :countryName="country.name"
      :countryCapital="country.capital"
      :countryFlag="country.flag"
    />
    <v-divider class="ml-4 pb-0" />

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
  </div>
</template>

<script>
import CountryHeader from "./CountryHeader.vue"

export default {
  name: "CountryMap",

  components: { 
    CountryHeader,
  },

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

<style lang="scss" scoped>
  .country-map-container {
    display: flex;
    flex-direction: column;
    margin: 0 4rem;
    padding: 0;
    height: 100%;
  }
</style>
