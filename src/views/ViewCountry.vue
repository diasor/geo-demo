<template>
  <div v-show="currentCountry">
    <v-carousel
      hide-delimiters
      :dark="$vuetify.theme.dark"
      :light="!$vuetify.theme.dark"
      class="ma-0 pa-0"
    >
      <v-carousel-item class="ma-0 pa-0">
        <country-information
          :country="currentCountry"
          :countryBorders="countryBorders"
        />
      </v-carousel-item>
      <v-carousel-item class="ma-2 pa-0"> 
       <country-covid-information
          :country="currentCountry"
        />
      </v-carousel-item>
      <v-carousel-item class="ma-0 pa-0">
        <country-map :country="currentCountry" />
      </v-carousel-item>
    </v-carousel>

    <v-btn text color="purple" @click="backToMainMenu" class="mt-2"
      >Back to Country List</v-btn
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CountryInformation from "@/components/Country/CountryInformation"
import CountryCovidInformation from "@/components/Country/CountryCovidInformation"
import CountryMap from "@/components/Country/CountryMap"

export default {
  name: "ViewCountry",

  components: {
    CountryInformation,
    CountryCovidInformation,
    CountryMap,
  },

  data: () => ({
    showMoreCurrencies: false,
    showBorders: false,
  }),

  computed: {
    ...mapGetters(["currentCountry", "getCountryByCode"]),

    countryBorders() {
      let borderNames = []
      if (this.currentCountry && this.currentCountry.borders) {
        this.currentCountry.borders.forEach((countryCode) => {
          borderNames.push(this.getCountryByCode(countryCode).name)
        })
      }
      return borderNames
    },
  },

  methods: {
    backToMainMenu() {
      this.$router.push({ path: "/" })
    },
  },
}
</script>
