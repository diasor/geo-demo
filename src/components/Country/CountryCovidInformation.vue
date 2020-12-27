<template>
  <div class="country-covid-container">
    <country-header
      :countryName="country.name"
      :countryCapital="country.capital"
      :countryFlag="country.flag"
    />
    <v-divider class="ml-4 pb-0" />

    <v-container class="ml-1 pb-0">
      <v-row no-gutters>
        <v-col cols="6" md="3" class="mt-2"> Open Cases: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b> {{ country.openCases }} </b></v-col>
        <v-col cols="6" md="3" class="mt-2"> Total Cases: </v-col>
        <v-col cols="6" md="3" class="mt-2">
          <v-chip
            :color="populationColor(country.todayConfirmed)"
            dark
          >
            {{ country.todayConfirmedFormat }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6" md="3" class="mt-2"> New Cases: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b>  {{ country.newConfirmedFormat }} </b></v-col>
        <v-col />
        <v-col /> 
      </v-row>
      <v-row no-gutters>
        <v-col cols="6" md="3" class="mt-2"> New Deaths: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b> {{ country.newDeathFormat }} </b></v-col>
        <v-col cols="6" md="3" class="mt-2"> Total Deaths: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b> {{ country.todayDeathsFormat }} </b></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="6" md="3" class="mt-2"> New Recovered: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b>  {{ country.todayRecovered }} </b></v-col>
        <v-col cols="6" md="3" class="mt-2"> Total Recovered: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b>  {{ country.totalRecovered }} </b></v-col>
      </v-row>      
      <v-row no-gutters>
        <v-col cols="6" md="3" class="mt-2"> Source: </v-col>
        <v-col cols="6" md="3" class="mt-2"><b> {{ country.source }} </b></v-col>
        <v-col />
        <v-col />
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

<style lang="scss">
  .v-chip {
    max-height: 24px !important;
  }
</style>


