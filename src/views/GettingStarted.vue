<template>
    <v-container fluid class="pa-0 ma-0 pb-16">
        <page-header title="Getting Started" summary="Learn the absolute basics in this quick tutorial."></page-header>

        <content-section>
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Prerequisites</h2>
                        <p :class="pClass">
                            This tutorial assumes you have the following tools installed on your system:
                        </p>
                        <ul :class="ulClass">
                            <li>Anaconda</li>
                            <li>VS Code</li>
                            <li>Rhino</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Setting up conda</h2>
                        <p :class="pClass">
                            For working on (research) projects, we recommend using virtual environments to isolate the
                            dependencies and requirements of each project. Virtual environments can be created using
                            <code :class="codeClass">conda</code>, the package and environment manager of Anaconda.
                        </p>
                        <p :class="pClass">
                            <code :class="codeClass">conda</code> is a command-line tool. This means that
                            <code :class="codeClass">conda</code> commands have to be executed in a terminal. On
                            Windows, you can use the Anaconda Prompt. On macOS and Linux, you can use the Terminal.
                        </p>
                        <p :class="pClass">
                            COMPAS packages are distributed through <code :class="codeClass">conda-forge</code>, which
                            is a community-driven package channel for <code :class="codeClass">conda</code>. To avoid
                            specifying the channel every time you install a COMPAS package, we recommend adding
                            <code :class="codeClass">conda-forge</code> to your list of default channels. You only have
                            to do this once.
                        </p>
                        <v-sheet border class="mt-8">
                            <pre :class="preClass"><code class="language-bash">conda config --add channels conda-forge
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Install COMPAS</h2>
                        <p :class="pClass">
                            With <code :class="codeClass">conda</code> properly configured, the following command will
                            create a new virtual environment called "compas-dev" with Python 3.9 and install the latest
                            version of COMPAS and its dependencies.
                        </p>
                        <v-sheet border class="mt-8">
                            <pre
                                :class="preClass"
                            ><code class="language-bash">conda create -n compas-dev python=3.9 compas
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>
            </template>
        </content-section>
    </v-container>
</template>

<style></style>

<script>
import { useDisplay } from "vuetify";
import PageHeader from "@/components/PageHeader.vue";
import ContentSection from "@/components/ContentSection.vue";

import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default {
    setup() {
        const { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile } = useDisplay();
        return { smAndDown, mdAndDown, smAndUp, mdAndUp, platform, mobile };
    },
    components: {
        PageHeader,
        ContentSection,
    },
    data: () => ({
        h2Class: "text-h3 text-primary mb-8",
        pClass: "text-h6 text-secondary-lighten-2 font-weight-regular mt-4",
        ulClass: "text-h6 text-secondary-lighten-2 font-weight-regular mt-4 pl-8",
        preClass: "ma-0 bg-blue-grey-lighten-5",
        codeClass: "text-secondary bg-blue-grey-lighten-5 px-1",
    }),
    mounted() {
        window.Prism = window.Prism || {};
        window.Prism.manual = true;
        Prism.highlightAll(); // highlight your code on mount
    },
};
</script>
