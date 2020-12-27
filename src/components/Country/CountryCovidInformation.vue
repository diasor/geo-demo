<template>
  <div class="country-covid-container">
    <country-header
      :countryName="country.name"
      :countryCapital="country.capital"
      :countryFlag="country.flag"
    />
    <v-divider class="ml-4 pb-0" />

    <v-container class="ml-1 pb-0">
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 ">
        <v-col class="d-flex pr-1 flex-shrink-0"> Open Cases: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.openCases }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Total Cases: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0">
          <v-chip
            :color="populationColor(country.todayConfirmed)"
            dark
          >
            {{ country.todayConfirmedFormat }}
          </v-chip>
        </v-col>

      </v-row>
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 mb-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> New Cases: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.newConfirmedFormat }} </b></v-col>
        <v-col class="d-flex" />
        <v-col class="d-flex" />
      </v-row>
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 mb-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> New Deaths: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.newDeathFormat }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Total Deaths: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.todayDeathsFormat }} </b></v-col>
      </v-row>
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 mb-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> New Recovered: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.todayRecovered }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Total Recovered: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.totalRecovered }} </b></v-col>
      </v-row>      
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 mb-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> Source: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0 justify-start"><b> {{ country.source }} </b></v-col>
        <v-col class="d-flex" />
        <v-col class="d-flex" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getCovidColor } from "@/utils/utils.js"
import CountryHeader from "./CountryHeader.vue"

export default {
  name: 'CountryCovidInformation',

  components: {
    CountryHeader
  },

  props: {
    country: {
      type: Object,
      default: () => {}
    },
  },

  methods: {
    populationColor(covidNumber) {
      return getCovidColor(covidNumber);
    }
  }
};
</script>

<style lang="scss" scoped>
  .country-covid-container {
    display: flex;
    flex-direction: column;
    margin: 0 4rem;
    padding: 0;
    height: 100%;
  }
</style>

