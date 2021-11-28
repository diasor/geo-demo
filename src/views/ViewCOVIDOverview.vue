<template>
	<v-card 
		v-if="showGraph" 
		min-width="200px" 
		class="pa-2"
	>
		<v-card-title> COVID19 Overview {{ covidDate }}</v-card-title>
		<bar-chart 
			v-if="mostCOVIDInfectedCountries"
			:labels="chartLabels"
			:data="chartData"
			:titleDate="covidDate"
		/>
		<v-btn text color="purple" @click="backToMainMenu" class="mt-0">Back to Country List</v-btn>
	</v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import BarChart from "@/components/charts/BarChart.vue"

export default {
	name: "ViewCOVIDOverview",
	
	components: { 
		BarChart
	},
	
	computed: {
		...mapGetters(["mostCOVIDInfectedCountries", "covidDate"]),
		
		showGraph() {
			return (this.mostCOVIDInfectedCountries.length > 0)
		},
		
		chartLabels() {
			return this.mostCOVIDInfectedCountries.map(country => country.name)
		},
		
		chartData() {
			return this.mostCOVIDInfectedCountries.map(country => country.todayConfirmed)
		}
	},
	
	created() {
		this.generateMostInfected()
	},
	
	methods: {
		...mapActions(['generateMostInfected']),
		
		backToMainMenu() {
			this.$router.push({ path: "/" })
		}
	},
}
</script>
