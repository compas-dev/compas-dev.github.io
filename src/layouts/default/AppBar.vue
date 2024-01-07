<template>
    <v-app-bar app light flat color="white" :border="false" scroll-behavior="hide" class="bg-primary">
        <v-container class="d-flex mx-auto align-center pl-0 pl-md-4">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"> </v-app-bar-nav-icon>

            <router-link to="/" class="d-flex">
                <img :src="logos.compas.src" height="36" class="mr-4" />
            </router-link>

            <v-app-bar-title class="text-none text-white">
                <router-link to="/" class="text-decoration-none text-white"> COMPAS </router-link>
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <v-btn
                v-for="item in navigation"
                :key="item"
                :to="item.items.length > 0 ? null : item.link"
                variant="text"
                rounded="0"
                class="d-none d-md-flex text-none text-white"
            >
                {{ item.title }}

                <v-icon v-if="item.items.length > 0" class="ml-2" size="x-small"> fa-solid fa-chevron-down </v-icon>

                <v-menu
                    v-if="item.items.length > 0"
                    activator="parent"
                    :open-on-click="true"
                    class="rounded-0"
                    elevation="0"
                >
                    <v-list class="rounded-0">
                        <v-list-item v-for="subitem in item.items" :key="subitem" :to="subitem.link">
                            <v-list-item-title class="text-body-2">{{ subitem.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>

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
            <!-- <v-list-item title="Home" :to="{ name: 'Home' }"></v-list-item> -->
            <template v-for="item in navigation" :key="item">
                <v-list-item link v-if="item.items.length == 0" :to="item.link">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-group v-if="item.items.length > 0">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" :title="item.title"></v-list-item>
                    </template>

                    <v-list-item v-for="subitem in item.items" :key="subitem" :to="subitem.link">
                        <v-list-item-title>{{ subitem.title }}</v-list-item-title>
                    </v-list-item>
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

            navigation: [
                {
                    link: "/documentation",
                    title: "Documentation",
                    items: [
                        {
                            link: "/documentation/packages",
                            title: "Packages",
                            items: [],
                        },
                        {
                            link: "/documentation/tutorials",
                            title: "Tutorials",
                            items: [],
                        },
                        {
                            link: "/documentation/workflows",
                            title: "Workflows",
                            items: [],
                        },
                    ],
                },
                {
                    link: "/association",
                    title: "Association",
                    items: [],
                },
                {
                    link: "/contribute",
                    title: "Contribute",
                    items: [],
                },
            ],
        };
    },
    computed: {
        logos() {
            return this.$store.state.logos;
        },
        social() {
            return this.$store.state.social;
        },
    },
};
</script>
