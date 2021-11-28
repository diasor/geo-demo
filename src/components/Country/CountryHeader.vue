<template>
	<div class="country-header-container">
		<div class="country-name-container">
			<div><h1>{{ countryName }} </h1> </div>
			<div><h2>{{ countryCapital }}</h2></div>
		</div>
		<div class="country-flag pb-0">
			<span>{{ countryFlag }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "CountryHeader",

  props: {
    countryName: {
        type: String,
        default: () => ""
    },

    countryCapital: {
        type: String,
        default: () => ""
    },

    countryFlag: {
        type: String,
        default: () => ""
    }
  },

};
</script>

<style lang="scss" scoped>
	.country-header-container {
        display: grid;
		grid-template-columns: 80% 20%;
		border-bottom: 1px solid lightgrey !important;
        width: 60vw;
		margin: 1rem 0;
		padding-bottom: 1rem;

        @media screen and (min-width: 450px) {
            min-width: 100% !important;
        }
    }

	.country-name-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: flex-start;
		padding-bottom: 0;
		
		& h1 {
			font-size: 18px;
			font-weight: bold;

			@media screen and (min-width: 400px) {
				font-size: 20px;
			}
		}

		& h2 {
			font-size: 16px;
			font-weight: bold;
			color: grey;
		}
	}

	.country-flag {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		span {
			font-size: 70px;
		}
	}
</style>