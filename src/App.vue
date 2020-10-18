<template>
  <v-app>
    <v-app-bar app color="primary" dark>
       <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div 
              class="d-flex align-center"  
              @click="gotToMainMenu"
              v-bind="attrs" 
              v-on="on"
            >
              <v-img
                alt="World app Logo"
                class="shrink mr-2"
                contain
                src="@/assets/world-country.svg"
                transition="scale-transition"
                width="50"
              />
            <div class="shrink mt-1 hidden-xs-and-down">
              <h3>COVID19 Tracker</h3>
            </div>
          </div>
        </template>
         <span>Go to the Main Country grid page</span>
       </v-tooltip>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            @click="gotToOverViewMenu" 
            text
            v-bind="attrs" 
            v-on="on"
          >
            <span>COVID19 Overview</span>
          </v-btn>
        </template>
         <span>Go to the COVID19 Overview page</span>
      </v-tooltip>
      <v-btn @click="goToAbout" text>
        <span>About</span>
      </v-btn>

      <v-btn href="https://github.com/diasor/geo-demo/releases/latest" target="_blank" text>
        <span class="shrink hidden-sm-and-down mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    gotToMainMenu() {
      this.$router.push({ path: '/' });
    },

    gotToOverViewMenu() {
      this.$router.push({ path: '/covid-overview' });
    },

    goToAbout() {
      this.$router.push({ path: '/about' });
    }
  }
};
</script>
