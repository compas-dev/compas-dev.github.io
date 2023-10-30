<template>
    <v-footer class="bg-grey-lighten-4 py-16">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <div class="mb-8">
                        <v-btn variant="plain" class="text-grey text-none">
                            <template v-slot:prepend>
                                <v-icon
                                    ><img
                                        :src="logos.compas.src"
                                        height="32"
                                        class="mr-4"
                                /></v-icon>
                            </template>
                            compas.dev
                        </v-btn>
                    </div>
                    <div class="mb-8">
                        <p class="text-grey">
                            The Computational Framework for Research and
                            Collaboration in Architecture, Engineering,
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
                            class="text-grey"
                        >
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-btn>
                    </div>
                    <p class="text-grey">
                        Copyright © 2009-2023 COMPAS Association.
                    </p>
                </v-col>
                <v-col cols="12" md="6"> </v-col>
            </v-row>
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
