<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header title="Tutorials" summary="Learn the basics with our tutorials."></page-header>
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
