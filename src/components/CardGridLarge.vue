<template>
    <v-container class="pt-16 pb-16">
        <v-row>
            <v-col
                v-for="item in items"
                :key="item.id"
                cols="12"
                sm="6"
                md="6"
                xl="6"
                class="d-flex flex-even mb-8"
            >
                <v-card
                    flat
                    rounded="0"
                    class="flex-grow-1 pb-8"
                    :href="item.link"
                >
                    <div class="img-fix-container mb-8">
                        <v-img
                            :src="
                                item.thumb
                                    ? $store.state.media.remoteImageRoot +
                                      item.thumb
                                    : 'https://via.placeholder.com/640x360'
                            "
                            cover
                            class="img-fix"
                        >
                        </v-img>
                    </div>
                    <v-card-title class="text-wrap">
                        {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text class="">
                        {{ item.summary }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        items: Array,
        pathName: String,
        pathParams: Object,
    },
    methods: {},
};
</script>
