<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Make a Donation"
            summary=""
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        >
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
