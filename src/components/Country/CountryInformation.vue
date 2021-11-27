<template>
	<div class="country-info-container">
		<country-header
		:countryName="country.name"
		:countryCapital="country.capital"
		:countryFlag="country.flag"
    />
	<v-container class="ma-0 pa-0">
		<v-row no-gutters class="mt-2">
			<v-col cols="6" md="3"> Official name: </v-col>
			<v-col cols="6" md="3"><b> {{ country.officialName }} </b></v-col>
		</v-row>
		<v-row no-gutters class="mt-2">
			<v-col cols="6" md="3"> Region: </v-col>
			<v-col cols="6" md="3"><b> {{ country.region }} </b></v-col>
			<v-col cols="6" md="3"> SubRegion: </v-col>
			<v-col cols="6" md="3"><b>  {{ country.subRegion }} </b></v-col>
		</v-row>
		<v-row no-gutters class="mt-2">
			<v-col cols="6" md="3"> Calling code: </v-col>
			<v-col cols="6" md="3"> {{ country.callingCodes }} </v-col>
		</v-row>
		<v-row no-gutters class="mt-2">
			<v-col cols="6" md="3"> Coordinates: </v-col>
			<v-col cols="6" md="3"><b> {{ country.latlng }} </b></v-col>  
		</v-row>
	</v-container>

    <div class="mt-2 ml-0 pb-0"><h3>Languages</h3></div>
      <v-chip-group
        column
        >
        <v-chip
          v-for="(language, i) in country.languages"
          :key="i"
          class="ml-0"
        >
          {{ language }}
        </v-chip>
      </v-chip-group>

    <div class="mt-2 ml-0 pb-0"><h3>Borders</h3></div>
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

    <div class="mt-2 ml-0 pb-0"><h3>Currencies</h3></div>
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
  </div>
</template>

<script>
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
