<template>
    <v-footer class="bg-primary py-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="mb-8">
                        <!-- <v-btn variant="plain" class="text-white text-none">
                            <template v-slot:prepend>
                                <v-icon><img :src="logos.compas.src" height="32" class="mr-4" /></v-icon>
                            </template>
                            COMPAS.dev
                        </v-btn> -->
                        <router-link to="/" class="text-white text-none">COMPAS</router-link>
                    </div>
                    <div class="mb-8">
                        <p class="text-white">
                            The Computational Framework for Research and Collaboration in Architecture, Engineering,
                            Fabrication, and Construction.
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
                    <p class="text-white">Copyright © 2009-2023 COMPAS Association.</p>
                </v-col>
                <v-col cols="12" md="6"> </v-col>
            </v-row>

            <!-- <v-row class="my-16">
                <v-col cols="12" md="10" class="mx-auto">
                    <h2 class="text-h4 text-none">Contact</h2>
                    <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">COMPAS Association</p>
                    <p class="text-h6 text-grey-darken-2 font-weight-regular">8000 Zurich</p>
                    <p class="text-h6 text-grey-darken-2 font-weight-regular">Switzerland</p>
                    <p class="text-h6 text-grey-darken-2 font-weight-regular mt-8">
                        <a href="mailto:association@compas.dev" class="text-primary"> association@compas.dev </a>
                    </p>
                </v-col>
            </v-row> -->
        </v-container>
    </v-footer>
</template>

<style scoped></style>

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
    },
};
</script>
