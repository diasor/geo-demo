<template>
	<v-card  
		v-if="showCountry" 
		class="ma-0 mt-4 pa-0"
	>
		<v-carousel
			hide-delimiters
			:dark="$vuetify.theme.dark"
			:light="!$vuetify.theme.dark"
			class="ma-0 pa-0"
			height="100%"
		>
			<v-carousel-item class="ma-0 pa-0">
				<country-information
					:country="currentCountry"
					:countryBorders="countryBorders"
				/>
			</v-carousel-item>
			<v-carousel-item class="ma-2 pa-0"> 
				<country-covid-information :country="currentCountry" />
			</v-carousel-item>
			<v-carousel-item class="ma-2 pa-0"> 
				<country-population
					:country="currentCountry"
					:countryPopulation="currentPopulation"
				/>
			</v-carousel-item>
			<v-carousel-item class="ma-0 pa-0">
				<country-map :country="currentCountry" />
			</v-carousel-item>
		</v-carousel>
		
		<v-btn text color="purple" @click="backToMainMenu" class="mt-2">Back to Country List</v-btn>
	</v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import { forEach } from "lodash"
import CountryInformation from "@/components/country/CountryInformation"
import CountryCovidInformation from "@/components/country/CountryCovidInformation"
import CountryMap from "@/components/country/CountryMap"
import CountryPopulation from "@/components/country/CountryPopulation"

export default {
	name: "ViewCountry",
	
	components: {
		CountryInformation,
		CountryCovidInformation,
		CountryMap,
		CountryPopulation
	},
	
	data: () => ({
		showMoreCurrencies: false,
		showBorders: false,
		showCountry: false,
	}),
	
	computed: {
		...mapGetters(["currentCountry", "getCountryByCode", "currentPopulation"]),
		
		countryBorders() {
			let borders = []
			if (this.currentCountry &&
				this.currentCountry.borders &&
				this.currentCountry.borders.length > 0)
			{
				forEach(this.currentCountry.borders, (countryCode) => {
					const border = this.getCountryByCode(countryCode)
					if (border) {
						borders.push(border)
					}
				})
			}
			return borders
		},
	},
	
	async created() {
		if (!this.currentCountry.name) {
			this.showCountry = false
			const alpha2Code = this.$route.params.code
			await this.setCurrentCountry(alpha2Code)
			this.showCountry = true
		} else {
			this.showCountry = true
		}
	},
	
	methods: {
		...mapActions(["setCurrentCountry"]),
		
		backToMainMenu() {
			this.$router.push({ path: "/" })
		},
	},
}
</script>
