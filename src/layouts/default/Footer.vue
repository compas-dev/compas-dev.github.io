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
                    <p class="text-secondary-lighten-3">Copyright © 2009-2023 COMPAS Association.</p>
                </v-col>

                <!-- <v-col cols="12" md="4" class="mb-8 px-8">
                    <h2 class="text-h5 text-white">Become a Sponsor</h2>
                    <p class="text-secondary-lighten-3 mt-4 mb-8">
                        We are a non-profit organization and rely on donations to support our community. If you like
                        what we do, please consider making a donation.
                    </p>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1OWlxEHIF4n6OhmA7oHNuQwz"
                        publishable-key="pk_live_51OTNB9HIF4n6OhmAd2hChJJlyu1ODHpVn14H3itQuN4TnbElFm3TNOSKKhgdFa3Vd5xOzuVaB8LsXnTFwmKKbs6400ceDrL7RU"
                    >
                    </stripe-buy-button>
                </v-col> -->

                <!-- <v-col cols="12" md="4" class="mb-8 px-8">
                    <h2 class="text-h5 text-white">Become a Member</h2>
                    <p class="text-secondary-lighten-3 mt-4 mb-8">
                        Are you passionate about computational architecture and digital fabrication? Then become part of
                        an international network of enthousiasts to share your knowledge and expertise. Together we
                        promote the vision of a complete, free, open source, and cross-platform computational framework
                        for AEC.
                    </p>
                    <v-btn
                        flat
                        class="bg-secondary-lighten-5 text-secondary"
                        href="https://forms.gle/W5cWw5LCWzbmCXm69"
                    >
                        Join <v-icon size="x-small" class="ml-2 align-self-center"> fa-solid fa-external-link </v-icon>
                    </v-btn>
                </v-col> -->
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
