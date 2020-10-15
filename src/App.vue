<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="World app Logo"
          class="shrink mr-2"
          contain
          src="@/assets/happy-world-2.svg"
          transition="scale-transition"
          width="50"
        />

        <div class="shrink mt-1 hidden-sm-and-down" @click="backToMainMenu">
          <h3>World Geo Information</h3>
        </div>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/diasor/geo-demo/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
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
// import CountryList from './views/CountryList';

export default {
  name: "App",

  methods: {
    backToMainMenu() {
      this.$router.push({ path: "/" })
    },
  },
}
</script>
