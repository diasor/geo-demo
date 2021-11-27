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
			<template v-slot:item.todayConfirmed="{ item }">
				<v-chip
					:color="covidColor(item.todayConfirmed)"
					dark
				>
					{{ item.todayConfirmedFormat }}
				</v-chip>
			</template>
			<template v-slot:top>
				<v-text-field 
					v-model="search" 
					label="Search" 
					class="mx-4"
				/>
			</template>
		</v-data-table>
		<v-alert
			:value="showAlert"
			border="top"
			class="mt-3"
			colored-border
			:type="alertType"
			elevation="2"
			transition="scale-transition"
			dismissible
			@click="closeAlert"
			>	{{ alertMessage }}
		</v-alert>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { getPopulationColor, getCovidColor } from '@/utils/utils.js';

export default {
	name: "CountryList",
	
	data() {
		return {
			search: '',
			alertType: "success",
			showAlert: false,
			alertMessage: "",
		}
	},
	
	computed: {
		...mapGetters(["allCountries"]),
		
		headers() {
			return [
				{ text: "Code", align: "start", sortable: true, value: "cca2" },
				{ text: "Flag", align: "start", sortable: false, value: "flag" },
				{ text: "Name", value: "name", sortable: true },
				{ text: "Region", value: "region" },
				{ text: "Capital", value: "capital" },
				{ text: "Phone prefix", value: "callingCodes" },
				{ text: "COVID Cases", value: "todayConfirmed",  sortable: true },
				{ text: "COVID Deaths", value: "todayDeathsFormat",  sortable: true }
			]
		}
	},
	
	mounted() {
		try {
			this.fetchCountries()
		} catch (error) {
			this.alertMessage = error
			this.showAlert = true
			this.alertType = "error"
		}
	},
	
	methods: {
		...mapActions(['fetchCountries', 'setCurrentCountry']),
		
		filterText(value, search, item) {
			const searchLowerCase = search.toLowerCase()
			return ( 
				value != null && 
				search != null && 
				item != null &&
				typeof value === 'string' && 
				value
					.toString()
					.toLowerCase()
					.indexOf(searchLowerCase) !== -1
				)
		},
		
		async viewCountry(country) {
			if (!country) return
			await this.setCurrentCountry(country.cca2)
			this.$router.push({ path: `/country/${country.cca2}` })
		},
		
		populationColor(population) {
			return getPopulationColor(population)
		},
		
		covidColor(covidNumber) {
			return getCovidColor(covidNumber)
		},

		closeAlert() {
			this.alertMessage = ""
			this.showAlert = false
			this.alertType = "success"
		}
	}
}
</script>
