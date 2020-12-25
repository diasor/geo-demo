<template>
  <v-card class="pt-2 pl-14 pr-12">
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
      <v-row no-gutters class="d-flex flex-wrap mt-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> Region: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.region }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> SubRegion: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b>  {{ country.subregion }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0">Time Zone: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.timezones[0] }} </b></v-col>
      </v-row>
      <v-row no-gutters class="d-flex flex-wrap mt-3">
        <v-col class="d-flex pr-1 flex-shrink-0"> Denonym: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.demonym }} </b></v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Population: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0">
          <v-chip
              :color="populationColor(country.population)"
              dark
            >
            {{ country.population.toLocaleString() }}
          </v-chip>
        </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"> Area: </v-col>
        <v-col class="d-flex pr-1 flex-shrink-0"><b> {{ country.area }} </b></v-col>
      </v-row>
    </v-container>

    <v-card-subtitle class="mb-0 pb-0"><h3>Languages</h3></v-card-subtitle>
    <v-card-text>
      <v-chip-group
        column
        >
        <v-chip
          v-for="(language, i) in country.languages"
          :key="i"
        >
          {{ language.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-subtitle class="pt-0 mb-0 pb-0"><h3>Borders</h3></v-card-subtitle>
    <v-card-text>
      <v-chip-group
        column
        >
        <v-chip
          v-for="(border, i) in countryBorders"
          :key="i"
        >
         {{ border }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-subtitle class="pt-0 mb-0 pb-0"><h3>Currencies</h3></v-card-subtitle>
    <v-card-text>
      <v-chip-group
        column
        >
        <v-chip
          v-for="(currency, i) in country.currencies"
          :key="i"
        >
         {{ currency.name }} ({{ currency.symbol }})
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
import { getPopulationColor } from '@/utils/utils.js';

export default {
  name: 'CountryInformation',

  props: {
    country: {
      type: Object,
      default: () => {}
    },

    countryBorders: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    populationColor(population) {
      return getPopulationColor(population);
    }
  }
};
</script>

<style lang="scss">
  .v-expansion-panel-header {
    color: rgba(0, 0, 0, 0.87) !important;
    font-size: 1rem;
  }

  .v-expansion-panel::before {
    box-shadow: none !important;
    border: none !important;
  }
</style>
