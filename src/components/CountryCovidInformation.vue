<template>
  <v-card min-width="600" class="ma-2 pl-10 pr-10 pb-2 pt-2">
    <v-list>
      <v-list-item two-line class="pl-0">
        <v-list-item-content>
          <v-list-item-title>
            <v-card-title class="pb-0">{{ country.name }} - COVID19 Information</v-card-title>
          </v-list-item-title>
          <v-list-item-subtitle class="pt-0">
            <v-card-subtitle class="pt-0">Capital: {{ country.capital }}</v-card-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-img class="mr-2" max-height="80" max-width="100" :src="country.flag" />
      </v-list-item>
    </v-list>
    <v-divider class="ma-0"></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-title>Total Open Cases: {{ country.openCases }}</v-list-item-title>
        <v-list-item-title>
          Total Cases: 
            <v-chip
            :color="populationColor(country.todayConfirmed)"
            dark
          >{{ country.todayConfirmedFormat }}</v-chip>
          </v-list-item-title>
        <v-list-item-title class="text-right">Total Deaths: {{ country.todayDeathsFormat }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Today's New Cases: {{ country.newConfirmedFormat }}</v-list-item-title>
        <v-list-item-title>Today's New Deaths: {{ country.newDeathFormat }}</v-list-item-title>
        <v-list-item-title class="text-right">Total Recovered: {{ country.totalRecovered }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider class="ma-4"></v-divider>

  </v-card>
</template>

<script>
import { getCovidColor } from '@/utils/utils.js';

export default {
  name: 'CountryCovidInformation',

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

