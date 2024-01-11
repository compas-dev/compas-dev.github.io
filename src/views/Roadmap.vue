<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Roadmap"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
            <template v-slot:rows> </template>
        </page-header>

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto"> </v-col>
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
    data: () => ({}),
};
</script>
