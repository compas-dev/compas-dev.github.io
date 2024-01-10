<template>
    <v-row no-gutters>
        <v-col cols="12" :class="colClass">
            <v-sheet v-resize="onResize" :min-height="contentHeight" :class="sheetClass">
                <v-container :class="containerClass">
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <v-img v-if="image" :src="image.src" max-width="720" class="mx-auto"></v-img>
                            <h1 v-if="title" :class="h1Class">
                                {{ title }}
                            </h1>
                            <v-responsive max-width="840px" class="mx-auto">
                                <p v-if="summary" :class="pClass">
                                    {{ summary }}
                                </p>
                            </v-responsive>
                        </v-col>
                    </v-row>

                    <slot name="rows"></slot>
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
    name: "PageHeader",
    props: {
        title: {
            type: String,
            default: "",
        },
        summary: {
            type: String,
            default: "",
        },
        image: {
            type: Object,
            default: null,
        },
        bgColor: {
            type: String,
            default: "bg-blue-grey-lighten-5",
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
            return "d-flex flex-column align-center justify-center pa-4 pb-8 " + this.bgColor;
        },
        containerClass() {
            return "constrained " + (this.smAndDown ? "py-8" : "py-16");
        },
        colClass() {
            return "ma-0 pa-0 " + this.marginTop;
        },
        h1Class() {
            return (this.smAndDown ? "text-h2" : "text-h1") + " text-primary text-center font-weight-light";
        },
        pClass() {
            return (this.smAndDown ? "text-h5" : "text-h4") + " font-weight-light text-secondary-lighten-2 mt-8";
        },
    },
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
