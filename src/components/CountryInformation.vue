<template>
  <v-card min-width="600" class="ma-2 pl-10 pr-10 pb-2 pt-2">
    <v-list>
      <v-list-item two-line class="pl-0">
        <v-list-item-content>
          <v-list-item-title>
            <v-card-title class="pb-0">{{ country.name }}</v-card-title>
          </v-list-item-title>
          <v-list-item-subtitle class="pt-0">
            <v-card-subtitle class="pt-0"
              >Capital: {{ country.capital }}</v-card-subtitle
            >
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-img
          class="mr-2"
          max-height="80"
          max-width="100"
          :src="country.flag"
        />
      </v-list-item>
    </v-list>
    <v-divider class="ma-0"></v-divider>

    <v-list>
      <v-list-item>
        <v-list-item-title>Region: {{ country.region }}</v-list-item-title>
        <v-list-item-title
          >SubRegion: {{ country.subregion }}</v-list-item-title
        >
        <v-list-item-title class="text-right"
          >Time Zone: {{ country.timezones[0] }}</v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Denonym: {{ country.demonym }}</v-list-item-title>
        <v-list-item-title
          >Population: {{ country.population }}</v-list-item-title
        >
        <v-list-item-title class="text-right"
          >Area: {{ country.area }}</v-list-item-title
        >
      </v-list-item>
    </v-list>

    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Languages:
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-item-group multiple>
            <v-item
              v-for="(language, i) in country.languages"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-chip
                active-class="purple--text"
                :input-value="active"
                @click="toggle"
              >
                {{ language.name }}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Borders:
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-item-group multiple>
            <v-item
              v-for="(border, i) in countryBorders"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-chip
                active-class="purple--text"
                :input-value="active"
                @click="toggle"
              >
                {{ border }}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          Currencies:
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-item-group multiple>
            <v-item
              v-for="(currency, i) in country.currencies"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-chip
                active-class="purple--text"
                :input-value="active"
                @click="toggle"
              >
                {{ currency.name }} ({{ currency.symbol }})
              </v-chip>
            </v-item>
          </v-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "CountryInformation",

  props: {
    country: {
      type: Object,
      default: () => {},
    },

    countryBorders: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    showMoreCurrencies: false,
    showBorders: false,
  }),
}
</script>
<style>
.v-expansion-panel-header {
  color: rgba(0, 0, 0, 0.87) !important;
  font-size: 1rem;
}

.v-expansion-panel::before {
  box-shadow: none !important;
  border: none !important;
}
</style>
