<template>
	<div class="country-population-container">
		<country-header
			:countryName="chartTitle"
			:countryCapital="country.capital"
			:countryFlag="country.flag"
			class="country-population-header"
		/>
		<v-card 
			v-if="showGraph" 
			min-width="200px" 
			class="pa-2"
		>
			<line-chart 
				v-if="countryPopulation"
				:labels="chartLabels"
				:data="chartData"
				:titleDate="chartTitle"
				:dataSetLabel="dataSetLabel"
			/>
		</v-card>
	</div>
</template>
<script>
import { forEach, reverse, replace } from "lodash"
import CountryHeader from "./CountryHeader.vue"
import LineChart from "@/components/charts/LineChart.vue"

export default {
	name: 'CountryPopulation',
	
	components: {
		CountryHeader,
		LineChart
	},

	props: {
		country: {
			type: Object,
			default: () => {}
		},
		countryPopulation: {
			type: Object,
			default: () => {}
		},
	},

	computed: {
		showGraph() {
			return (this.countryPopulation && Object.entries(this.countryPopulation).length > 0)
		},

		chartTitle() {
			return `${this.country.name}'s historical population per year`
		},

		dataSetLabel() {
			return `${this.country.name}'s population per year`
		},

		chartLabels() {
			return [ 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2016, 2017, 2018, 2019, 2020, 2021 ]
		},
		
		chartData() {
			const populationEntries = Object.entries(this.countryPopulation)
			const population = []
			forEach(populationEntries, (entry) => {
				if (entry[1].TotalPopulation) {
					const numericPopulation = replace(entry[1].TotalPopulation, ".", "")
					population.push(numericPopulation)
				}
			})
			return reverse(population)
		}
	}
};
</script>
<style lang="scss" scoped>
	.country-population-container {
		display: flex;
		flex-direction: column;
		margin: 0 4rem;
		padding: 0;
		height: 80vh;
	}

	.country-population-header {
		max-height: 6rem !important;
	}
</style>