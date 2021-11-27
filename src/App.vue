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
              <h3 class="shrink">COVID19 Tracker</h3>
          </div>
        </template>
         <span>Go to the Main Country grid page</span>
       </v-tooltip>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="pr-0"
            @click="gotToOverViewMenu" 
            text
            v-bind="attrs" 
            v-on="on"
          >
            <span class="shrink">Overview</span>
          </v-btn>
        </template>
         <span>Go to the COVID19 Overview page to see the current graph</span>
      </v-tooltip>
      <v-btn
        class="pr-0"
        @click="goToAbout" 
        text
      >
        <span>About</span>
      </v-btn>

      <v-btn
        class="text-small-devices"
        href="https://github.com/diasor/geo-demo/releases/latest" 
        target="_blank" 
        text
      >
        <span class="shrink hidden-sm-and-down mr-2">Latest Release</span>
        <v-icon class="release-icon">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="d-flex flex-wrap">
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

<style lang="scss">
	.text-small-devices {
		display: none !important;
		width: 0 !important;

		@media screen and (min-width: 450px) {
			display: flex !important;
			width: auto !important;
		}
	}

	.release-icon {
		padding-left: 5px;
	}

	.v-item-group {
		// height: 0;
		padding-left: 0 !important;
		justify-content: flex-start !important;
		// overflow: hidden;
		// font-weight: bold;
	}
</style>