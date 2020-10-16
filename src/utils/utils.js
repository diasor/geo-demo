export function getPopulationColor(population) {
  if (population > 60000000) return "red"
  else if (population > 50000000) return "purple"
  else if (population > 15000000) return "blue"
  else if (population > 10000000) return "orange"
  else if (population > 5000000) return "yellow"
  else return "green"
}
