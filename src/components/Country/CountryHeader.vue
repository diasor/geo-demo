<template>
    <div class="country-header-container">
        <v-list class="country-header-list">
            <v-list-item two-line class="pl-0">
                <v-list-item-content>
                    <v-list-item-title class="country-name">{{ countryName }} </v-list-item-title>
                    <v-list-item-subtitle class="country-capital">{{ countryCapital }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-img max-height="80" max-width="100" :src="countryFlag" />
            </v-list-item>
        </v-list>
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
        display: flex;
    }

    .country-header-list {
        display: flex;
        justify-content: space-between;
        min-width: 70vw;
        
        @media screen and (min-width: 450px) {
            min-width: 100% !important;
        }
    }

    .country-name {
        font-size: 20px;
        font-weight: bold;
        padding-left: 1rem;
    }

    .country-capital {
        font-size: 16px;
        font-weight: bold;
        padding-top: 1rem;
        padding-left: 1rem;
    }
</style>