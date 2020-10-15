import axios from "axios"

export default {
  getCountryList() {
    return axios.get("https://restcountries.eu/rest/v2/all")
  },
}
