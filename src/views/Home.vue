<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="COMPAS"
            summary="The computational framework for research and collaboration in Architecture, Engineering, Fabrication, and Construction."
        >
            <template v-slot:rows>
                <v-row :class="smAndDown ? 'my-4' : 'my-8'">
                    <v-col cols="12" class="d-flex flex-row justify-center">
                        <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'Packages' }"> Packages </v-btn>
                        <!-- <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'Tutorials' }"> Tutorials </v-btn> -->
                        <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'Workflows' }"> Workflows </v-btn>
                    </v-col>
                </v-row>

                <v-row class="justify-center">
                    <p class="text-grey-darken-2">
                        Current version 2.0
                        <v-icon size="4" class="mx-2 text-grey"> fa-solid fa-circle </v-icon>
                        <a href="https://www.github.com/compas-dev">Github</a>
                        <v-icon size="4" class="mx-2 text-grey"> fa-solid fa-circle </v-icon>
                        <a href="https://pypi.org/project/COMPAS/">PyPI</a>
                        <v-icon size="4" class="mx-2 text-grey"> fa-solid fa-circle </v-icon>
                        <a href="https://anaconda.org/conda-forge/compas">conda-forge</a>
                    </p>
                </v-row>

                <v-row :class="smAndDown ? 'my-8' : 'my-16'">
                    <v-col cols="12" md="3" v-for="(item, i) in properties" :key="i" class="d-flex flex-grow-1">
                        <v-card flat class="pa-4 pb-8" rounded="0">
                            <v-card-title class="text-tertiary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-grey-darken-2 flex-even">
                                {{ item.text }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </page-header>

        <!-- 

        * Expressive
        * Flexible and Robust
        * Open and Free

        * Work with NURBS and BReps anywhere
        * Combine structured data and geometry
        * Exchange data between environments
        * Collaborate with anyone
        * Build your own tools (RV3)
        * Unified syntax

        -->

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row :class="smAndDown ? 'my-4' : 'my-8'">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-primary">Computation in AEC made simple</h1>
                    </v-col>
                </v-row>

                <v-row :class="smAndDown ? 'my-8' : 'my-16'" v-for="(item, i) in features" :key="i">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6">
                                <h2 class="text-h4 mb-4 text-tertiary">{{ item.title }}</h2>
                                <p class="text-h6 font-weight-regular text-grey mb-4">{{ item.text }}</p>
                                <!-- <v-btn flat class="bg-primary text-white">More</v-btn> -->
                            </v-col>
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
                                    <div class="bg-grey-lighten-4 w-100 h-100"></div>
                                </v-responsive>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-grey-lighten-4">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-secondary">Connecting the dots</h1>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <!-- <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-secondary">Research-friendly, Industry-ready</h1>
                    </v-col>
                </v-row>
            </template>
        </content-section> -->

        <content-section bg-color="bg-secondary">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-white">Sponsors</h1>
                    </v-col>
                </v-row>

                <!-- <v-row class="my-16 justify-center">
                    <v-btn
                        v-for="item in sponsors"
                        :key="item.name"
                        :href="item.link"
                        target="_blank"
                        variant="plain"
                        density="compact"
                        class="pa-0 ma-4 logo"
                    >
                        <img :src="item.logo" height="24" :alt="item.name" />
                    </v-btn>
                </v-row>

                <v-row class="my-16">
                    <v-col cols="12" class="d-flex flex-row justify-center">
                        <v-btn flat class="bg-primary text-white mx-2" href="#">
                            Become a sponsor
                        </v-btn>
                    </v-col>
                </v-row> -->
            </template>
        </content-section>
    </v-container>
</template>

<style></style>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import compas_features_geometry from "@/assets/images/compas_features_geometry.png";
import compas_features_data from "@/assets/images/compas_features_data.png";
import compas_features_ui from "@/assets/images/compas_features_ui.png";
import compas_features_cad from "@/assets/images/compas_features_cad.png";

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
        properties: [
            {
                title: "Expressive",
                text: "COMPAS has an easy-to-learn, easy-to-use, expressive syntax that is consistent across operating systems, CAD software, and Python versions.",
            },
            {
                title: "Open source",
                text: "COMPAS is completely free and open source, and is released under the MIT licence and can therefore be used in both academic and commercial applications.",
            },
            {
                title: "Versatile",
                text: "COMPAS has a genera-purpose core library with domain-specific extensions that can be used to develop computational solutions for a wide range of AEC problems.",
            },
            {
                title: "Performant",
                text: "COMPAS is written in pure Python, but hands off the heavy-lifting to external libraries (such as CGAL or Libigl) when performance matters.",
            },
        ],
        features: [
            {
                title: "Geometry Processing",
                text: "COMPAS has a geometry library that is independent of CAD software and can be used to ...",
                image: "https://via.placeholder.com/1600x900",
                link: "",
            },
            {
                title: "Data Management",
                text: "Add structured data to your models with COMPAS data structures, serialize to JSON, validate using schemas, and convert to industry formats such as IFC or STEP, without loss of information.",
                image: "https://via.placeholder.com/1600x900",
                link: "",
            },
            {
                title: "Visualisation and UI Design",
                text: "COMPAS comes with a cross-platform viewer that allows you to quickly visualise what you are working on, or build custom UI prototypes to make your work available to others.",
                image: "https://via.placeholder.com/1600x900",
                link: "",
            },
            {
                title: "CAD Integration",
                text: "For Blender, Rhino, and Grasshopper, specific integration packages are available that directly support the visualisation of COMPAS objects, provide conversions between COMPAS types and native CAD types, and simplify the development of custom tools and plugins.",
                image: "https://via.placeholder.com/1600x900",
                link: "",
            },
        ],
    }),
    computed: {
        sponsors() {
            return this.$store.state.sponsors;
        },
    },
    methods: {},
};
</script>
