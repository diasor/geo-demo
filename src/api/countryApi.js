import axios from "axios"
const COVID_API = "https://api.covid19tracking.narrativa.com/api";

export default {
  getCountryCovidInformation(covidDate){
	const covidUri = `${COVID_API}?date_from=${covidDate}&date_to=${covidDate}`;
	return axios.get(covidUri);
  }
}
