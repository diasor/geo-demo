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
    },
  },

  actions: {
    setCurrentCountry({ state, commit }, code) {
      const country = state.countryList.find((item) => {
        return item.alpha2Code === code
      })
      commit("SET_CURRENT_COUNTRY", country)
    },

    fetchCountries({ state, commit }) {
      const covidDate = new Date().toISOString().split('T')[0]
      api.getCountryList()
      .then((response) => {
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
      }).then(() => {
        return api.getCountryCovidInformation(covidDate)
      }).then(covidResponse => {
          // const total = covidResponse.data.total
        const covidPerCountry = covidResponse.data.dates[covidDate].countries
        const countries = state.countryList.map((iterCountry) => {
          let covidCountry = covidPerCountry[iterCountry.name]
          if (!covidCountry) {
            if (iterCountry.name === "United Kingdom of Great Britain and Northern Ireland") {
              covidCountry = covidPerCountry["United Kingdom"]
            } else if (iterCountry.name === "United States of America") {
              covidCountry = covidPerCountry["US"]
            } else if (iterCountry.name === "Congo (Democratic Republic of the)") {
              covidCountry = covidPerCountry["Congo (Brazzaville)"]
            } else if (iterCountry.name === "Bolivia (Plurinational State of)") {
                covidCountry = covidPerCountry["Bolivia"]
            }
          }
          return (covidCountry !== undefined)
          ? {
            newConfirmed: covidCountry.today_new_confirmed,
            newConfirmedFormat: covidCountry.today_new_confirmed.toLocaleString(),
            newDeath: covidCountry.today_new_deaths,
            newDeathFormat: covidCountry.today_new_deaths.toLocaleString(),
            todayConfirmed: covidCountry.today_confirmed,
            todayConfirmedFormat: covidCountry.today_confirmed.toLocaleString(),
            todayDeaths: covidCountry.today_deaths,
            todayDeathsFormat: covidCountry.today_deaths.toLocaleString(),
            openCases: covidCountry.today_open_cases.toLocaleString(),
            totalRecovered: covidCountry.yesterday_recovered.toLocaleString(),
            ...iterCountry
          }
          : { ...iterCountry,
            newConfirmed: -1,
            newConfirmedFormat: "No data",
            newDeath: -1,
            todayConfirmed: -1,
            todayConfirmedFormat: "No data",
            todayDeaths: -1,
            todayDeathsFormat: "No data",
            openCases: "No data",
            totalRecovered:  "No data",
          }
        })
        commit("SET_COUNTRY_LIST", countries)
      })
    },
  },
})
