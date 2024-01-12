<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Tutorials"
            summary="Short tutorials for typical AEC problems and tasks."
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        ></page-header>

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row class="mb-16" v-for="(item, i) in tutorials" :key="i">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-responsive
                                    v-if="item.image"
                                    max-width="1600px"
                                    max-height="900px"
                                    :aspect-ratio="16 / 9"
                                >
                                    <img :src="item.image" :alt="item.title" class="w-100 h-100" />
                                </v-responsive>
                                <v-responsive v-else max-width="1600px" max-height="900px" :aspect-ratio="16 / 9">
                                    <div class="bg-blue-grey-lighten-5 w-100 h-100"></div>
                                </v-responsive>
                            </v-col>
                            <v-col cols="12" md="6">
                                <h2 class="text-h4 mb-4 text-primary">{{ item.title }}</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-8">{{ item.text }}</p>
                                <v-btn flat class="bg-primary" :href="item.link" target="_blank"
                                    >Visit repo<v-icon size="x-small" class="ml-2 align-self-center">
                                        fa-solid fa-external-link
                                    </v-icon></v-btn
                                >
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
        tutorials: [
            {
                title: "COMPAS for Geometry Processing",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/geometry-processing",
            },
            {
                title: "COMPAS for Structural Form Finding",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/form-finding",
            },
            {
                title: "COMPAS for Robotic Fabrication",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/robotic-fabrication",
            },
            {
                title: "COMPAS for 3D Printing",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/3d-printing",
            },
            {
                title: "COMPAS for Building Information Modelling",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/building-information-modelling",
            },
            {
                title: "COMPAS for Finite Element Analysis",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab incidunt praesentium fugit. Totam numquam vel, tempore magnam dicta obcaecati mollitia nobis repellendus, nisi eos commodi possimus.",
                image: null,
                link: "https://www.github.com/compas-dev/tutorials/tree/master/finite-element-analysis",
            },
        ],
    }),
};
</script>
