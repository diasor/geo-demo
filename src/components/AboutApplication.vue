<template>
  <v-card flat>
    <v-card-text>
      This application provides the list of the world countries. It allows the user to search for 
      countries and regions. For each country, the user can check the country's information:
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Information</v-list-item-title>
            <v-list-item-subtitle>- capital</v-list-item-subtitle>
            <v-list-item-subtitle>- region and subregion</v-list-item-subtitle>
            <v-list-item-subtitle>- population and area</v-list-item-subtitle>
            <v-list-item-subtitle>- flag</v-list-item-subtitle>
            <v-list-item-subtitle>- languages</v-list-item-subtitle>
            <v-list-item-subtitle>- timezones</v-list-item-subtitle>
            <v-list-item-subtitle>- borders</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Map</v-list-item-title>
            <v-list-item-subtitle>- Also the application shows an interactive map of the country.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>COVID Informantion</v-list-item-title>
            <v-list-item-subtitle>- The application is connected to an API that has online information about 
              COVID19 development per country. This information can be found on the main grid per country
              but also there is a full tab of COVID information on each country page.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-card-text>


    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Tools & Technologies:</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-item-group multiple>
            <v-item>
              <v-chip active-class="purple--text">Vue</v-chip>
            </v-item>
            <v-item>
              <v-chip active-class="purple--text">Vuex</v-chip>
            </v-item>
            <v-item>
              <v-chip active-class="purple--text">Vue Router</v-chip>
            </v-item>
            <v-item>
              <v-chip active-class="purple--text">Vuetify</v-chip>
            </v-item>
            <v-item>
              <v-chip active-class="purple--text">VueLayers</v-chip>
            </v-item>
            <v-item>
              <v-chip active-class="purple--text">REST Country API</v-chip>
            </v-item>
          </v-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: 'AboutApplication'
};
</script>