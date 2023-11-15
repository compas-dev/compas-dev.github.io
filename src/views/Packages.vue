<template>
    <v-container class="pb-16 mb-16">
        <v-row class="my-8">
            <v-col cols="12" class="text-center">
                <h1 class="text-h2 text-primary">Packages</h1>
                <v-responsive max-width="720px" class="mx-auto">
                    <p class="text-h5 font-weight-regular text-grey mt-8">
                        This is an overview of the packages maintained by the
                        core development team and hosted on the compas-dev
                        organization on GitHub.
                    </p>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="mt-16 mb-8">
            <v-col cols="12">
                <h1 class="text-h4">Core Package</h1>
            </v-col>
        </v-row>

        <v-row class="mb-16">
            <v-col
                cols="12"
                md="4"
                class="d-flex flex-even"
                v-for="repo in corePackages"
                :key="repo.name"
            >
                <v-card
                    flat
                    rounded="0"
                    :border="true"
                    class="flex-grow-1 pb-4"
                    :href="`https://github.com/compas-dev/${repo.name}`"
                >
                    <div class="img-fix-container mb-4">
                        <v-img :src="repo.image" class="img-fix"></v-img>
                    </div>
                    <v-card-title class="">{{ repo.name }}</v-card-title>
                    <v-card-text class="text-grey">{{
                        repo.description
                    }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-16 mb-8">
            <v-col cols="12">
                <h1 class="text-h4">CAD Packages</h1>
            </v-col>
        </v-row>

        <v-row class="mb-16">
            <v-col
                cols="12"
                md="4"
                class="d-flex flex-even"
                v-for="repo in cadPackages"
                :key="repo.name"
            >
                <v-card
                    flat
                    rounded="0"
                    :border="true"
                    class="flex-grow-1 pb-4"
                    :href="`https://github.com/compas-dev/${repo.name}`"
                >
                    <div class="img-fix-container mb-4">
                        <v-img :src="repo.image" class="img-fix"></v-img>
                    </div>
                    <v-card-title class="">{{ repo.name }}</v-card-title>
                    <v-card-text class="text-grey">{{
                        repo.description
                    }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-16 mb-8">
            <v-col cols="12">
                <h1 class="text-h4">Extensions</h1>
            </v-col>
        </v-row>

        <v-row class="mb-16">
            <v-col
                cols="12"
                md="4"
                class="d-flex flex-even"
                v-for="repo in extensions"
                :key="repo.name"
            >
                <v-card
                    flat
                    rounded="0"
                    :border="true"
                    class="flex-grow-1 pb-4"
                    :href="`https://github.com/compas-dev/${repo.name}`"
                >
                    <div class="img-fix-container mb-2">
                        <v-img :src="repo.image" class="img-fix py-4"></v-img>
                    </div>
                    <v-card-title class="">{{ repo.name }}</v-card-title>
                    <v-card-text class="text-grey">{{
                        repo.description
                    }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { Octokit } from "@octokit/rest";

export default {
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
        async getRepoData(name) {
            const octokit = new Octokit({
                baseUrl: "https://api.github.com",
            });
            const response = await octokit.rest.repos.get({
                owner: "compas-dev",
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
        this.getAllRepos();
        // this.getRepoData("compas_eve");
        // this.getRepoImage("compas_cgal");
    },
    computed: {
        extensions() {
            let repos = this.allRepos.filter((repo) => {
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
                repo.image = `https://raw.githubusercontent.com/compas-dev/compas-dev.github.io/master/images/${repo.name}.png`;
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
            },
        ],
        cadPackages: [
            {
                name: "compas_blender",
                description:
                    "Integration of COMPAS in Blender through geometry and data conversions, and artist implementations.",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "compas_ghpython",
                description: "Integration of COMPAS in GHPython ...",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "compas_rhino",
                description:
                    "Integration of COMPAS in Rhino through geometry and data conversions, artist implementations, and a basic GUI for core COMPAS functionality.",
                image: "https://via.placeholder.com/640x360",
            },
        ],
    }),
};
</script>
