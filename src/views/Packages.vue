<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Packages"
            summary="The compas-dev organisation on Github hosts the packages of the COMPAS framework maintained by the core development team."
        ></page-header>

        <content-section bg-color="bg-transparent">
            <template v-slot:content>
                <v-row class="my-16" v-for="(item, i) in corePackages" :key="i">
                    <v-col cols="12" md="10" class="mx-auto">
                        <v-row>
                            <v-col cols="12" md="6">
                                <h2 class="text-h4 mb-4 text-tertiary">{{ item.name }}</h2>
                                <p class="text-h6 font-weight-regular text-grey mb-4">{{ item.description }}</p>
                                <v-btn flat class="bg-primary text-white" :href="null">Documentation</v-btn>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-responsive
                                    v-if="item.image"
                                    max-width="1600px"
                                    max-height="900px"
                                    :aspect-ratio="16 / 9"
                                >
                                    <img :src="item.image" :alt="item.name" class="w-100 h-100" />
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
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary">CAD Integrations</h1>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in cadPackages" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-grey-lighten-4" margin-top="mt-1">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary">Bindings and Wrappers</h1>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in bindings" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-grey-lighten-4" margin-top="mt-1">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary">AEC Extensions</h1>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
                    <v-col cols="12" md="4" class="d-flex flex-even" v-for="repo in aecPackages" :key="repo.name">
                        <repo-card :repo="repo"></repo-card>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-grey-lighten-4" margin-top="mt-1">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="text-h3 text-primary">Dev Tools</h1>
                    </v-col>
                </v-row>

                <v-row class="mt-16">
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

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        PageHeader,
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
                    "Data classes, geometry kernel, data structures, visualisation artists, remote procedure calls, and more.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
            {
                name: "compas_viewer",
                description: "Platform independent visualisation and UI toolkit for COMPAS based on Qt and OpenGL.",
                image: "https://via.placeholder.com/640x360",
                keywords: null,
            },
        ],
        cadPackages: [
            {
                name: "compas_blender",
                description:
                    "Integration of COMPAS in Blender through geometry and data conversions, and artist implementations.",
                image: blender,
                keywords: null,
            },
            {
                name: "compas_ghpython",
                description: "Integration of COMPAS in GHPython ...",
                image: grasshopper,
                keywords: null,
            },
            {
                name: "compas_rhino",
                description:
                    "Integration of COMPAS in Rhino through geometry and data conversions, artist implementations, and a basic GUI for core COMPAS functionality.",
                image: rhino,
                keywords: null,
            },
        ],
        bindings: [
            {
                name: "compas_cgal",
                owner: "compas-dev",
                description:
                    "COMPAS-friendly bindings for specific algorithms of CGAL, the Computational Geometry Algorithms Library.",
                image: compas_cgal,
                keywords: null,
            },
            {
                name: "compas_libigl",
                owner: "compas-dev",
                description: "COMPAS-friendly bindings for specific algorithms of Libigl.",
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
                image: "https://via.placeholder.com/640x360",
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
                image: "https://via.placeholder.com/640x360",
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
