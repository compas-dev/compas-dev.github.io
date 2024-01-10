<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            summary="The computational framework for research and collaboration in Architecture, Engineering, Fabrication, and Construction."
            :image="compasLogo"
            :bg-color="smAndDown ? 'bg-grey-lighten-4' : 'bg-banner'"
        >
            <template v-slot:rows>
                <v-row :class="smAndDown ? 'my-4' : 'my-8'">
                    <v-col cols="12" class="d-flex flex-row justify-center">
                        <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'GettingStarted' }">
                            Getting Started
                        </v-btn>
                        <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'Packages' }"> Packages </v-btn>
                        <v-btn flat class="bg-primary text-white mx-2" :to="{ name: 'Workflows' }"> Workflows </v-btn>
                    </v-col>
                </v-row>

                <v-row class="justify-center">
                    <p class="text-secondary">
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
                            <v-card-title class="text-secondary">{{ item.title }}</v-card-title>
                            <v-card-text class="text-secondary flex-even">
                                {{ item.text }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </page-header>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="my-8 mb-16">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-secondary-lighten-2">Connecting the dots</h1>
                        <v-responsive max-width="840px" class="mx-auto">
                            <p
                                :class="
                                    (smAndDown ? 'text-h6' : 'text-h6') +
                                    ' font-weight-regular text-secondary-lighten-2 my-8'
                                "
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste architecto quae quis
                                aspernatur nisi maiores iusto ab, illum et quasi quisquam voluptas perspiciatis placeat
                                incidunt alias ea eius molestiae ipsam!
                            </p>
                        </v-responsive>
                        <v-responsive max-width="960px" max-height="720px" :aspect-ratio="16 / 9" class="mx-auto">
                            <div class="bg-blue-grey-lighten-4 w-100 h-100"></div>
                        </v-responsive>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-blue-grey-lighten-5">
            <template v-slot:content>
                <v-row :class="smAndDown ? 'my-4' : 'my-8'">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-secondary-lighten-2">Computation in AEC made simple</h1>
                    </v-col>
                </v-row>

                <v-row :class="smAndDown ? 'my-8' : 'my-16'" v-for="(item, i) in features" :key="i">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6">
                                <h2 class="text-h4 mb-4 text-primary">{{ item.title }}</h2>
                                <p class="text-h6 font-weight-regular text-secondary-lighten-2 mb-4">{{ item.text }}</p>
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
                                    <div class="bg-blue-grey-lighten-4 w-100 h-100"></div>
                                </v-responsive>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-secondary-lighten-2">Research-friendly, Industry-ready</h1>
                        <v-responsive max-width="840px" class="mx-auto">
                            <p
                                :class="
                                    (smAndDown ? 'text-h6' : 'text-h6') +
                                    ' font-weight-regular text-secondary-lighten-2 my-8'
                                "
                            >
                                Since its inception in 2013, COMPAS has not only been used for research but also in
                                practice for the computational design, planning and realisation of several transfer and
                                demonstrator projects, in collaboration with industry partners.
                            </p>
                        </v-responsive>
                    </v-col>
                </v-row>
                <v-row class="mb-16">
                    <v-col v-for="(project, i) in projects" :key="i" cols="12" md="3">
                        <v-card flat rounded="0" :border="true">
                            <div v-if="project.image" class="img-fix-container">
                                <v-img :src="project.image" class="img-fix"></v-img>
                            </div>
                            <div v-else class="img-fix-container">
                                <v-responsive max-width="1600px" max-height="900px" :aspect-ratio="16 / 9">
                                    <div class="bg-blue-grey-lighten-5 w-100 h-100"></div>
                                </v-responsive>
                            </div>
                            <v-card-title class="text-h6 text-secondary my-4">{{ project.title }}</v-card-title>
                            <!-- <v-card-text class="text-secondary">{{ project.text }}</v-card-text> -->
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-primary">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12">
                        <h1 class="text-h3 text-center text-secondary">Supported by</h1>
                    </v-col>
                </v-row>

                <v-row class="my-16 justify-center">
                    <v-col
                        v-for="item in sponsors"
                        :key="item.name"
                        class="d-flex align-self-center ma-8"
                        cols="6"
                        md="2"
                    >
                        <v-img :src="item.logo" :alt="item.name"></v-img>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<style></style>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import compas_features_ui from "@/assets/images/compas_features_ui.png";
import compas_features_cad from "@/assets/images/compas_features_cad.png";
import projects_dfab from "@/assets/images/projects_dfab-house.jpg";
import projects_hilo from "@/assets/images/projects_hilo-roof2.jpg";
import projects_striatus from "@/assets/images/projects_striatus.jpg";
import projects_knitcandela from "@/assets/images/projects_knitcandela.jpg";
import projects_knitnervi from "@/assets/images/projects_knitnervi.jpg";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        ContentSection,
        PageHeader,
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
                text: "COMPAS has a general-purpose core library with domain-specific extensions that can be used to develop computational solutions for a wide range of AEC problems.",
            },
            {
                title: "Performant",
                text: "COMPAS is written in pure Python, but hands off the heavy-lifting to external libraries (such as CGAL or Libigl) when performance matters.",
            },
        ],
        features: [
            {
                title: "Geometry Processing",
                text: "COMPAS has a geometry library that is independent of CAD software and can be used directly in your favourite Python environment to create, manipulate, and visualise geometric models.",
                image: null,
                link: "",
            },
            {
                title: "Data Management",
                text: "Add structured data to your models with COMPAS data structures, serialize to JSON, validate using schemas, and convert to industry formats such as IFC or STEP, without loss of information.",
                image: null,
                link: "",
            },
            {
                title: "Visualisation and UI Design",
                text: "COMPAS comes with a cross-platform viewer that allows you to quickly visualise what you are working on, or build custom UI prototypes to make your work available to others.",
                image: compas_features_ui,
                link: "",
            },
            {
                title: "CAD Integration",
                text: "For Blender, Rhino, and Grasshopper, specific integration packages are available that directly support the visualisation of COMPAS objects, provide conversions between COMPAS types and native CAD types, and simplify the development of custom tools and plugins.",
                image: compas_features_cad,
                link: "",
            },
        ],
        projects: [
            {
                title: "dfab House",
                text: null,
                image: projects_dfab,
                link: null,
            },
            {
                title: "HiLo",
                text: null,
                image: projects_hilo,
                link: null,
            },
            {
                title: "Striatus",
                text: null,
                image: projects_striatus,
                link: null,
            },
            {
                title: "SemiRamis",
                text: null,
                image: null,
                link: null,
            },
            {
                title: "KnitCandela",
                text: null,
                image: projects_knitcandela,
                link: null,
            },
            {
                title: "KnitNervi",
                text: null,
                image: projects_knitnervi,
                link: null,
            },
            {
                title: "MeshMould",
                text: null,
                image: null,
                link: null,
            },
        ],
    }),
    computed: {
        sponsors() {
            return this.$store.state.sponsors;
        },
        compasLogo() {
            return this.$store.state.logos.compasDefault;
        },
    },
    methods: {},
};
</script>
