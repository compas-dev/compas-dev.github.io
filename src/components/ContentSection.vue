<template>
    <v-row no-gutters>
        <v-col cols="12" :class="colClass">
            <v-sheet :min-height="contentHeight" :class="sheetClass">
                <v-container :class="containerClass">
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
            default: "bg-white",
        },
        marginTop: {
            type: String,
            default: "mt-0",
        },
    },
    data: () => ({
        contentHeight: 0,
    }),
    computed: {
        sheetClass() {
            return "d-flex flex-column align-center justify-center pa-4 " + this.bgColor;
        },
        containerClass() {
            return "constrained " + (this.smAndDown ? "py-8" : "py-16");
        },
        colClass() {
            return "ma-0 pa-0 " + this.marginTop;
        },
    },
    // methods: {
    //     onResize() {
    //         //this.contentHeight = window.innerHeight - 64;
    //     },
    // },
    // mounted() {
    //     this.onResize();
    // },
};
</script>
