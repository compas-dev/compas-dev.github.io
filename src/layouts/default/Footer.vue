<template>
  <v-footer class="bg-secondary py-16">
    <v-container class="constrained">
      <v-row class="my-8">
        <v-col cols="12" md="4" class="mb-8 px-8">
          <div class="mb-8">
            <router-link to="/" class="d-flex">
              <img :src="logos.compasDefaultWhite.src" height="36" class="mr-4" />
            </router-link>
          </div>
          <div class="mb-8">
            <p class="text-secondary-lighten-3">
              The Computational Framework for Research and Collaboration in Architecture, Engineering, Fabrication, and
              Construction.
            </p>
          </div>
          <div class="mb-8">
            <v-btn
              icon
              v-for="item in social"
              :key="item.name"
              :href="item.link"
              target="_blank"
              density="comfortable"
              variant="plain"
              class="text-white"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </div>
          <p class="text-secondary-lighten-3">Copyright © 2009-2023 COMPAS Association.</p>
        </v-col>

        <v-col cols="12" md="4" class="mb-8 px-8">
          <h2 class="text-h5 text-white mb-8">compas.dev</h2>
          <v-list variant="plain" density="compact" class="bg-transparent text-secondary-lighten-5 pa-0 ma-0 mb-8">
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Home' }"> Home </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'GettingStarted' }">
              Getting Started
            </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Packages' }"> Packages </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Tutorials' }"> Tutorials </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Association' }">
              Association
            </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Contribute' }"> Contribute </v-list-item>
            <v-list-item class="pa-0 ma-0 mb-1" :min-height="0" :to="{ name: 'Donate' }"> Donate </v-list-item>
          </v-list>

          <v-list variant="plain" density="compact" class="bg-transparent text-secondary-lighten-5 pa-0 ma-0 mb-8">
            <v-list-item class="pa-0 ma-0 mb-1 d-flex" :min-height="0" href="https://compas.dev/compas" target="_blank">
              COMPAS Core Library
              <font-awesome-icon
                :icon="['far', 'arrow-up-right-from-square']"
                class="ml-2 align-self-center"
                size="xs"
              />
            </v-list-item>
            <v-list-item
              class="pa-0 ma-0 mb-1 d-flex"
              :min-height="0"
              href="https://forum.compas-framework.org/"
              target="_blank"
            >
              COMPAS Forum
              <font-awesome-icon
                :icon="['far', 'arrow-up-right-from-square']"
                class="ml-2 align-self-center"
                size="xs"
              />
            </v-list-item>
            <v-list-item
              class="pa-0 ma-0 mb-1 d-flex"
              :min-height="0"
              href="https://compas.dev/compas-jupyterlite"
              target="_blank"
            >
              COMPAS Notebook
              <font-awesome-icon
                :icon="['far', 'arrow-up-right-from-square']"
                class="ml-2 align-self-center"
                size="xs"
              />
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="4" class="mb-8 px-8">
          <h2 class="text-h5 text-white mb-8">Connecting the dots</h2>
          <p class="text-secondary-lighten-3 mt-4 mb-8">
            In AEC, adoption of academic research in professional practice remains slow, despite the obvious need for
            innovation to make our built environment more sustainable.
          </p>
          <p class="text-secondary-lighten-3 mt-4 mb-8">
            COMPAS aims to facilitate and accelerate this process by aligning research-oriented workflows with
            industry-standard tools and practices, by simplifying the use of all the computational resources at our
            disposal, and by providing a platform for all members of our community to transparently share their work and
            build upon the work of others.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style>
.border-top {
  border-top: 1px solid rgb(var(--v-theme-secondary-lighten-2));
}
</style>

<script setup>
//
</script>

<script>
export default {
  data: () => ({}),

  computed: {
    logos() {
      return this.$store.state.logos;
    },
    social() {
      return this.$store.state.social;
    },
    navigation() {
      return this.$store.state.navigation;
    },
  },
};
</script>
