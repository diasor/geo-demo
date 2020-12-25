<template>
  <v-card v-if="mostCOVIDInfectedCountries" min-width="200px" class="ma-2 pl-10 pr-10 pb-2 pt-2">
    <v-card-title > COVID19 Overview {{ covidDate }}</v-card-title>
    <bar-chart 
      v-if="mostCOVIDInfectedCountries"
      :labels="chartLabels"
      :data="chartData"
      :titleDate="covidDate"
    />

    <v-btn text color="purple" @click="backToMainMenu" class="mt-0"
      >Back to Country List</v-btn
    >
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import BarChart from "@/components/BarChart.vue"

export default {
  name: "ViewCOVIDOverview",

  components: { 
    BarChart,
  },

  computed: {
    ...mapGetters(["mostCOVIDInfectedCountries", "covidDate"]),

    chartLabels() {
      return this.mostCOVIDInfectedCountries.map(country => country.name)
    },

    chartData() {
      return this.mostCOVIDInfectedCountries.map(country => country.todayConfirmed)
    },

  },

  created() {
    this.generateMostInfected();
  },

  methods: {
    ...mapActions(['generateMostInfected']),

    backToMainMenu() {
      this.$router.push({ path: "/" })
    },
  },
}
</script>
