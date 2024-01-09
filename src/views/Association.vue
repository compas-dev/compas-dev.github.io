<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="The Association"
            summary="Ensuring a complete, free, open source, and cross-platform computational framework for interdisciplinary research and collaboration in AEC."
        >
            <template v-slot:rows>
                <v-row>
                    <v-col cols="12" class="d-flex flex-row justify-center">
                        <v-btn flat class="bg-primary text-white mx-2" href="#"> Become a Member </v-btn>
                    </v-col>
                </v-row>
            </template>
        </page-header>

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 class="text-h3 text-tertiary">About Us</h2>
                        <p class="text-h6 text-secondary-lighten-2 font-weight-regular mt-8">
                            The COMPAS Association is an independent public benefit organisation founded on March 2023
                            in Zurich, Switzerland, with the purpose to provide a complete, free, open source, and
                            cross-platform computational framework for interdisciplinary research and collaboration in
                            the Architecture, Engineering and Construction industry, managed by public projects on
                            compas.dev.
                        </p>
                        <h2 class="text-h3 text-tertiary mt-16">Our Goals</h2>
                        <ul class="text-h6 text-secondary-lighten-2 font-weight-regular my-8 pl-8">
                            <li>Maintain and further develop the core library of COMPAS.</li>
                            <li>Maintain and further develop the core extensions of COMPAS.</li>
                            <li>
                                Ensure the continued availability of the core library with a permissive open source
                                licence.
                            </li>
                            <li>
                                Maintain the technical infrastructure required for the development and deployment of
                                COMPAS.
                            </li>
                            <li>Provide support for development of 3rd party extensions.</li>
                            <li>Organise events and meetups for the academic community and professional practice.</li>
                            <li>
                                Promote the adoption of COMPAS in academia and professional practice through the
                                publication of educational materials, workshops and other outreach activities.
                            </li>
                        </ul>
                        <!-- <v-btn flat class="bg-primary text-white mx-2" href="#"> Read the Articles </v-btn> -->
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <!-- <content-section bg-color="bg-grey-lighten-4">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(item, index) in mission" :key="index">
                                <v-card flat rounded="0" class="d-flex flex-column align-center bg-transparent mx-4">
                                    <v-avatar size="240">
                                        <v-img :src="item.image" cover> </v-img>
                                    </v-avatar>
                                    <v-card-title>{{ item.title }}</v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section> -->

        <content-section bg-color="bg-grey-lighten-4">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 class="text-h3 text-primary text-center">The Team</h2>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(item, index) in team" :key="index">
                                <v-card
                                    flat
                                    rounded="0"
                                    class="d-flex flex-column align-center bg-transparent mx-4 mb-8"
                                >
                                    <v-avatar size="240">
                                        <v-img :src="item.image" cover> </v-img>
                                    </v-avatar>
                                    <v-card-title class="font-weight-regular text-secondary">{{
                                        item.name
                                    }}</v-card-title>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-secondary">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto align-center justify-center text-center">
                        <h2 class="text-h3 text-white">Become a Member</h2>
                        <p class="text-h6 text-white font-weight-regular mt-8">
                            Are you passionate about topics in the field of architecture and digital fabrication? Then
                            become part of an international network to acquire and share knowledge and expertise around
                            the fields. Together we promote the vision of a complete, free, open source, and
                            cross-platform computational framework for AEC, and become active by participating in
                            projects.
                        </p>
                        <p class="text-h6 text-white font-weight-regular mt-8">
                            Become a member to help drive our vision forward!
                        </p>
                        <v-btn flat class="bg-white text-secondary mt-8" href="#"> Become a Member </v-btn>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        PageHeader,
        ContentSection,
    },
    data: () => ({
        mission: [
            {
                title: "Open and community-driven",
                image: "https://via.placeholder.com/640x360",
            },
            {
                title: "Research-oriented and industry-ready",
                image: "https://via.placeholder.com/640x360",
            },
            {
                title: "Comprehensive yet simple",
                image: "https://via.placeholder.com/640x360",
            },
        ],
        team: [
            {
                name: "Tom Van Mele",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Kathrin Dörfler",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Chen Kasirer",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Romana Rust",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Li Chen",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "Gonzalo Casas",
                image: "https://via.placeholder.com/640x360",
            },
        ],
    }),
};
</script>
