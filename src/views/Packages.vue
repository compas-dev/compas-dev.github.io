<template>
    <v-container fluid class="pa-0 ma-0 pb-16">
        <content-section :bg-color="smAndDown ? 'bg-grey-lighten-4' : 'bg-grey-lighten-4'">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1
                            :class="(smAndDown ? 'text-h2' : 'text-h1') + ' text-primary text-center font-weight-light'"
                        >
                            Packages
                        </h1>
                        <v-responsive max-width="840px" class="mx-auto">
                            <p :class="(smAndDown ? 'text-h5' : 'text-h4') + ' font-weight-light text-grey mt-8'">
                                The COMPAS framework consists of a core library with all base functionality and a
                                collection of extensions for specific tasks. If you're new to COMPAS, the
                                <a href="https://compas.dev/compas" target="_blank">core library</a> is the place to
                                start.
                            </p>
                        </v-responsive>
                    </v-col>
                </v-row>

                <v-row :class="smAndDown ? 'my-4' : 'my-8'">
                    <v-col cols="12" class="d-flex flex-row justify-center">
                        <v-btn
                            flat
                            class="bg-primary text-white mx-2"
                            href="https://compas.dev/compas/latest/userguide/"
                            target="_blank"
                        >
                            User Guide
                        </v-btn>
                        <v-btn
                            flat
                            class="bg-primary text-white mx-2"
                            href="https://compas.dev/compas/latest/devguide/"
                            target="_blank"
                        >
                            Developer Guide
                        </v-btn>
                        <v-btn
                            flat
                            class="bg-primary text-white mx-2"
                            href="https://compas.dev/compas/latest/api/"
                            target="_blank"
                        >
                            API Reference
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="3" class="d-flex flex-even" v-for="(item, i) in corePackages" :key="i">
                        <v-card flat class="pa-4 pb-8" rounded="0">
                            <v-card-title class="text-tertiary">{{ item.name }}</v-card-title>
                            <v-card-text class="text-grey-darken-2 flex-grow-1">
                                {{ item.description }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="my-8">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary" id="core-extensions">Core Extensions</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in bindings" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="mb-8">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary" id="ui-extensions">UI and Visualisation</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in visualisation" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="mb-8">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary" id="aec-extensions">AEC Extensions</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in aecPackages" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-white">
            <template v-slot:content>
                <v-row class="mb-8">
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary" id="dev-extensions">Dev Tools</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in devPackages" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<script>
import { Octokit } from "@octokit/rest";
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";
import RepoCard from "@/components/RepoCard.vue";
import blender from "@/assets/images/blender-icon.png";
import rhino from "@/assets/images/rhino-icon.png";
import grasshopper from "@/assets/images/grasshopper-icon.png";
import compas_cgal from "@/assets/images/compas_cgal.png";
import compas_libigl from "@/assets/images/compas_libigl.png";
import compas_occ from "@/assets/images/compas_occ.png";
import compas_gmsh from "@/assets/images/compas_gmsh.png";
import compas_fab from "@/assets/images/compas_fab.png";
import compas_slicer from "@/assets/images/compas_slicer.jpg";
import compas_cloud from "@/assets/images/compas_cloud.png";
import compas_rrc from "@/assets/images/compas_rrc.png";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        ContentSection,
        RepoCard,
    },
    methods: {
        async getAllRepos() {
            const octokit = new Octokit({
                baseUrl: "https://api.github.com",
            });
            const response = await octokit.rest.repos.listForOrg({
                org: "compas-dev",
                type: "public",
                sort: "name",
                per_page: 100,
            });
            // console.log(response.data);
            this.allRepos = response.data;
        },
        async getRepoData(name, owner = "compas-dev") {
            const octokit = new Octokit({
                baseUrl: "https://api.github.com",
            });
            const response = await octokit.rest.repos.get({
                owner: owner,
                repo: name,
            });
            // console.log(response.data);
            return response.data;
        },
        async getRepoImage(repo) {
            const octokit = new Octokit({
                baseUrl: "https://api.github.com",
            });
            const response = await octokit.rest.repos.getContent({
                owner: "compas-dev",
                repo: "compas-dev.github.io",
                path: `images/${repo}.png`,
            });
            // console.log(response.data);
            return response.data;
        },
    },
    created() {
        this.bindings.forEach((repo) => {
            if (repo.owner != null) {
                this.getRepoData(repo.name, repo.owner).then((data) => {
                    // repo.description = data.description;
                    repo.keywords = data.topics.filter((topic) => {
                        if (topic == "compas") {
                            return false;
                        }
                        return true;
                    });
                });
            }
        });
        this.aecPackages.forEach((repo) => {
            if (repo.owner != null) {
                this.getRepoData(repo.name, repo.owner).then((data) => {
                    // repo.description = data.description;
                    repo.keywords = data.topics.filter((topic) => {
                        if (topic == "compas") {
                            return false;
                        }
                        return true;
                    });
                });
            }
        });
    },
    computed: {
        compasLogo() {
            return this.$store.state.logos.compasBlue;
        },

        extensions() {
            let repos = this.allRepos.filter((repo) => {
                if (repo.name == "compas_invocations") {
                    return false;
                }
                if (repo.name == "compas_speckle") {
                    return false;
                }
                if (repo.name == "compas_view2") {
                    return false;
                }
                if (repo.name == "compas_nurbs") {
                    return false;
                }
                if (repo.name == "compas_fea") {
                    return false;
                }
                if (repo.name == "compas_usd") {
                    return false;
                }
                if (!repo.name.startsWith("compas_")) {
                    return false;
                }
                if (repo.archived) {
                    return false;
                }
                if (repo.is_template) {
                    return false;
                }
                return true;
            });

            repos.forEach((repo) => {
                const request = new XMLHttpRequest();

                const png = `https://raw.githubusercontent.com/compas-dev/compas-dev.github.io/master/images/${repo.name}.png`;
                const jpg = `https://raw.githubusercontent.com/compas-dev/compas-dev.github.io/master/images/${repo.name}.jpg`;

                request.open("GET", png, false);
                request.send(null);

                if (request.status === 404) {
                    request.open("GET", jpg, false);
                    request.send(null);

                    if (request.status === 404) {
                        repo.image = "https://via.placeholder.com/640x360";
                    } else {
                        repo.image = jpg;
                    }
                } else {
                    repo.image = png;
                }
            });

            return repos;
        },
    },
    data: () => ({
        allRepos: [],
        corePackages: [
            {
                name: "compas",
                description:
                    "Data classes, geometry kernel, data structures, visualisation interface, remote procedure calls, and more.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_blender",
                description:
                    "Conversions between COMPAS objects and native Blender types. Implementation of visualisation interface for Blender.",
                image: blender,
                keywords: null,
            },
            {
                name: "compas_ghpython",
                description:
                    "Conversions between COMPAS objects and native Rhino types. Implementation of visualisation interface for Grasshopper.",
                image: grasshopper,
                keywords: null,
            },
            {
                name: "compas_rhino",
                description:
                    "Conversions between COMPAS objects and native Rhino types. Implementation of visualisation interface for Rhino.",
                image: rhino,
                keywords: null,
            },
        ],
        visualisation: [
            {
                name: "compas_viewer",
                description: "COMPAS viewer based on PySide2 and Qt.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_ui",
                description: "Reusable components for building COMPAS user interfaces.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_web",
                description: "A web-based viewer for COMPAS.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
        ],
        bindings: [
            {
                name: "compas_cgal",
                owner: "compas-dev",
                description: "COMPAS bindings for geometry algorithms of CGAL.",
                image: compas_cgal,
                keywords: null,
            },
            {
                name: "compas_libigl",
                owner: "compas-dev",
                description: "COMPAS bindings for geometry algorithms of Libigl.",
                image: compas_libigl,
                keywords: null,
            },
            {
                name: "compas_occ",
                owner: "compas-dev",
                description:
                    "Wrapper for the geometry kernel of OCC, providing plugins for the COMPAS Nurbs and Brep pluggables.",
                image: compas_occ,
                keywords: null,
            },
            {
                name: "compas_gmsh",
                owner: "compas-dev",
                description: "High-quality FEA meshing for COMPAS based on Gmsh.",
                image: compas_gmsh,
                keywords: null,
            },
        ],
        devPackages: [
            {
                name: "compas_invocations",
                description: "COMPAS develeopment tools as invokable actions.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_cloud",
                description: "COMPAS cloud services.",
                image: compas_cloud,
                keywords: null,
            },
            {
                name: "compas_speckle",
                description: "COMPAS Speckle integration.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "sphinx_compas2_theme",
                description: "Sphinx theme for COMPAS 2 based on sphinx-book-theme and pydata-sphinx-theme.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_package_template",
                description: "Cookiecutter template for COMPAS packages.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
        ],
        aecPackages: [
            {
                name: "compas_fab",
                owner: "compas-dev",
                description: "Robotic fabrication package for the COMPAS Framework.",
                image: compas_fab,
                keywords: null,
            },
            {
                name: "compas_robots",
                owner: "compas-dev",
                description: "Robot fundamentals for the COMPAS Framework.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_rrc",
                owner: null,
                description: "Remote control of ABB robots using the Robot Web Services (RWS).",
                image: compas_rrc,
                keywords: null,
            },
            {
                name: "compas_fea2",
                owner: "compas-dev",
                description: "Finite Element Analysis ...",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_slicer",
                owner: null,
                description: "Slicing of 3D models for 3D printing.",
                image: compas_slicer,
                keywords: null,
            },
            {
                name: "compas_timber",
                owner: null,
                description: "Timber design and fabrication for the COMPAS Framework.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_fofin",
                owner: "blockresearchgroup",
                description: "Constrained form finding using dynamic relaxation and the force density method.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
        ],
    }),
};
</script>
