<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Contribute to COMPAS"
            summary="COMPAS is an open source and community-driven project. We welcome contributions of all kinds."
        >
            <template v-slot:rows>
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
            </template>
        </page-header>

        <content-section>
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-secondary-lighten-2" id="core-extensions">Coders</h1>
                    </v-col>
                </v-row>
                <v-row class="my-8">
                    <v-col cols="12" md="3" class="d-flex flex-even" v-for="(item, i) in coders" :key="i">
                        <v-card flat class="pa-4 pb-8 bg-blue-grey-lighten-4 w-100 flex-grow-1" rounded="0">
                            <v-card-title class="text-secondary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-secondary flex-grow-1">
                                {{ item.description }}
                            </v-card-text>
                            <v-card-actions v-for="(action, j) in item.actions" :key="j">
                                <v-btn flat :href="action.link" class="text-secondary">{{ action.title }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <!-- </template>
        </content-section>

        <content-section>
            <template v-slot:content> -->
                <v-row class="mt-16">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-secondary-lighten-2" id="core-extensions">NonCoders</h1>
                    </v-col>
                </v-row>
                <v-row class="my-8 justify-center">
                    <v-col cols="12" md="3" class="d-flex flex-even" v-for="(item, i) in noncoders" :key="i">
                        <v-card flat class="pa-4 pb-8 bg-blue-grey-lighten-4 w-100 flex-grow-1" rounded="0">
                            <v-card-title class="text-secondary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-secondary flex-grow-1">
                                {{ item.description }}
                            </v-card-text>
                            <v-card-actions v-for="(action, j) in item.actions" :key="j">
                                <v-btn flat :href="action.link" class="text-secondary">{{ action.title }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <!-- <content-section>
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="4" v-for="(item, i) in contributions" :key="i" class="mb-4">
                        <v-card flat :border="true" rounded="0" class="py-4">
                            <v-card-title class="text-secondary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-secondary-lighten-2">
                                {{ item.description }}
                            </v-card-text>
                            <v-card-actions v-for="(action, j) in item.actions" :key="j">
                                <v-btn flat :href="action.link" class="text-secondary">{{ action.title }}</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </content-section> -->
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
        coders: [
            {
                title: "Report a Bug",
                description:
                    "If you find a bug in one of the COMPAS packages, please report it on the corresponding Github repository.",
                actions: [],
            },
            {
                title: "Write a Test",
                description:
                    "We aim for 100% test coverage of the code base. We know it's boring, but please consider writing a test for one of the packages.",
                actions: [],
            },
            {
                title: "Add a Feature",
                description: "",
                actions: [],
            },
            {
                title: "Develop an Extension",
                description: "",
                actions: [],
            },
        ],
        noncoders: [
            {
                title: "Write a Tutorial",
                description:
                    "We are always looking for new tutorials to add to the documentation. If you have a good idea for a tutorial, please let us know.",
                actions: [],
            },
            {
                title: "Website",
                description: "",
                actions: [],
            },
            {
                title: "Graphics",
                description: "",
                actions: [],
            },
        ],
    }),
};
</script>
