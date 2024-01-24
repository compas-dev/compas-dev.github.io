<template>
  <v-app-bar app light flat color="white" :border="false" scroll-behavior="hide" :absolute="false" class="bg-primary">
    <v-container class="constrained d-flex mx-auto align-center pl-0 pl-md-4">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"> </v-app-bar-nav-icon>

      <router-link to="/" class="d-flex">
        <img :src="logos.compasDefaultWhite.src" height="36" class="mr-4" />
      </router-link>

      <v-spacer></v-spacer>

      <template v-for="item in navigation" :key="item">
        <v-btn
          v-if="item.link.startsWith('http')"
          class="d-none d-md-flex text-none text-white"
          :href="item.link"
          target="_blank"
        >
          {{ item.title }}
          <font-awesome-icon :icon="['far', 'arrow-up-right-from-square']" class="ml-2 align-self-center" size="xs" />
        </v-btn>
        <v-btn
          v-else
          :to="item.items.length > 0 ? null : item.link"
          :variant="item.title == 'Donate' ? 'elevated' : 'text'"
          :rounded="item.title == 'Donate' ? 'md' : '0'"
          :color="item.title == 'Donate' ? 'white' : 'white'"
          :class="'d-none d-md-flex text-none ' + (item.title == 'Donate' ? 'text-primary' : 'text-white')"
        >
          {{ item.title }}

          <font-awesome-icon
            :icon="['far', 'chevron-down']"
            v-if="item.items.length > 0"
            class="ml-2 align-self-center"
            size="xs"
          />

          <v-menu v-if="item.items.length > 0" activator="parent" :open-on-click="true" class="rounded-0" elevation="0">
            <v-list class="rounded-0 text-secondary" density="compact" nav>
              <template v-for="subitem in item.items" :key="subitem">
                <v-list-item
                  v-if="subitem.link && subitem.link.startsWith('http')"
                  :href="subitem.link"
                  target="_blank"
                >
                  <v-list-item-title class="d-flex">
                    {{ subitem.title }}
                    <font-awesome-icon
                      :icon="['far', 'arrow-up-right-from-square']"
                      class="ml-2 align-self-center"
                      size="xs"
                    />
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-else :to="subitem.link">
                  <v-list-item-title class="d-flex">
                    {{ subitem.title }}
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </v-btn>
      </template>

      <span class="mx-4"></span>

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
    </v-container>
  </v-app-bar>

  <v-navigation-drawer temporary app light v-model="drawer">
    <v-list>
      <template v-for="item in navigation" :key="item">
        <template v-if="item.items.length == 0">
          <v-list-item v-if="item.link.startsWith('http')" link :href="item.link" target="_blank">
            <v-list-item-title>
              {{ item.title }}
              <font-awesome-icon :icon="['far', 'arrow-up-right-from-square']" class="ml-2 align-self-center" size="xs"
            /></v-list-item-title>
          </v-list-item>
          <v-list-item v-else link :to="item.link">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-group v-if="item.items.length > 0">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.title"></v-list-item>
          </template>

          <template v-for="subitem in item.items" :key="subitem">
            <v-list-item v-if="subitem.link.startsWith('http')" :href="subitem.link" target="_blank">
              <v-list-item-title class="d-flex">
                {{ subitem.title }}
                <font-awesome-icon
                  :icon="['far', 'arrow-up-right-from-square']"
                  class="ml-2 align-self-center"
                  size="xs"
                />
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-else :to="subitem.link">
              <v-list-item-title class="d-flex">
                {{ subitem.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
//
</script>

<script>
export default {
  data: () => {
    return {
      drawer: false,
    };
  },
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
