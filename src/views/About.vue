<template>
  <v-card min-width="600" class="ma-2 pl-10 pr-10 pb-2 pt-2">
    <v-tabs v-model="tab">
      <v-tab>
        <v-card-title class="pb-0">About the Application</v-card-title>
        <v-divider class="ma-0"></v-divider>
      </v-tab>
      <v-tab>
        <v-card-title class="pb-0">About the Author</v-card-title>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <about-application />
      </v-tab-item>
      <v-tab-item>
        <about-author />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import AboutApplication from '@/components/AboutApplication.vue';
import AboutAuthor from '@/components/AboutAuthor.vue';
export default {
  name: 'About',

  components: {
    AboutApplication,
    AboutAuthor
  },

  data: () => ({
    tab: null
  })
};
</script>

