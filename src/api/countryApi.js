import axios from "axios"

export default {
  getCountryList() {
    return axios.get("https://restcountries.eu/rest/v2/all")
  },

  getCountryCovidInformation(covidDate){
    return axios.get(`https://api.covid19tracking.narrativa.com/api/${covidDate}`)
  }
}
