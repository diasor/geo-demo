<template>
  <v-card class="pt-2 pl-12 pr-12 pb-10">
    <v-list>
      <v-list-item two-line class="pl-0 ">
        <v-list-item-content>
          <v-list-item-title>
            <v-card-title class="pb-0">{{ country.name }}</v-card-title>
          </v-list-item-title>
          <v-list-item-subtitle class="pt-0">
            <v-card-subtitle class="pt-0">Capital: {{ country.capital }}</v-card-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-img class="mr-2" max-height="80" max-width="100" :src="country.flag" />
      </v-list-item>
    </v-list>
    <v-divider class="ma-0"></v-divider>

    <v-container class="grey lighten-5 ml-1 pb-0">
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
        <v-col class="d-flex pr-1 flex-shrink-0"> Deaths: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.todayDeathsFormat }} </b></v-col>
      </v-row>
      <v-row no-gutters class="d-flex justify-space-between flex-wrap mt-3 mb-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> New Cases: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.newConfirmedFormat }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> New Deaths: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.newDeathFormat }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Recovered: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.totalRecovered }} </b></v-col>
      </v-row>
    </v-container>
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

