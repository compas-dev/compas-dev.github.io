<template>
    <v-container fluid class="pa-0 ma-0">
        <page-header
            title="Getting Started"
            summary="Quickly get started with these step-by-step instructions."
            bg-color="bg-primary"
            text-color="text-white"
            sub-text-color="text-primary-lighten-3"
        ></page-header>

        <content-section class="pb-16">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Introduction</h2>
                        <p :class="pClass">
                            This tutorial assumes you have the following tools installed on your system:
                        </p>
                        <ul :class="ulClass">
                            <li>Anaconda</li>
                            <li>VS Code</li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Set up conda</h2>
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
                            <pre :class="preClass"><code class="language-bash"
>conda config --add channels conda-forge
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
                            <pre :class="preClass"><code class="language-bash"
>conda create -n compas-dev python=3.9 compas
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row class="mt-16">
                    <v-col cols="12" md="8" class="mx-auto">
                        <h2 :class="h2Class">Verify the installation</h2>
                        <p :class="pClass">
                            Since we installed COMPAS in an isolated environment, we first have to activate the
                            environment before we can use it.
                        </p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>conda activate compas-dev
</code></pre>
                        </v-sheet>
                        <p :class="pClass">
                            With the environment activated, we can use the Python interpreter directly from the command
                            line. Simply type <code :class="codeClass">python</code> and hit enter to start a new
                            session.
                        </p>
                        <v-sheet border class="my-8">
                            <pre :class="preClass"><code class="language-bash"
>python
</code></pre>
                        </v-sheet>
                        <p :class="pClass">
                            The Python interpreter will show a welcome message and then a special prompt (<code
                                :class="codeClass"
                                >>>></code
                            >). We can now verify the installation by importing COMPAS and printing the version.
                        </p>
                        <v-sheet border class="mt-8">
                            <pre :class="preClass"><code class="language-bash"
>>>> import compas
>>> compas.__version__
'2.0.1'
</code></pre>
                        </v-sheet>
                    </v-col>
                </v-row>
            </template>
        </content-section>

        <content-section bg-color="bg-blue-grey-lighten-4">
            <template v-slot:content>
                <v-row>
                    <v-col cols="12" class="mx-auto">
                        <v-sheet border>
                            <iframe src="https://compas.dev/compas-repl/" width="100%" height="500px" frameborder="0">
                            </iframe>
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
