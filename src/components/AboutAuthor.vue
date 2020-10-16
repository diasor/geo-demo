<template>
  <v-card flat class="pa-2">
    <v-card-text class="mb-0 pb-0">
      <p>
        My name is Diana Sormani and I am a Software Engineer with 15 years of experience
        developing software. I am originally from Uruguay! Love my country. Although I'm living in the Netherlands.
      </p>

      <p>
        Currently I am focusing on Front-End development and I am loving it. I have been working
        a lot with
        <a
          href="(https://vuejs.org/"
        >Vue</a>, a lot of CSS and ES6. I also worked with
        <a href="https://graphql.org/">GraphQL</a>
        as well as REST services. I like researching new techonolgies and checking out what is
        out there and what other people is doing.
      </p>

      <p>
        I also have a lot of experience with automated testing for Front-End. Particularly with
        <a
          href="https://jestjs.io/"
        >Jest</a> and
        <a href="https://vue-test-utils.vuejs.org/">Vue Test Utils</a>.
        I've played around with Cypress and WebdriverIO.
        <br />In my humble opinion, automated testing is super useful and should be a MUST. But is not
        yet able to replace manual testing... So that still needs to be done.
      </p>

      <p>
        I normally work on Agile environments, so I am familiar with the process. I normally follow
        and promote GitFlow.
        <br />I also have experience setting up CI/CD pipelines on GitLab, though to be honest is not
        my favorite part ;)
      </p>

      <p>Anyhow, if you are interested on my work, check out my Linkedin page.</p>
    </v-card-text>
    <v-list class="pt-0 pr-0">
      <v-list-item class="pt-0 pr-0">
        <v-list-item-avatar color="primary" size="40">
          <img max-width="40" src="../assets/myAvatar.svg" alt="Diana Sormani" />
        </v-list-item-avatar>
        <v-list-item-icon>
          <v-icon large color="blue" @click="goToLinkedin()">mdi-linkedin</v-icon>
        </v-list-item-icon>
        <v-list-item-icon>
          <v-icon large color="dark" @click="goToGithub()">mdi-github</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item class="mt-0 pt-0">
        <v-list-item-title class="mt-0 pt-0">
          <strong>Diana Sormani</strong>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'AboutAuthor',

  methods: {
    goToLinkedin() {
      window.open('https://www.linkedin.com/in/dianasormani/');
    },

    goToGitHub() {
      window.open('https://github.com/diasor/');
    }
  }
};
</script>