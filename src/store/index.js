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
    mostCOVIDInfectedCountries: [],
    covidDate: "",
  },

  getters: {
    allCountries: (state) => state.countryList,
    currentCountry: (state) => state.currentCountry,
    mostCOVIDInfectedCountries: (state) => state.mostCOVIDInfectedCountries,
    getCountryByCode(state) {
      return (code) =>
        state.countryList.find((item) => {
          return item.alpha3Code === code
        })
    },
    covidDate: (state) => state.covidDate,
  },

  mutations: {
    SET_COUNTRY_LIST(state, countries) {
      state.countryList = countries
    },

    SET_CURRENT_COUNTRY(state, country) {
      state.currentCountry = { ...country }
    },

    SET_MOST_INFECTED_LIST(state, countries) {
      state.mostCOVIDInfectedCountries = countries
    },

    SET_COVID_DATE(state, covidDate) {
      state.covidDate = covidDate
    }
  },

  actions: {
    async fetchCountries({ state, commit }) {
      if (state.countryList.length === 0) {
        const covidDate = new Date().toISOString().split('T')[0]
        return api.getCountryList()
        .then((response) => commit("SET_COUNTRY_LIST", Object.values(response.data)))
        .then(() => api.getCountryCovidInformation(covidDate))
        .then(covidResponse => {
          // const total = covidResponse.data.total
          const covidPerCountry = covidResponse.data.dates[covidDate].countries
          const countries = state.countryList.map((iterCountry) => {
            let covidCountry = covidPerCountry[iterCountry.name]
            if (!covidCountry) {
              // several country codes differ between apis, so some matching has to be done
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
            const noCovidData = (covidCountry === undefined)
            return {
              newConfirmed: noCovidData ? -1 : covidCountry.today_new_confirmed,
              newConfirmedFormat: noCovidData ? "No Data" : covidCountry.today_new_confirmed.toLocaleString(),
              newDeath: noCovidData ? -1 : covidCountry.today_new_deaths,
              newDeathFormat: noCovidData ? "No Data" : covidCountry.today_new_deaths.toLocaleString(),
              todayConfirmed: noCovidData ? -1 : covidCountry.today_confirmed,
              todayConfirmedFormat: noCovidData ? "No Data" : covidCountry.today_confirmed.toLocaleString(),
              todayDeaths: noCovidData ? -1 : covidCountry.today_deaths,
              todayDeathsFormat: noCovidData ? "No Data" : covidCountry.today_deaths.toLocaleString(),
              openCases: noCovidData ? "No Data" : covidCountry.today_open_cases.toLocaleString(),
              todayRecovered: noCovidData ? " No data" : covidCountry.today_new_recovered.toLocaleString(),
              totalRecovered: noCovidData ? "No Data" : covidCountry.yesterday_recovered.toLocaleString(),
              source: noCovidData ? "No Data" : covidCountry.source,
              ...iterCountry
            }
          })
          commit("SET_COUNTRY_LIST", countries)
          commit("SET_COVID_DATE", covidDate)
        })
      }
    },

    async setCurrentCountry({ state, commit, dispatch }, code) {
      if (state.countryList.length === 0) {
        await dispatch("fetchCountries")
      }

      const country = state.countryList.find((item) => item.alpha2Code === code)
      commit("SET_CURRENT_COUNTRY", country)
    },

    async generateMostInfected({ state, commit, dispatch }) {
      let countryList
      if (state.countryList.length === 0) {
        await dispatch("fetchCountries")
        countryList = filterAndOrderInfected(state.countryList)

      } 
      countryList = filterAndOrderInfected(state.countryList)
      commit("SET_MOST_INFECTED_LIST", countryList)
    }
  }
})

function filterAndOrderInfected(countries){
  const countryList = countries
    .filter(country => country.todayConfirmed !== -1)
    .sort((c1, c2) => (c1.todayConfirmed > c2.todayConfirmed) ? -1 :((c2.todayConfirmed > c1.todayConfirmed) ? 1 : 0)) 
    .slice(0, 9)
  return countryList
}