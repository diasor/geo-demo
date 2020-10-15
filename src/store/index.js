import Vue from "vue"
import Vuex from "vuex"
import api from "@/api/countryApi"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryList: [],
    currentCountry: {
      name: "",
      alpha2Code: "",
      alpha3Code: "",
      capital: "",
      region: "",
      subregion: "",
      population: 0,
      latlng: [],
      area: 0,
      timezones: [],
      borders: [],
      numericCode: "",
      currencies: [],
      languages: [],
      flag: "",
      demonym: "",
    },
  },

  getters: {
    allCountries: (state) => state.countryList,
    currentCountry: (state) => state.currentCountry,
    getCountryByCode(state) {
      return (code) =>
        state.countryList.find((item) => {
          return item.alpha3Code === code
        })
    },
  },

  mutations: {
    SET_COUNTRY_LIST(state, countries) {
      state.countryList = countries
    },

    SET_CURRENT_COUNTRY(state, country) {
      state.currentCountry = { ...country }
      console.log("SET_CURRENT_COUNTRY", country)
    },
  },

  actions: {
    setCurrentCountry({ state, commit }, code) {
      const country = state.countryList.find((item) => {
        return item.alpha2Code === code
      })
      commit("SET_CURRENT_COUNTRY", country)
    },

    fetchCountries({ commit }) {
      api.getCountryList().then((response) => {
        const countries = Object.values(response.data).map((item) => {
          const {
            name,
            alpha2Code,
            alpha3Code,
            capital,
            region,
            subregion,
            population,
            latlng,
            area,
            timezones,
            borders,
            numericCode,
            currencies,
            languages,
            flag,
            demonym,
          } = item

          return {
            name,
            alpha2Code,
            alpha3Code,
            capital,
            region,
            subregion,
            population,
            latlng,
            area,
            timezones,
            borders,
            numericCode,
            currencies,
            languages,
            flag,
            demonym,
          }
        })
        commit("SET_COUNTRY_LIST", countries)
      })
    },
  },
})
