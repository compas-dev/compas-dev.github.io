<template>
    <v-container class="pb-16 mb-16">
        <v-row class="my-16">
            <v-col cols="12" class="text-center">
                <h1 class="text-h1 text-primary">Packages</h1>
                <v-responsive max-width="720px" class="mx-auto">
                    <p class="text-h5 font-weight-regular text-grey mt-8">
                        This is an overview of the packages maintained by the
                        core development team and hosted on the compas-dev
                        organization on GitHub.
                    </p>
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12">
                <h1 class="text-h3 text-center">Core Packages</h1>
            </v-col>
        </v-row>

        <v-row class="my-16">
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
                    class="flex-grow-1"
                    :href="`https://github.com/compas-dev/${repo.name}`"
                >
                    <div class="img-fix-container mb-4">
                        <v-img :src="repo.image" class="img-fix"></v-img>
                    </div>
                    <v-card-title class="">{{ repo.name }}</v-card-title>
                    <v-card-text class="">{{ repo.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="my-16">
            <v-col cols="12">
                <h1 class="text-h3 text-center">Extensions</h1>
            </v-col>
        </v-row>

        <v-row class="my-16">
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
                    class="flex-grow-1"
                    :href="`https://github.com/compas-dev/${repo.name}`"
                >
                    <div class="img-fix-container mb-4">
                        <v-img :src="repo.image" class="img-fix"></v-img>
                    </div>
                    <v-card-title class="">{{ repo.name }}</v-card-title>
                    <v-card-text class="">{{ repo.description }}</v-card-text>
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
            });
            console.log(response.data);
            this.allRepos = response.data;
        },
    },
    created() {
        this.getAllRepos();
    },
    computed: {
        extensions() {
            return this.allRepos.filter((repo) => {
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
        },
    },
    data: () => ({
        allRepos: [],
        corePackages: [
            {
                name: "compas",
                description: "The core package of the COMPAS framework.",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "compas_blender",
                description: "The core package of the COMPAS framework.",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "compas_ghpython",
                description: "The core package of the COMPAS framework.",
                image: "https://via.placeholder.com/640x360",
            },
            {
                name: "compas_rhino",
                description: "The core package of the COMPAS framework.",
                image: "https://via.placeholder.com/640x360",
            },
        ],
    }),
};
</script>
