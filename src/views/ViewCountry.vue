<template>
	<v-card  
		v-if="showCountry" 
		class="ma-0 pa-0"
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
				<country-covid-information
					:country="currentCountry"
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
import CountryInformation from "@/components/Country/CountryInformation"
import CountryCovidInformation from "@/components/Country/CountryCovidInformation"
import CountryMap from "@/components/Country/CountryMap"

export default {
	name: "ViewCountry",
	
	components: {
		CountryInformation,
		CountryCovidInformation,
		CountryMap,
	},
	
	data: () => ({
		showMoreCurrencies: false,
		showBorders: false,
		showCountry: false,
	}),
	
	computed: {
		...mapGetters(["currentCountry", "getCountryByCode"]),
		
		countryBorders() {
			let borderNames = []
			if (this.currentCountry && this.currentCountry.borders) {
				this.currentCountry.borders.forEach((countryCode) => {
					borderNames.push(this.getCountryByCode(countryCode).name)
				})
			}
			return borderNames
		},
	},
	
	async created() {
		if (this.currentCountry.name === "") {
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
