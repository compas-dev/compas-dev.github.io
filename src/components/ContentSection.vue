<template>
    <v-row no-gutters>
        <v-col cols="12" :class="'ma-0 pa-0 ' + marginTop">
            <v-sheet
                v-resize="onResize"
                :min-height="contentHeight"
                :class="'d-flex flex-column align-center justify-center pa-4 ' + bgColor"
            >
                <v-container :class="'constrained ' + (smAndDown ? 'py-8' : 'py-16')">
                    <slot name="content"></slot>
                </v-container>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    name: "ContentSection",
    props: {
        bgColor: {
            type: String,
            default: "bg-grey-lighten-5",
        },
        marginTop: {
            type: String,
            default: "mt-0",
        },
    },
    data: () => ({
        contentHeight: 0,
    }),
    methods: {
        onResize() {
            //this.contentHeight = window.innerHeight - 64;
        },
    },
    mounted() {
        this.onResize();
    },
};
</script>
