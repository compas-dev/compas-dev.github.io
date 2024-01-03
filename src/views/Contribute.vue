<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Contribute"
            summary="COMPAS is an open source and community-driven project. We welcome contributions of all kinds."
        >
        </page-header>
        <content-section>
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="4" v-for="(item, i) in contributions" :key="i" class="mb-4">
                        <v-card flat :border="true" rounded="0" class="py-4">
                            <v-card-title class="text-tertiary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-grey-darken-2">
                                {{ item.description }}
                            </v-card-text>
                            <v-card-actions v-for="(action, j) in item.actions" :key="j">
                                <v-btn flat :href="action.link">{{ action.title }}</v-btn>
                            </v-card-actions>
                        </v-card>
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
        contributions: [
            {
                title: "Code",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Documentation",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Forum",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Tutorials",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Examples",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Stars",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
            {
                title: "Donations",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur consectetur quasi repellendus consequuntur aliquid, veritatis officia ipsum quod provident illum, pariatur nemo facere minima aperiam sed est dolore maxime?",
                actions: [
                    {
                        title: "Learn More",
                        href: "#",
                    },
                ],
            },
        ],
    }),
};
</script>
