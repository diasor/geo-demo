<template>
	<v-card class="about-container">
		<v-card-text>
			This application provides the list of the world countries. It allows the user to search for 
			countries and regions. For each country, the user can check the country's information:
		</v-card-text>
		
		<v-card-title class="pt-0 pb-0">Information</v-card-title>
		<v-card-text>
			<ul>
				<li>capital</li>
				<li>region and subregion)</li>
				<li>population and area</li>
				<li>flag</li>
				<li>languages</li>
				<li>timezones</li>
				<li>borders</li>
			</ul>
		</v-card-text>

		<v-card-title>Map</v-card-title>
		<v-card-text>Also the application shows an interactive map of the country.</v-card-text>
		
		<v-card-title>COVID19 Information</v-card-title>
		<v-card-text> The application is connected to an API that has online information about 
			COVID19 development per country. This information can be found on the main grid per country
			but also there is a full tab of COVID information on each country page.
		</v-card-text>

		<v-card-title>COVID19 Overview</v-card-title>
		<v-card-text> The application also shows an overview of the 10 countries which have had 
			more COVID cases reported so far.
		</v-card-text>
		
		<v-card-title>Tools & technologies</v-card-title>
		<v-card-text>
			<v-chip-group column>
				<v-chip>Vue</v-chip>
				<v-chip>Vuex</v-chip>
				<v-chip>Vue Router</v-chip>
				<v-chip>Vuetify</v-chip> 
				<v-chip>VueLayers</v-chip>
				<v-chip>VueChartJs</v-chip>
				<v-chip>REST Country API</v-chip>
			</v-chip-group>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "AboutApplication"
}
</script>
<style lang="scss" scoped>
	.about-container {
		& ul, li {
			max-width: 98%;
		}
	}

	.theme-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.theme-image {
		height: 400px;
		width: 300px;
	}
</style>

<style lang="scss">
	.carousel-container {
		max-width: 100vw;
		height: 300px;
		margin: 0;
		padding: 0;

		@media screen and (min-width: 400px) {
			height: 580px;
		}
	}
</style>