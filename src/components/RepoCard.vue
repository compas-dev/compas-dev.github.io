<template>
    <v-card
        flat
        rounded="0"
        :border="true"
        :class="(smAndDown ? 'mb-0' : 'mb-8') + ' flex-grow-1'"
        :href="`https://compas.dev/${repo.name}`"
        target="_blank"
    >
        <div class="img-fix-container mt-0 mb-8">
            <v-img
                v-if="['compas_blender', 'compas_ghpython', 'compas_rhino'].includes(repo.name)"
                :src="repo.image"
                class="img-fix mx-auto pt-4"
                max-width="240"
                max-height="180"
            ></v-img>
            <v-img v-else :src="repo.image" class="img-fix pt-8"></v-img>
        </div>
        <v-card-title>{{ repo.name }}</v-card-title>
        <v-card-text>
            <p>{{ repo.description }}</p>
            <v-chip-group class="my-4">
                <v-chip
                    v-for="keyword in repo.keywords"
                    :key="keyword"
                    size="small"
                    color="secondary"
                    variant="tonal"
                    label
                >
                    {{ keyword }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
    </v-card>
</template>

<style></style>

<script>
import { useDisplay } from "vuetify";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    name: "RepoCard",
    props: {
        repo: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
