<template>
	<div class="country-map-container">
		<country-header
			:countryName="country.name"
			:countryCapital="country.capital"
			:countryFlag="country.flag"
		/>
		
		<vl-map data-projection="EPSG:4326" class="mt-2 mb-1 d-flex justify-center">
			<vl-view
				:zoom="zoom"
				:center="center"
				:rotation.sync="rotation"
			/>
			
			<vl-layer-tile><vl-source-osm /></vl-layer-tile>
			
			<vl-layer-vector>
				<vl-source-vector>
					<vl-feature>
						<vl-geom-point :coordinates="feature.geometry.coordinates" />
					</vl-feature>
					
					<vl-style-box>
						<vl-style-icon src="https://img.icons8.com/office/50/000000/place-marker.png" />
					</vl-style-box>
				</vl-source-vector>
			</vl-layer-vector>
		</vl-map>
	</div>
</template>

<script>
import CountryHeader from "./CountryHeader"

export default {
	name: "CountryMap",
	
	components: { 
		CountryHeader,
	},
	
	props: {
		country: {
			type: Object,
			default: () => {}
		}
	},
	
	data: () => ({
		rotation: 0,
		zoom: 3,
		selected: [],
		mapCursor: "default"
	}),
	
	computed: {
		geolocPosition() {
			return this.country
				? [this.country.latlng[1], this.country.latlng[0]]
				: [0, 0]
		},
		
		feature() {
			return {
				type: "Feature",
				id: "marker",
				properties: {},
				geometry: {
					type: "Point",
					coordinates: this.geolocPosition
				}
			}
		},
		
		center() {
			return this.geolocPosition
		}
	}
}
</script>

<style lang="scss" scoped>
	.country-map-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 3.5rem 0 4rem;
		padding: 0;
		height: 100%;
	}
</style>

<style lang="scss">
	.ol-unselectable {
		overflow: hidden !important;
	}

	.ol-viewport {
		max-width: 98%;
		border: 1px solid grey !important;
		border-radius: 5px !important;
		height: 400px !important;
	}
</style>
