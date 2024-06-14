<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Get Involved"
            summary="COMPAS is an open source and community-driven project. We welcome contributions of all kinds."
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        >
            <!-- <template v-slot:rows>
                <v-row class="mt-16 justify-center">
                    <v-col cols="12" md="3" class="d-flex flex-even" v-for="(item, i) in everyone" :key="i">
                        <v-card flat class="pa-4 pb-8" rounded="0">
                            <v-card-title class="text-secondary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-secondary flex-grow-1">
                                {{ item.description }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </template> -->
        </page-header>

        <content-section bg-color="bg-blue-grey-lighten-5">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6" order="2">
                                <v-card elevation="10">
                                    <v-img :src="images.develpment" alt="COMPAS development" class=""></v-img>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6" class="pa-8 px-16" order="1">
                                <h2 class="text-h4 mb-4 text-primary">Development</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">
                                    There are many ways to get involved in the further development of the COMPAS
                                    framework. Check out the dev guide for more information.
                                </p>
                                <v-btn
                                    class="bg-primary text-white"
                                    href="https://compas.dev/compas/latest/devguide/"
                                    target="_blank"
                                >
                                    Developer Guide
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section>
            <template v-slot:content>
                <v-row class="my-8 align-center">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6" order="1">
                                <v-card elevation="10">
                                    <v-img :src="images.documentation" alt="COMPAS documentation" class=""></v-img>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6" class="pa-8 px-16" order="2">
                                <h2 class="text-h4 mb-4 text-primary">Documentation</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">
                                    User guides, Developer guides, Tutorials, API reference, Examples, ... Without good
                                    documentation a framework cannot be useful to the community. If you have some
                                    experience with technical writing, we could use your help.
                                </p>
                                <v-btn
                                    class="bg-primary text-white"
                                    href="https://compas.dev/compas/latest/devguide/"
                                    target="_blank"
                                >
                                    Developer Guide
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-blue-grey-lighten-5">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row class="align-center">
                            <v-col cols="12" md="6" order="2">
                                <v-img
                                    :src="images.website"
                                    alt="COMPAS website"
                                    class="w-100 h-100 d-flex align-center"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" md="6" class="pa-8 px-16" order="1">
                                <h2 class="text-h4 mb-4 text-primary">Website</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">
                                    The COMPAS website needs constant updating and maintenance. If you have some
                                    experience with web development, and would like to help out, please have a look at
                                    the website repo.
                                </p>
                                <v-btn
                                  class="bg-primary text-white"
                                  href="https://github.com/compas-dev/compas-dev.github.io"
                                  target="_blank"
                                >
                                  Website repo
                              </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section>
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6" order="1">
                                <v-card elevation="10">
                                    <v-img :src="images.graphics" alt="COMPAS graphics"></v-img>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="6" class="pa-8 px-16 flex-even" order="2">
                                <h2 class="text-h4 mb-4 text-primary">Graphics</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">
                                    Logos, icons, illustrations, ... We are always looking for ways to improve the
                                    visual identity of the COMPAS framework. If you have some experience with graphic
                                    design, check out the graphics repo.
                                </p>
                                <v-btn
                                    class="bg-primary text-white"
                                    href="https://github.com/compas-dev/compas-graphics"
                                    target="_blank"
                                >
                                    Graphics repo
                                </v-btn>
                            </v-col>
                        </v-row>
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
import compas_website_png from "@/assets/COMPAS_website.png";
import compas_documentation_png from "@/assets/COMPAS_documentation.png";
import compas_development_jpg from "@/assets/COMPAS_background_image.jpg";
import compas_graphics_png from "@/assets/COMPAS_graphics.png";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        PageHeader,
        ContentSection,
    },
    methods: {},
    data: () => ({
        images: {
            develpment: compas_development_jpg,
            documentation: compas_documentation_png,
            website: compas_website_png,
            graphics: compas_graphics_png,
        },
        everyone: [
            {
                title: "Star us on Github",
                description:
                    "As developers of open source software, we like stars; it is silly but undeniable. If you use COMPAS packages in your work, consider adding a star to the corresponding repo on Github!",
                actions: [],
            },
            {
                title: "Become a Member",
                description:
                    "Help grow the community by becoming a member of the COMPAS Association. As a member, you will be able to vote on important decisions and help shape the future of the project.",
                actions: [],
            },
            {
                title: "Make a Donation",
                description:
                    "We are a non-profit organization and rely on donations to finance the allocation of resources to the maintenance and further development of the COMPAS framework infrastructure.",
                actions: [],
            },
        ],
    }),
};
</script>
