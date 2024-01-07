<template>
    <content-section :bg-color="smAndDown ? 'bg-banner' : 'bg-grey-lighten-4'">
        <template v-slot:content>
            <v-row class="pb-16">
                <v-col cols="12" class="text-center">
                    <h1 :class="(smAndDown ? 'text-h2' : 'text-h1') + ' text-primary text-center font-weight-light'">
                        {{ title }}
                    </h1>
                    <v-responsive max-width="720px" class="mx-auto">
                        <p :class="(smAndDown ? 'text-h5' : 'text-h4') + ' font-weight-light text-grey mt-8'">
                            {{ summary }}
                        </p>
                    </v-responsive>
                </v-col>
            </v-row>

            <slot name="rows"></slot>
        </template>
    </content-section>
</template>

<script>
import { useDisplay } from "vuetify";
import ContentSection from "@/components/ContentSection.vue";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    name: "PageHeader",
    components: {
        ContentSection,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        summary: {
            type: String,
            default: "",
        },
    },
};
</script>
