<template>
    <v-card
        flat
        rounded="0"
        :border="true"
        :class="(smAndDown ? 'mb-0' : 'mb-8') + ' flex-grow-1'"
        :href="`https://compas.dev/${repo.name}`"
        target="_blank"
    >
        <div v-if="repo.image" class="img-fix-container pt-8">
            <v-img :src="repo.image" class="img-fix"></v-img>
        </div>
        <div v-else class="img-fix-container pt-8">
            <v-responsive max-width="1600px" max-height="900px" :aspect-ratio="16 / 9">
                <div class="bg-blue-grey-lighten-5 w-100 h-100"></div>
            </v-responsive>
        </div>
        <v-card-title class="mt-8">{{ repo.name }}</v-card-title>
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
