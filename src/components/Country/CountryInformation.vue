<template>
  <div class="country-info-container">
    <country-header
      :countryName="country.name"
      :countryCapital="country.capital"
      :countryFlag="country.flag"
    />

    <v-container class="ma-0 pa-0">
      <v-row no-gutters class="mt-2">
        <v-col cols="6" md="3"> Region: </v-col>
        <v-col cols="6" md="3"><b> {{ country.region }} </b></v-col>
        <v-col cols="6" md="3"> SubRegion: </v-col>
        <v-col cols="6" md="3"><b>  {{ country.subregion }} </b></v-col>
      </v-row>
      <v-row no-gutters class="mt-2">
        <v-col cols="6" md="3"> Denonym: </v-col>
        <v-col cols="6" md="3"><b> {{ country.demonym }} </b></v-col>
        <v-col cols="6" md="3"> Population: </v-col>
        <v-col cols="6" md="3">
          <v-chip
              :color="populationColor(country.population)"
              dark
            >
            {{ country.population.toLocaleString() }}
          </v-chip>
        </v-col>

      </v-row>
      <v-row no-gutters class="mt-2">
        <v-col cols="6" md="3"> Area: </v-col>
        <v-col cols="6" md="3"><b> {{ country.area }} </b></v-col>  
        <v-col cols="6" md="3">Time Zone: </v-col>
        <v-col cols="6" md="3"><b> {{ country.timezones[0] }} </b></v-col>
      </v-row>
    </v-container>

    <div class="mt-2 ml-0 pb-0"><h3>Languages</h3></div>
    <!-- <v-card-subtitle class="ma-0 pb-0"><h3>Languages</h3></v-card-subtitle> -->
    <!-- <v-card-text> -->
      <v-chip-group
        column
        >
        <v-chip
          v-for="(language, i) in country.languages"
          :key="i"
          class="ml-0"
        >
          {{ language.name }}
        </v-chip>
      </v-chip-group>
    <!-- </v-card-text> -->

    <!-- <v-card-subtitle class="pt-0 mb-0 pb-0"><h3>Borders</h3></v-card-subtitle> -->
    <div class="mt-2 ml-0 pb-0"><h3>Borders</h3></div>
    <!-- <v-card-text> -->
      <v-chip-group
        column
        >
        <v-chip
          v-for="(border, i) in countryBorders"
          :key="i"
          class="ml-0"
        >
         {{ border }}
        </v-chip>
      </v-chip-group>
    <!-- </v-card-text> -->

    <!-- <v-card-subtitle class="pt-0 mb-0 pb-0"><h3>Currencies</h3></v-card-subtitle> -->
    <div class="mt-2 ml-0 pb-0"><h3>Currencies</h3></div>
    <!-- <v-card-text class="mb-4 pb-4"> -->
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
    <!-- </v-card-text> -->
  </div>
</template>

<script>
import { getPopulationColor } from '@/utils/utils.js';
import CountryHeader from "./CountryHeader.vue"

export default {
  name: 'CountryInformation',

  components: {
    CountryHeader
  },

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
	.country-info-container {
		display: flex;
		flex-direction: column;
		margin: 0 4.5rem;
		padding: 0;
		height: 100% !important;

		& h3 {
			font-size: 18px;
		}
	}
</style>
