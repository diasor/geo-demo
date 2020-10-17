<template>
  <div>
    <v-data-table
      @click:row="viewCountry"
      :headers="headers"
      :items="allCountries"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterText"
    >
      <template v-slot:item.population="{ item }">
        <v-chip
          :color="populationColor(item.population)"
          dark
        >{{ item.population.toLocaleString() }}</v-chip>
      </template>
            <template v-slot:item.todayConfirmed="{ item }">
        <v-chip
          :color="covidColor(item.todayConfirmed)"
          dark
        >{{ item.todayConfirmedFormat }}</v-chip>
      </template>
      <template v-slot:top>
        <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getPopulationColor, getCovidColor } from '@/utils/utils.js';

export default {
  name: 'CountryList',

  data() {
    return {
      search: ''
    };
  },

  computed: {
    ...mapGetters(['allCountries']),

    headers() {
      return [
        {
          text: "Code",
          align: "start",
          sortable: true,
          value: "alpha2Code"
        },
        {
          text: "Name",
          value: "name",
          sortable: true
        },
        { text: "Region", value: "region" },
        { text: "Capital", value: "capital" },
        { text: "Population", value: "population" },
        { text: " COVID Cases", value: "todayConfirmed",  sortable: true },
        { text: " COVID Deaths", value: "todayDeathsFormat",  sortable: true }
      ];
    }
  },

  mounted() {
    this.fetchCountries();
  },

  methods: {
    ...mapActions(['fetchCountries', 'setCurrentCountry']),

    filterText(value, search, item) {
      return (
        value != null &&
        search != null &&
        item != null &&
        typeof value === 'string' &&
        value
          .toString()
          .toLowerCase()
          .indexOf(search) !== -1
      );
    },

    viewCountry(country) {
      if (!country) return;
      this.setCurrentCountry(country.alpha2Code);
      this.$router.push({ path: `/country/${country.alpha2Code}` });
    },

    populationColor(population) {
      return getPopulationColor(population);
    },

    covidColor(covidNumber) {
      return getCovidColor(covidNumber)
    }
  }
};
</script>
